<template>
  <div id="index">
    <LoadingAnimation v-show="loading"/>
    <div id="introduce">
      <h1>hatakarc</h1>
      <p> &lt hataka run command /&gt </p>
      <p> &lt What I did or think /&gt </p>
    </div>
    <div class="home">
    <div v-for="page in results" :key="page.id" class="page_block" @click="link(page.id)">
      <img v-bind:src="page.cover.external.url" alt="">
      <h3>
        {{ page.properties.Name.title[0].plain_text }}
      </h3>
      <p>
        {{ page.properties.Date.date.start }}
      </p>
      <div class="tag_space">
        <p v-for="tag in page.properties.Tag.multi_select" :key="tag.id" class="tag" >
          {{ tag.name }}
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import LoadingAnimation from '../components/LoadingAnimation.vue';
export default {
  layout: 'default',
  data(){
    return{
      loading:true,
      results:[]
    }
  },
  async mounted(){
    var res = await this.$axios.get("https://notion-acsses.vercel.app/database/");
    this.results=res.data.results
    this.loading=false
  },
  head(){
    return {
      title:"hatkarc",
    }
  },
  methods:{
    link(id){
      this.$router.push('/page/'+id)
    }
  },
  components:{
    LoadingAnimation
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

#index{
  width: 100vw;
  min-height: 100vh;
  margin: auto;
}

#introduce{
  width: 70vw;
  padding-top: 60px;
  margin-bottom: 10px;
}
#introduce p{
  font-family: 'Source Code Pro', monospace;

}
.dark #introduce {
  width: 70vw;
  color: white;
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
  height: calc(14vh + 27px + 20px + 20px + 90px );
  position: relative;
  box-shadow: 0 0 8px gray;
  border-radius: 5px;
  transition: 0.25s;
}
#introduce{
  margin: auto;
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
  border: 1px solid  #42b983;
  background-color: transparent;
  color: #42b983;
  padding: 5px;
  border-radius: 5px;
  transition: 0.25s;
}
.tag:hover{
  margin: auto;
  width: fit-content;
  background-color: #42b983;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
.page_block:hover{
  width: 90%;
  margin: auto;
  height: calc(14vh + 27px + 20px + 20px + 90px );
  position: relative;
  box-shadow: 0 0 0.5px gray;
  border-radius: 5px;
}
@media screen and (max-width: 800px) {
	.home{
    width: 50vw;
    margin:auto;
    display: block;
  }
}
@media screen and (max-width: 400px) {
	.home{
    width: 100vw;
    margin:auto;
    display: block;
  }
  #introduce{
    width: 100vw;
    padding-top: 60px;
    margin-bottom: 10px;
  }
}
</style>
<style>
body{
  margin: 0;
}
.dark .page_block h3{
  color: white;
}

.dark .page_block p:not(.tag){
  color: white;
}
</style>
