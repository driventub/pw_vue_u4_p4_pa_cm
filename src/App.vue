<template>
  <Estudiante/>
  <div class="algo"></div>
  <GuardaEstudiante/>
  <div class="algo"></div>
  <ActualizarEstudiante/>
  <div class="algo"></div>
  <EliminarEstudianteVue/>
</template>

<script>
import Estudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import GuardaEstudiante from './modules/estudiante/pages/GuardaEstudiante.vue';
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue';
import EliminarEstudianteVue from './modules/estudiante/pages/EliminarEstudiante.vue';

export default {
  name: 'App',
  components: {
    Estudiante,
    GuardaEstudiante,
    ActualizarEstudiante,
    EliminarEstudianteVue

  }
}
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
.algo{
  margin: 100px;
}
</style>
