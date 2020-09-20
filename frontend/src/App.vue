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

<style>
	@font-face {
	font-family: "Merriweather";
	src: local("Merriweather"),
	url(~@/assets/fonts/Merriweather/Merriweather-Light.ttf) format("truetype");
	}

#app {
  font-family: "Merriweather", Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
}

html, body {
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: black;
  color: #BDC3C7;
  scroll-behavior: smooth;
}

#header {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
