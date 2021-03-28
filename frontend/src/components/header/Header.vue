<template>
  <div id="header" >
	<table>
		<tr class="above">
			<TitleBox/>
		</tr>
		<div class="parallax" :style="{ backgroundImage: 'url(' + require('@/assets/fg.svg') + ')' }"></div>
		<tr align="center" class="above">
			<a href="#menu">
				<b-icon id="downButton" pack="fas" icon="angle-double-down" size="is-large"></b-icon>
			</a>
		</tr>
	</table>
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

<style scoped>
	#header {
    height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
	}

  #above {
    position: relative;
    z-index: 30;
  }

	.parallax {
		/* Create the parallax scrolling effect */
		background-attachment: fixed;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		content: " ";
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;

		display: block;
		overflow: auto;

		background-size: 100%;
    z-index: 0;
	}

	#downButton {
		width: 180px;
		height: 180px;
		margin-top: 25px;
	}
</style>
