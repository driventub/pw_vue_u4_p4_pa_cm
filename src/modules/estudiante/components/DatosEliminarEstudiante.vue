<template>
    <label for="">Cedula</label>
        <input v-model="cedula" type="text" />
        <button @click="consultaEstudiantes">Verificar</button>
        <button @click="eliminarEstudiante" v-if="verif">Eliminar</button>

</template>

<script>
import { eliminarEstudianteFachada } from '../helpers/EstudianteCliente';
import {obtenerEstudianteFachada} from '../helpers/EstudianteCliente'
    export default {
        data(){
            return{
                verif:false,
                cedula:null,
                nombre:null,
                apellido:null,
            };
        },
        methods:{
            async eliminarEstudiante(){
                await eliminarEstudianteFachada(this.cedula)
            },
            async consultaEstudiantes() {
                const data = await obtenerEstudianteFachada(this.cedula);
            this.nombre = data.nombre;
            this.apellido = data.apellido;
    },
        }

    }
</script>

<style lang="scss" scoped>

</style>