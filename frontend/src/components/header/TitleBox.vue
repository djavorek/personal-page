<template>
  <div id="titleBox">
	<div id="hello">
		<span>HELLO</span><span class="greenText">.</span>
	</div>
	<div id="name">
		<span class="greenText">Dénes</span><span> vagyok</span>
	</div>
  </div>
</template>

<style lang="scss" scoped>
	#titleBox {
		display: inline-block;
		padding: 2vh 3vw;

		font-size: 62.5%;
		font-style: normal;
		font-weight: 300;
		line-height: 100px;
		text-align: center;

		mix-blend-mode: lighten;
		border: 5px solid #FFFFFF;
	}

	.greenText {
		color: $primary;
	}

	#hello {
		font-size: 5.75rem;
	}

	#name {
		font-size: 3.25rem;
	}

</style>
