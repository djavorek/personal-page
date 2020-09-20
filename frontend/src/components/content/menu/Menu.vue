<template>
  <div id="menu" data-aos="fade-up-right">
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
				text: "",
				link: ""
			},
			{
				id: 1,
				text: "",
				link: ""
			},
		],
		selected: 0
	}
  }
}
</script>

<style scoped>
	#menu {
		margin: 500px;
		font-size: 60px;
		
	}

</style>
