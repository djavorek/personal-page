<template>
  <div class="menuItem">
	<span>{{item.text}}</span>
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

</style>
