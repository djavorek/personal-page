<template>
  <div id="header" >
	<table>
		<tr>
			<TitleBox/>
		</tr>
		<tr align="center">
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
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#downButton {
		width: 180px;
		height: 180px;
		margin-top: 25px;
	}
</style>
