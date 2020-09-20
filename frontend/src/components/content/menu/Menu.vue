<template>
  <div 
	id="menu">
	<MenuItem 
		v-for="item in menuList"
		v-bind:item="item"
		v-bind:key="item.id"/>
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
				text: "Bemutatkozás",
				link: ""
			},
			{
				id: 1,
				text: "Projektek",
				link: ""
			},
			{
				id: 2,
				text: "Elérhetőségek",
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
		margin-top: 50px;
	}

</style>
