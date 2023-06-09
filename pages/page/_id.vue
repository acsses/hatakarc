<template>
  <div id="page_index">
    <div id="page"> 
      <img v-bind:src="cover" alt="" class="head_img"/>
      <h1 class="title">{{ title }}</h1>
      <div class="propaty">
          <p>はたか</p>
          <p>{{ date }}</p>
      </div>
      <div class="content">
        <div v-for="content in contents" :key="content.id">
          <div v-if="content.type=='heading_1'">
              <h2>{{ content.heading_1.rich_text[0].text.content }}</h2>
          </div>
          <div v-else-if="content.type=='heading_2'">
              <h3>{{ content.heading_2.rich_text[0].text.content }}</h3>
          </div>
          <div v-else-if="content.type=='paragraph'">
              <p v-if="content.paragraph.rich_text.length!=0">{{ content.paragraph.rich_text[0].text.content }}</p>
          </div>
          <div v-else-if="content.type=='bulleted_list_item'">
              <li>{{ content.bulleted_list_item.rich_text[0].text.content }}</li>
          </div>
          <div v-else-if="content.type=='equation'">
            <vue-mathjax :formula="'$$'+content.equation.expression+'$$'"></vue-mathjax>
          </div>
          <div v-else>
              {{ content.type }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueMathjax } from "vue-mathjax";

export default {
  name:"page",
  components: {
    "vue-mathjax": VueMathjax,
  },
  props: ['mode'],
  data(){
    return {
      propaty:{},
      contents:[],
      cover:"",
      date:"",
      title:"",
    }
  },
  async mounted(){
    var res_propaty = await this.$axios.get(`${location.origin}/api/page/property/${this.$route.params.id}`);
    this.cover = res_propaty.data.cover.external.url
    this.title = res_propaty.data.properties.Name.title[0].plain_text
    this.date = res_propaty.data.properties.Date.date.start
    var res_content = await this.$axios.get(`${location.origin}/api/page/content/${this.$route.params.id}`);
    this.contents = res_content.data.results
    console.log(this.$route.params)
  },
  head() {
    return {
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-AMS-MML_SVG"
        }
      ]
    };
  }
}
</script>
<style scoped>
#page_index{
  width: 100vw;
  margin: auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#page_index nav{
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
#page{
    width: 70%;
    margin: auto;
    margin-bottom: 50px;
}
.head_img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
}
.propaty{
    width: 100%;
    display: flex;
    justify-content: center;
}
.propaty p{
    margin-right: 5px;
    margin-left: 5px;
}
.content{
    width: 70%;
    margin:auto;
    width: 50vw;
    margin: auto;
}
.content h2{
    text-align: left;
}
.content h3{
    text-align: left;
}
.content p{
    text-align: left;
}
.content li{
    text-align: left;
}
#toggle_footer{
  display: flex;
  justify-content: center;
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
