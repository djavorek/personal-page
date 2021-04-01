<template>
  <div class="menuHolder">
	<a class="menuItem"
	v-bind:class="{ selected: selected }"
	v-on:click="$emit('select', item.id)">
		{{item.text}}
	</a>
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
	}

	.menuItem {
		font-size: 2.5rem;
		text-align: center;
		width: 100%;
	}

	.selected {
		border: .1em solid $warning;
	}

	.indicator {
		width: 10%;
		height: 0.3vh;
		background-color: $primary;
	}

	.menuItem:hover {
		color: $primary;
	}

</style>
