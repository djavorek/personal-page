<template>
  <div id="articleHolder">

  </div>
</template>

<script>

export default {
  name: 'ArticleBox'
}
</script>

<style scoped lang="scss">

#content {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: stretch;
}

#articleHolder {
  height: 1200px;
  width: 500px;
  background-color: $primary;
  height: 90vh;
  margin: 5vh 0;
  border-radius: 2rem;

  filter: alpha(opacity=05);
  /* IE */
  -moz-opacity: 0.05;
  /* Mozilla */
  opacity: 0.05;
}

</style>