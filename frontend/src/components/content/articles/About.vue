<template>
  <div class="intro tile is-ancestor">
    <div class="tile is-vertical is-parent"> <!-- 1st column -->
      <div class="tile">
        <div class="tile is-4 cobox notification is-warning">
          Szegeden lakok.
        </div>
        <div class="tile is-8 cobox notification is-success">
          Mérnökinformatikus vagyok.
        </div>
      </div>
      <div class="tile cobox notification is-4 is-info">
        
      </div>
      <div class="tile cobox notification is-8 is-danger">
        Az EPAM-nál dolgozok, mint Szoftvermérnök
      </div>
		</div>
    <div class="tile is-vertical is-parent"> <!-- 2nd column -->
      <div class="tile is-12 cobox notification is-info">
        A Miskolci Egyetemen végeztem.
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
  .cobox {
    padding: 2vw;
    margin: 0.5vw;

    font-size: 250%;
    text-align: center;

    -webkit-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
    -moz-box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);
    box-shadow: 5px 5px 10px 0px rgba(0,0,0,0.7);

    border-radius: 0.5vw 3vw;
  }

</style>