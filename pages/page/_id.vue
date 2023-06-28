<template>
  <div id="page_index">
    <LoadingAnimation v-show="loading"/>
    <div id="page"> 
      <div class="margin"></div>
      <img v-bind:src="cover" alt="" class="head_img"/>
      <h1 class="title">{{ title }}</h1>
      <div class="propaty">
          <div class="tags">
            <nuxt-link :to="'/serch/'+tag.name" v-for="tag in tags" :key="tag.id" class="tag" >
              {{ tag.name }}
            </nuxt-link>
          </div>
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
          <div v-else-if="content.type=='paragraph'" class="outer">
            <p>
              <template v-for="text in content.paragraph.rich_text">
                <span v-if="text.type=='text'" :class="text.annotations">
                  {{ text.text.content }}
                </span>
                <span v-else-if="text.type=='equation'">
                  <vue-mathjax :formula="'$'+text.equation.expression+'$'"></vue-mathjax>
                </span>
              </template>
            </p>
          </div>
          <div v-else-if="content.type=='bulleted_list_item'">
              <li>{{ content.bulleted_list_item.rich_text[0].text.content }}</li>
          </div>
          <div v-else-if="content.type=='equation'">
            <vue-mathjax :formula="'$$'+content.equation.expression+'$$'"></vue-mathjax>
          </div>
          <pre v-highlightjs v-else-if="content.type=='code'"><code :class="content.code.language">{{ content.code.rich_text[0].text.content }}</code></pre>
          <div v-else-if="content.type=='quote'">
            <blockquote>
              <p>{{ content.quote.rich_text[0].text.content }}</p>
            </blockquote>
          </div>
          <div v-else-if="content.type=='image'">
            <img :src="content.image.file.url" alt="">
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
import LoadingAnimation from "../../components/LoadingAnimation.vue";

export default {
  name:"page",
  components: {
    "vue-mathjax": VueMathjax,
  },
  data(){
    return {
      loading:true,
      tags:{},
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
    this.tags = res_propaty.data.properties.Tag.multi_select
    var res_content = await this.$axios.get(`${location.origin}/api/page/content/${this.$route.params.id}`);
    this.contents = res_content.data.results
    this.loading=false
  },
  head() {
    return {
      title:"hatkarc/"+this.title,
      script: [
        {
          src:
            "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML"
        }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,500;1,500&display=swap' }
      ],
      meta: [
        { name: 'twitter:card', content: 'Summary_large_image'},
        { name: 'twitter:site', content: '@hataka799288335'},
        { name: 'twitter:title', content: thi.title},
        { name: 'twitter:description', content: ''},
        { name: 'twitter:image', content: this.cover}
      ]
    };
  },
}
</script>
<style scoped>
#page_index{
  width: 100vw;
  margin: auto;
  position: relative;
}
#page{
    width: 70%;
    margin: auto;
    margin-bottom: 25vh;
}
#page .margin{
  padding-top: 80px;
}
.head_img{
    width: 100%;
    height: 40vh;
    object-fit: cover;
}
.propaty{
    width: 100%;
    justify-content: center;
}
.propaty p{
    margin-right: 5px;
    margin-left: 5px;
}
.tags{
  width: fit-content;
  margin: auto;
  display: flex;
}
.tag{
  margin: auto;
  width: fit-content;
  border: 1px solid  #42b983;
  background-color: transparent;
  color: #42b983;
  padding: 5px;
  border-radius: 5px;
  transition: 0.25s;
  text-decoration: none;
}
.tag:hover{
  margin: auto;
  width: fit-content;
  background-color: #42b983;
  color: white;
  padding: 5px;
  border-radius: 5px;
  text-decoration: none;
}
.content{
    width: 50vw;
    margin: auto;
}
.content h2{
    text-align: left;
}
.content .bold{
  font-weight: bold;
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
.content code{
  text-align:left;
  display: inline-block;
  width: 70%;
  font-family: 'Source Code Pro', monospace;
  padding: 10px;
  border: #C4C4C5 1px solid;
  border-radius: 5px;
  overflow-x: scroll;
}
.content code span{
  text-align:left;
  display: inline-block;
  font-family: 'Source Code Pro', monospace;
}
.content blockquote{
  padding-left: 10px;
  padding-top: 1px;
  padding-bottom: 1px;
  border-left: gray 2px solid;
}
.content blockquote p{
  margin: 0;
}
.content img{
  width: 70%;
}
.dark h1{
  color: white;
}
.dark h2{
  color: white;
}
.dark h3{
  color: white;
}
.dark li{
  color: white;
}
.dark p{
  color: white;
}
@media screen and (max-width: 800px) {
	.content{
    width: 70vw;
    margin: auto;
  }
  .content img{
    width: 90%;
  }
}
@media screen and (max-width: 400px) {
	.content{
    width: 90vw;
    margin: auto;
  }
  #page{
    width: 90%;
    margin: auto;
    margin-bottom: 25vh;
  } 
  .content img{
    width: 90%;
  }
  h1.title{
    font-size: 1.6em;
  }
}
</style>
<style>
.dark .mjx-char{
  color: white;
}
span.hljs-number{
  color: #9B5FD3;
}
span.hljs-keyword{
  color: #FF006B;
}
span.hljs-title {
  color: #5EA405;
}
span.hljs-string{
  color: #FFB05E;
}
.dark span.hljs-string{
  color: #E6E05F;
}
.dark span.hljs-title {
  color: #86D705;
}
.dark .content code{
  color: #ECEDED;
  border: gray 1px solid;
}
</style>
