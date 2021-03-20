<template>
	<div id="menu">
		<MenuItem 
			v-for="item in menuList"
			:item="item"
			:key="item.id"
			:selected="selected == item.id"
			v-on:select="selected = $event"/>
	</div>
</template>

<script>
import MenuItem from './MenuItem.vue'

export default {

  name: 'Menu',
  components: {
	MenuItem
  },
  data: function () {
	return {
		menuList: [
			{
				id: 0,
				text: "Mit",
				link: ""
			},
			{
				id: 1,
				text: "Hol",
				link: ""
			},
			{
				id: 2,
				text: "Miért",
				link: ""
			}
		],
		selected: 0
	}
  }
}
</script>

<style scoped>
	#menu {
		padding-left: 5vw;
		min-width: 60vh;
	}


</style>
