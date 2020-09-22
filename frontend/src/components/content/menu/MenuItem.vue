<template>
  <div class="menuItem">
	<a
	v-on:click="$emit('select', item.id)">
		{{item.text}}
	</a>
  </div>
</template>

<script>
export default {
	props: ['item']
}
</script>

<style scoped>
	.menuItem {
		font-size: 26px;
		margin-bottom: 3vh;
	}

	.menuItem :hover {
		color: white;
	}

</style>
