<template>
  <img src="./modules/estudiante/img/crud.jpeg" alt="">
  <div class="navBar">
    <NavBar/>
  </div>
  <div class="contenido">
    <router-view/>
  </div>
  
</template>

<script>
import NavBar from './modules/estudiante/components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
}
}
</script>

<style>

img{
 
  height: 100px;
  margin-bottom: 30px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.navBar{
  margin-bottom: 10px;
}

.contenido{
  border-style: groove;
  padding: 30px;
  border-color: cadetblue;
}

</style>
