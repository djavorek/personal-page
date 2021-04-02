<template>
  <div class="menuHolder">
	<a class="menuItem" href="#articleHolder"
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
		//font-size: 2.5rem;
		font-size: calc(1.5rem + 0.25vw);
		text-align: center;
		width: 100%;
		text-decoration: none;
		background: linear-gradient($primary, $warning) bottom / 0 .1em no-repeat;
		background-position: right bottom;
		transition: 1s background-size;
	}

	.selected {
		background-size: 100% .1em;
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
