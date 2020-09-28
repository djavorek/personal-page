<template>
  <div class="itemHolder">
	<a class="menuItem"
	v-on:click="$emit('select', item.id)">
		{{item.text}}
	</a>
	<hr class="indicator" v-show="selected"/>

  </div>
</template>

<script>
export default {
	props: ['item', 'selected']
}
</script>

<style lang="scss" scoped>
	.itemHolder {
		margin: 5vh;
		display: flex;
		align-items: center;
		width: 40vh;
	}

	.menuItem {
		font-size: 2.6rem;
		text-align: center;
	}

	.indicator {
		width: 10rem;
		height: 0.1rem;
		background-color: $secondary;
		margin-left: auto;
		margin-right: 0;
	}

	.menuItem:hover {
		color: white;
	}

</style>
