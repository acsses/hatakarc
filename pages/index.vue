<template>
  <div id="index">
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
export default {
  layout: 'default',
  data(){
    return{
      results:[]
    }
  },
  async mounted(){
    var res = await this.$axios.get(`${location.origin}/api/database`);
    this.results=res.data.results
  },
  methods:{
    link(id){
      this.$router.push('/page/'+id)
    }
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
  height: 37vh;
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
  height: 37vh;
  position: relative;
  box-shadow: 0 0 0.5px gray;
  border-radius: 5px;
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
