<template>
  <div id="email">
    <h1 id="email-title">ÍRJ KÖZVETLENÜL</h1>
    <div id="email-writer">
      <form id="form" class="topBefore">
        <input id="name" type="text" placeholder="NEVED">
        <input id="contact" type="text" placeholder="ELÉRHETŐSÉGED">
        <textarea id="message" type="text" placeholder="ÜZENETED"></textarea>
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
      sendername: '',
      sendercontact: '',

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

  header {
    position: relative;
    margin: 100px 0 25px 0;
    font-size: 2.3em;
    text-align: center;
    letter-spacing: 7px;
  }

  #form {
    position: relative;
    margin: 50px auto 100px auto;
  }

  input, textarea, #submit {
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
    height: 110px;
    max-height: 110px;
    padding: 15px;
  
  }

  #submit {
    
    padding: 0;
    margin: -5px 0px 0px 0px;
    
    font-family: 'Lato', sans-serif;
    font-size: 0.875em;
    color: #b3aca7;
    
    outline:none;
    cursor: pointer;
    
    border: solid 1px #b3aca7;
    border-top: none;
  }
</style>