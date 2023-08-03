<template>
  <div>
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />

    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <label for="">Provincia</label>
    <input v-model="provincia" type="text" />
    <label for="">Fecha de Nacimiento</label>
    <input v-model="fecha" type="text" />
    <button @click="guardarEstudiante">Guardar</button>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
    };
  },
  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: "Pichincha",
      };
      await ingresarEstudianteFachada(data);
    },
  },
};
</script>

<style scoped></style>
