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
		padding: 5px 50px;

		font-style: normal;
		font-weight: 300;
		font-size: 7.2em;
		line-height: 9.1rem;
		text-align: center;

		mix-blend-mode: lighten;
		border: 10px solid #FFFFFF;
	}

	.greenText {
		color: $secondary;
	}

	#hello {
		font-size: 7.2rem;
	}

	#name {
		font-size: 4.8rem;
	}

</style>
