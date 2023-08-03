<template>

  <div class="buscar">
    <input v-model="cedula" type="text" />
  <button @click="consultaEstudiantes">Consultar</button>
  </div>
  <div class="resto">
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
  </div>
  
</template>

<script>

/*343454*/
import { obtenerEstudianteFachada } from "../helpers/EstudianteCliente.js";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async consultaEstudiantes() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
    },
  },
};
</script>

<style scoped>
  .buscar{
    margin: 10px;
  }

  input{
    margin-left: 5px;
    margin-right: 5px;
  }

  button{
    font-size: large;
  }
</style>
