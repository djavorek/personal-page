<template>
  <div id="header" >
    <div>
      <TitleBox/>
    </div>
    <div>
      <a href="#menu">
        <b-icon id="downButton" pack="fas" icon="angle-double-down" size="is-large"></b-icon>
      </a>
    </div>
    <!-- <div class="parallax" :style="{ backgroundImage: 'url(' + require('@/assets/fg.svg') + ')' }"></div> -->
  </div>
</template>

<script>
import TitleBox from './TitleBox.vue'

export default {
  name: 'Header',
  components: {
	TitleBox,
  }
}
</script>

<style lang="scss" scoped>
	#header {
    height: 100vh;
		display: flex;
    align-items: center;
    justify-content: center;
		flex-direction: column;
	}

	.parallax {
		/* Create the parallax scrolling effect */
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

    z-index: 0;
	}

	#downButton {
		width: 180px;
		height: 180px;
		margin-top: 25px;
		color: $warning;
    z-index: 30;
	}
</style>
