<template>
  <div class="buscar">
    <input v-model="cedula" type="text" />
    <button class="btn btn-warning" @click="consultaEstudiantes" >Consultar</button>
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
      cedula: this.$route.params.cedula,
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
  mounted() {
    console.log(this.$route);

    const { cedula } = this.$route.params;
    this.cedula = cedula;
    this.consultaEstudiantes();

    // esto es de request params
    const prov = this.$route.query.provincia;
    const {provincia} = this.$route.query;
    console.log("El otro: " + provincia);
    console.log(prov);

    // http://localhost:8080/..../estudiantes/{}
    // http://localhost:8080/..../estudiantes/3336?provincia=pichincha
    // http://localhost:8080/..../estudiantes/?provincia=pichincha&ciudad=quito
  },
};
</script>

<style scoped>
.buscar {
  margin: 10px;
}

input {
  margin-left: 5px;
  margin-right: 5px;
}

button {
  font-size: large;
}
</style>
