<template>
  <div id="email">
    <h1 id="email-title">ITT AZONNAL ÍRHATSZ</h1>
    <div id="email-writer">
      <form 
        id="instant-contact"
        name="instant-contact"
        class="topBefore"
        method="post "
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        @submit.prevent="handleFormSubmit"
      >
        <div hidden aria-hidden="true">
          <label>
            Don’t fill this out if you're human: 
            <input name="bot-field" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="instant-contact" />
        <input id="name" type="text" v-model="form.name" placeholder="NEVED">
        <input id="contact" type="text" v-model="form.contact" placeholder="ELÉRHETŐSÉGED">
        <textarea id="message" type="text" v-model="form.message" placeholder="ÜZENETED"></textarea>
        <input id="submit" type="submit" v-on:submit.prevent="handleFormSubmit" value="KÜLDÉS">
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Email',
  data() {
    return {
      form : {
        name: '',
        contact: '',
        message: '',
      },
    }
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
            method: 'POST',
            header: { "Content-Type": "application/x-www-form-urlencoded" },
            body: this.encode({
              "form-name": "instant-contact",
              ...this.form,
            }),
        };

        fetch(
            location.href, 
            config
        )
        .then(document.getElementById("instant-contact").innerHTML = `
          <div>
            Megkaptam az üzeneted.
          </div>
        `)
        .catch(error => console.log(error))

    }
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/_variables.scss';
  
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

  input, textarea, #submit {
    box-sizing: border-box;

    font-size: 1.5rem;
    padding: 0px 2em 0px 2em;
    width: 100%;

    min-height: 6em;
    
    background: transparent;
    outline: none;
    
    border: solid 1px $text;
  }

  textarea {
    resize: none;
  }

  textarea::-webkit-input-placeholder { padding-top: 2em; }
  textarea:-moz-placeholder { /* Firefox 18- */ padding-top: 2em; }
  textarea::-moz-placeholder {  /* Firefox 19+ */ padding-top: 2em; }
  textarea:-ms-input-placeholder { padding-top: 2em; }

  #submit, #message, #contact {
    border-top: none;
  }

  #submit {
    font-size: 2.875em;

    color: $primary;

    outline:none;
    cursor: pointer;
    
    border: solid 1px #b3aca7;
    border-top: none;

    background: {
      image: linear-gradient(45deg, $primary 50%, transparent 50%);
      position: 100%;
      size: 400%;
    }
    transition: 1s ease-out;
    
    &:hover {
      background-position: 0;
      color: $background;
    }
  }

</style>