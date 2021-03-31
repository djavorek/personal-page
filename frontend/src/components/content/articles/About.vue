<template>
  <div class="intro tile is-ancestor">
    <div class="tile is-vertical is-parent">
        <div class="tile is-6 cobox notification is-warning">
          <p class="mainText">Személyes</p>
        </div>
        <div class="tile is-6 cobox notification is-success">
          <p class="mainText">Tanulmányok</p>
        </div>
        <div class="tile is-6 cobox notification is-info">
          <p class="mainText">Munka</p>
        </div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'About'
}
</script>

<style scoped lang="scss">
  #intro {
    margin: 2em;
  }

  .cobox {
    padding: 0.5em;
    margin: 0.5em;

    font-size: 2.5rem;
    text-align: center;
    
    -webkit-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
  }

  .mainText {
    margin: 0 auto;
  }

</style>