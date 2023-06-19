<template>
  <div id="layout" :class="{ dark : isActive }">
    <nav>
      <nuxt-link to="/" class="home_link">hatakarch</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
    <Nuxt/>
    <footer>
      <div id="light_and_dark">
        <lightmode/>
        <div class="toggle" @click="checked" :class="{ checked : isActive }">
          <input type="checkbox" name="check" />
        </div>
        <darkmode/>
      </div>
      <p>Copyright © 2023 hataka</p>
    </footer>
  </div>
</template>

<script>
import darkmode from '~/components/dark_mode_icon.vue'
import lightmode from '~/components/light_mode_icon.vue'

export default {
  name:"page",
  components: {
    darkmode,
    lightmode
  },
  data(){
    return {
      isActive:false
    }
  },
  methods: {
    checked () {
      this.isActive = !this.isActive
    },
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100&display=swap');
#layout{
  margin: auto;
  font-family: 'Zen Maru Gothic', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  position: fixed;
  width: 100vw;
  padding: 15px;
  display: flex;
  justify-content: left;
  box-sizing: border-box;
  backdrop-filter: blur(5px);
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 5px;
  font-family: 'M PLUS 1p', sans-serif;
}
.dark nav a {
  font-weight: bold;
  color: white;
}
nav a:visited{
  color: #42b983;
  font-weight: bold;
}
nav a.home_link {
  color: #2c3e50;
  margin: 5px;
}
.dark a.home_link {
  color: white;
  margin: 5px;
}
footer{
  width:100vw
}
#light_and_dark{
  display: flex;
  justify-content: center;
  padding: 10px;
}
.toggle {
  position: relative;
  width: 55px;
  height: 24px;
  margin: auto;
  margin-right: 5px;
  margin-left: 10px;
  border-radius: 25px;
  overflow: hidden;
  cursor: pointer;
}
.toggle input[type=checkbox] {
  display: none;
}
.toggle:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #C4C4C5;
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
}
.toggle:after {
  content: "";
  position: absolute;
  top: 1.5px;
  left: 1.5px;
  width: 21px;
  height: 21px;
  display: block;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0 4.5px 14px -3px rgba(0, 0, 0, 0.3);
  -webkit-transition: 0.2s ease-out;
  transition: 0.2s ease-out;
}
.toggle.checked:before {
  background: #35c759;
}
.toggle.checked:after {
  left: 33px;
  box-shadow: 0 4.5px 14px -3px rgba(0, 0, 0, 0.5);
}
footer p{
  margin: auto;
  margin-bottom: 0;
  padding: 16px;
}
.dark{
  background-color: #353B41;
}
.dark footer p{
  color: white;
}
.dark svg{
  fill: white;
}
body{
  margin: 0;
}
</style>