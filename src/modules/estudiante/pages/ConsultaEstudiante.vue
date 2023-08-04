<template>
  <DatosEstudiante></DatosEstudiante>
</template>

<script>
import DatosEstudiante from "../components/DatosConsultarEstudiante.vue";

export default {
  components: {
    DatosEstudiante,
  },
  mounted() {
    const {cedula} = this.$route.params
    console.log(cedula);
  },
};
</script>
<style scoped></style>
