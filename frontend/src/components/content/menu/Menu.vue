<template>
	<div id="menu" class="glassmorphism">
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

<style scoped lang="scss">
	@import '@/scss/common.scss';

	#menu {
		padding: 5vh;
		max-width: 98vw;
	}

	@media screen and (min-width: 768px) {
		#menu {
			min-height: 95vh;
			border-radius: 0;
			border-right: 0;

			background-color: lighten($dark, 0.2);

			-webkit-box-shadow: .5rem 0px 10rem 0px rgba(0,0,0);
			-moz-box-shadow: .5rem 0px 10rem 0px rgba(0,0,0);
			box-shadow: .5rem 0px 10rem 0px rgba(0,0,0)
		}
	}

</style>
