<template>
    <div id="page_index">
        <div class="home">
            <div v-for="page in pages" :key="page.id" class="page_block" @click="link(page.id)">
              <img v-bind:src="page.cover.external.url" alt="">
              <div>
                {{ page.properties.Name.title[0].plain_text }}
              </div>
              <p>
                {{ page.properties.Date.date.start }}
              </p>
              <div class="tag_space">
                <p v-for="tag in page.properties.Tag.multi_select" :key="tag.id" class="tag">
                  {{ tag.name }}
                </p>
              </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name:"page",
    data(){
      return {
        pages:[]
      }
    },
    async mounted(){
      var res = await this.$axios.get(`${location.origin}/api/serch/${this.$route.params.word}`);
      this.pages = res.data.results
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
  .home{
  width: 50vw;
  margin:auto;
  display: grid;
  grid-template-columns: 50% 50%;
  
}
.page_block{
  width: 90%;
  margin: auto;
  height: 35vh;
  position: relative;
  box-shadow: 0 0 8px gray;
  border-radius: 5px;
}
.page_block img{
  height: 14vh;
  width: 100%;
  object-fit: cover;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
}
.page_block a{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.tag_space{
  margin-right:10px;
  margin-left: 10px;
}
.tag{
  margin: auto;
  width: fit-content;
  background-color: blue;
  color: white;
  padding: 5px;
  border-radius: 5px;
  transition: 0.25s;
}
.tag:hover{
  margin: auto;
  width: fit-content;
  border: 1px solid  blue;
  background-color: white;
  color: blue;
  padding: 5px;
  border-radius: 5px;
}
</style>
  