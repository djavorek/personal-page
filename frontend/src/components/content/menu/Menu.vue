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
import MenuItem from './MenuItem.vue';
import MenuList from './MenuList';

export default {
  name: 'Menu',
  components: {
	MenuItem
  },
  data: function () {
	return {
		menuList: MenuList,
		selected: 0
	}
  },
  
  watch: {
    selected(newValue, oldValue) {
		if (newValue !== oldValue) {
			this.$emit('changed', newValue);
		} 
    },
  },
}
</script>

<style scoped>
	#menu {
		padding-left: 5vw;
		min-width: 60vh;
	}


</style>
