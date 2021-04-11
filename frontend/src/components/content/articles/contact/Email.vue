<template>
  <div id="email">
    <h1 id="email-title">ITT AZONNAL ÍRHATSZ</h1>
    <div id="email-writer">
      <form 
        id="form"
        name="instant-contact"
        class="topBefore"
        method="post "
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="instant-contact" />
        <input id="name" type="text" v-model="form.name" placeholder="NEVED">
        <input id="contact" type="text" v-model="form.contact" placeholder="ELÉRHETŐSÉGED">
        <textarea id="message" type="text" v-model="form.message" placeholder="ÜZENETED"></textarea>
        <input id="submit" type="submit" value="KÜLDÉS">
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
  }
}
</script>

<style scoped lang="scss">
  @import '@/scss/_variables.scss';
  
  #email {
    min-height: 40vh;
    width: 30vw;
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
    
    transition: all 0.3s ease-in-out;
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
  }


  input:hover, textarea:hover , #submit:hover {
    background: #b3aca7;
    color: #e2dedb;
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
    color: #b3aca7;
    
    outline:none;
    cursor: pointer;
    
    border: solid 1px #b3aca7;
    border-top: none;
  }
</style>