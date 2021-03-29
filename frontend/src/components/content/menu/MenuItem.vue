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
		margin: 3em 1em 3em 0;
		display: flex;
		align-items: center;
		width: 40%;
	}

	.menuItem {
		font-size: 2.5rem;
		text-align: left;
		width: 35%;
		padding: 1em;
	}

	.indicator {
		width: 5%;
		height: 0.3vh;
		background-color: $primary;
		margin-right: 0 auto;
	}

	.menuItem:hover {
		color: white;
	}

</style>
