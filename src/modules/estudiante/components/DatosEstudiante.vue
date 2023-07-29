<template>
    <input v-model="cedula" type="text">
    <button @click="consultaEstudiantes">Consultar</button>
</template>

<script>
import {obtenerEstudianteFachada} from '../helpers/EstudianteCliente.js';


export default {
    data(){
         return {
        cedula:null,
    };
    },
    methods:{
        async consultaEstudiantes(){
            await obtenerEstudianteFachada(this.cedula);
        },

    },
}
</script>

<style scoped></style>
