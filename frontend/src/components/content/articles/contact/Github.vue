<template>
  <section id="github" :class="`hero is-medium is-bold is-warning`">
    <div class="hero-body has-text-centered">
      <h1 class="title">Github</h1>
    </div>
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
      })
      .catch(error => {
        console.error('Github User API failed: ' + error);
      })
  }
 }
</script>

<style scoped lang="scss">
  #github {
    min-height: 95vh;
  }

</style>