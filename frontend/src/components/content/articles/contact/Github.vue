<template>
  <section id="github" :class="`hero`">
    <div class="has-text-centered">
      <h1 class="carusel-title">Github</h1>
      <p class="">{{this.link}}</p>
    </div>
    <p class="">{{this.link}}</p>
    <img id="githubAvatar" v-bind:src="this.avatarLink">
  </section>
</template>

<script>

export default {
  name: 'Github',
  created() {
    fetch("https://api.github.com/users/djavorek")
      .then(async response => {
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }

        this.avatarLink = data.avatar_url;
        this.link = data.html_url;

      })
      .catch(error => {
        console.error('Github User API failed: ' + error);
      })
  },
  data: function () {
    return {
      avatarLink: '',
      link: '',
    }
  }
 }
</script>

<style scoped lang="scss">
  #github {
    padding: 2em;
    min-height: 90%;
  }

  .carusel-title {
    font-size: 6.6rem;
  }

  #githubAvatar {
    width: 10%;
  }

</style>