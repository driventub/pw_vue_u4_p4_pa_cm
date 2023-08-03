<template>
  <label for="">Cedula</label>
  <input v-model="cedula" type="text" />

  <button @click="eliminarEstudiante">Eliminar</button>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente";

export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async eliminarEstudiante() {
      await eliminarEstudianteFachada(this.cedula);
    },
  },
};
</script>

<style lang="scss" scoped></style>
