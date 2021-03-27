<template>
  <div class="menuHoler">
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
	.menuHolder {
		margin: 3vh 1vh 3vh 0vh;
		display: flex;
		align-items: center;
		width: 40vh;
	}

	.menuItem {
		font-size: 2.6rem;
		text-align: left;
		min-width: 200px;
		padding: 1rem;
	}

	.indicator {
		width: 2vw;
		height: 0.3vh;
		background-color: $primary;
		margin-right: 0;
	}

	.menuItem:hover {
		color: white;
	}

</style>
