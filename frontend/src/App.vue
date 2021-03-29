<template>
  <div id="app" :style="{ backgroundImage: 'url(' + require('@/assets/bg.png') + ')' }" >
    <div id="header">
      <Header />
    </div>
    <div id="content">
      <Content />
    </div>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Content from './components/content/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Content
  }
}
</script>

<style lang="scss">
	@font-face {
		font-family: "Merriweather";
		src: local("Merriweather"),
		url(~@/assets/fonts/Merriweather/Merriweather-Light.ttf) format("truetype");
	}

	#app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		background-repeat: no-repeat;
		background-size: cover;

		-webkit-touch-callout: none; /* iOS Safari */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
        user-select: none; /* Non-prefixed version, currently
							supported by Chrome, Edge, Opera and Firefox */
	}

	html, body {
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;

		color: $text;
		font-family: "Merriweather", Helvetica, Arial;
		font-size: 62.5%; // Use REM for font-size everywhere, 1.0 rem = 10 px
	}

	a {
		color: inherit;
		text-decoration: inherit;
	}

	a:hover {
		text-decoration: inherit;
	}
</style>
