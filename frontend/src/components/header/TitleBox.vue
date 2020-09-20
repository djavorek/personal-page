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

<style scoped>
	#titleBox {
		display: inline-block;
		padding: 5px 50px;

		font-style: normal;
		font-weight: 300;
		font-size: 72px;
		line-height: 91px;
		text-align: center;

		mix-blend-mode: lighten;
		border: 10px solid #FFFFFF;
	}

	.greenText {
		color: #9BFF5D;
	}

	#hello {
		font-size: 72px;
	}

	#name {
		font-size: 48px;
	}

</style>
