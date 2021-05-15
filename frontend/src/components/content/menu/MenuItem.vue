<template>
  <div class="menuHolder">
	<a class="menuItem notouchy" href="#content"
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
	@use '@/scss/common';

	.menuHolder {
		margin: 3em 1em 3em 0;
		display: flex;
		align-items: center;
	}

	.menuItem {
		font-size: calc(1.5rem + 0.25vw);
		text-align: center;
		width: 100%;
		text-decoration: none;
		background: linear-gradient(common.$primary, common.$info) bottom / 0 .1em no-repeat;
		background-position: right bottom;
		transition: .6s background-size;
	}

	.selected {
		background-size: 100% .1em;
	}

	.indicator {
		width: 10%;
		height: 0.3vh;
		background-color: common.$primary;
	}

	.menuItem:hover {
		color: common.$info;
	}

</style>
