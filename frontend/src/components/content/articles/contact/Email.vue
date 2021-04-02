<template>
  <div id="email">
    <span id="email-title">ÍRJ KÖZVETLENÜL</span>
    <div id="email-writer">
      <label for="name">Név</label>
      <input id="name" name="name" v-model="sendername" type="text" placeholder="A neved">
      <label for="recontact">Elérhetőséged</label>
      <input id="recontact" name="recontact" v-model="sendercontact" type="email" input="email" placeholder="Email címed / Telefonszámod">
      <label for="message">Üzenet</label>
      <textarea id="message" name="message" placeholder="Az üzeneted" style="height:200px"></textarea>
      <input class="animated bounceIn" type="submit" value="I Love Helvetica!">

      <input type="submit" value="Submit" v-on:click="click">
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
  #email {
    min-height: 40vh;
    width: 30vw;
    background: white;
    color: black;
    text-align: center;
  }


</style>