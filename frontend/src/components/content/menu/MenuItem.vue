<template>
  <div class="itemHolder">
	<a class="menuItem"
	v-on:click="$emit('select', item.id)">
		{{item.text}}
	</a>
	<span class="indicator" v-show="selected"/>

  </div>
</template>

<script>
export default {
	props: ['item', 'selected']
}
</script>

<style lang="scss" scoped>
	.itemHolder {
		margin: 3vh 1vh 3vh 0vh;
		display: flex;
		align-items: center;
		width: 40vh;
	}

	.menuItem {
		font-size: 2.6rem;
		text-align: right;
		min-width: 200px;
		padding: 1rem;
	}

	.indicator {
		width: 5vw;
		height: 0.3vh;
		background-color: $secondary;
		margin-left: auto;
		margin-right: 0;
	}

	.menuItem:hover {
		color: white;
	}

</style>
