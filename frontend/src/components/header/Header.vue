<template>
  <div id="header" >
	<table>
		<tr>
			<TitleBox/>
		</tr>
		<tr align="center">
			<b-link href="#menu">
				<b-icon-arrow-down id="downButton" variant="white" animation="cylon-vertical"></b-icon-arrow-down>
			</b-link>
		</tr>
	</table>
  </div>
</template>

<script>
import { BIconArrowDown } from 'bootstrap-vue'
import TitleBox from './TitleBox.vue'

export default {
  name: 'Header',
  components: {
	TitleBox,
	BIconArrowDown
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
	width: 120px;
	height: 120px;
	margin-top: 25px;
}
</style>
