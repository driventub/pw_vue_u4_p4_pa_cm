<template>
  <NavBar/>
  <router-view />
</template>

<script>
import NavBar from "./modules/estudiante/components/NavBar.vue";

// import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
// import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue';
// import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
// import EliminarEstudianteVue from './modules/estudiante/pages/EliminarEstudiante.vue';

export default {
  name: "App",
  components: {
    // Estudiante,
    // GuardaEstudiante,
    // ActualizarEstudiante,
    // EliminarEstudianteVue
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.algo {
  width: 80%;
}
</style>
