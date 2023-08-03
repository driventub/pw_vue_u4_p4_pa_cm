<template>
  <input v-model="cedula" type="text" />
  <button @click="consultaEstudiantes">Consultar</button>
  <label for="">Nombre</label>
  <input v-model="nombre" type="text" disabled/>
  <label for="">Apellido</label>
  <input v-model="apellido" type="text" disabled/>
  <label for="">Provincia</label>
  <input v-model="provincia" type="text" disabled/>
  <label for="">Fecha de Nacimiento</label>
  <input v-model="fecha" type="text" disabled/>
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
      fecha: null,
      provincia: null,
    };
  },
  methods: {
    async consultaEstudiantes() {
      const data = await obtenerEstudianteFachada(this.cedula);
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.fecha = data.fechaNacimiento;
      this.provincia = data.provincia
    },
  },
};
</script>

<style scoped></style>
