<template>
  <div id="layout">
    <nav>
      <nuxt-link to="/">Home</nuxt-link> |
      <nuxt-link to="/about">About</nuxt-link>
    </nav>
    <Nuxt />
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
  props: ['mode'],
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
#layout{
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav{
  width: 100vw;
  padding: 30px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a:visited{
  color: #42b983;
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
</style>