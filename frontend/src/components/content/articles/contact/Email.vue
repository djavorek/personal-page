<template>
  <div id="email">
    <h1 id="email-title">ITT AZONNAL ÍRHATSZ</h1>
    <div v-if="!this.sent">
      <form
        id="instant-contact"
        name="instant-contact"
        class="topBefore"
        method="post "
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleFormSubmit"
        v-bind:class="{ load: this.loading, error: this.hasError }"
      >
        <div hidden aria-hidden="true">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="instant-contact" />
        <input id="name" type="text" v-model="form.name" placeholder="NEVED" />
        <input
          id="contact"
          type="text"
          v-model="form.contact"
          placeholder="ELÉRHETŐSÉGED"
        />
        <textarea
          id="message"
          type="text"
          v-model="form.message"
          placeholder="ÜZENETED"
        ></textarea>
        <input
          id="submit"
          type="submit"
          v-on:submit.prevent="handleFormSubmit"
          value="KÜLDÉS"
        />
      </form>
      <div class="errorMsg" v-if="this.hasError">
        <span
          >Ez most nem sikerült. Ha nem vagy nagyon csalódott, akkor keress meg
          e-mailben vagy nézz vissza később.</span
        >
      </div>
    </div>
    <div v-else>Megkaptam az üzeneted.</div>
  </div>
</template>

<script>
export default {
  name: "Email",
  data() {
    return {
      form: {
        name: "",
        contact: "",
        message: "",
      },
      loading: false,
      sent: false,
      hasError: false,
    };
  },
  methods: {
    encode(data) {
      const formData = new FormData();

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }

      return formData;
    },

    handleFormSubmit() {
      const config = {
        method: "POST",
        header: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(this.encode({
          ...this.form,
        })).toString(),
      };

      this.loading = true;
      this.hasError = false;
      fetch(
        location.protocol +
          "//" +
          location.hostname +
          "/.netlify/functions/send-email",
        config
      )
        .then(() => {
          this.loading = false;
          this.sent = true;
        })
        .catch((e) => {
          console.warn(`Error while sending email: ${e}`);
          this.loading = false;
          this.hasError = true;
        });
    },
  },
};
</script>

<style scoped lang="scss">
@use '@/scss/common';
@use '@/scss/animation';

#email {
  min-height: 40vh;
  width: 100%;
  text-align: center;
}

#email-title {
  font-size: 3rem;
}

#form {
  position: relative;
  margin: 50px auto 100px auto;
}

input,
textarea,
#submit {
  box-sizing: border-box;

  font-size: 1.5rem;
  padding: 0px 2em 0px 2em;
  width: 100%;

  min-height: 6em;

  background: transparent;
  outline: none;

  border: 0px;
  border-bottom: solid 1px common.$text;
}

input,
textarea {
  color: common.$text;
}

textarea {
  resize: none;
}

textarea::-webkit-input-placeholder {
  padding-top: 2em;
}
textarea:-moz-placeholder {
  /* Firefox 18- */
  padding-top: 2em;
}
textarea::-moz-placeholder {
  /* Firefox 19+ */
  padding-top: 2em;
}
textarea:-ms-input-placeholder {
  padding-top: 2em;
}

#submit {
  font-size: 2.875em;

  color: common.$primary;

  outline: none;
  cursor: pointer;
  border-bottom: 0px;

  background: {
    image: linear-gradient(45deg, common.$primary 50%, transparent 50%);
    position: 100%;
    size: 400%;
  }
  transition: 1s ease-out;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-position: 0;
      color: common.$background;
    }
  }
}

.load {
  @include animation.border-load-anim(common.$primary);

  border: 2px solid transparent;
  animation: pencil 2s infinite linear;
}

.error {
  border: 2px solid common.$warning;
}

.errorMsg {
  padding: 0.6em;
  font-family: "Oswald", Helvetica, Arial;
  font-size: 1.9rem;
  background-color: common.$warning;
}
</style>
