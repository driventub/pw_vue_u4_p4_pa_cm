<template>
    <label for="">Cedula</label>
        <input v-model="cedula" type="text" />
        <button @click="consultaEstudiantes">Verificar</button>

        <h3>{{ nombre }} {{ apellido }}</h3>
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
                this.verif=false
                await eliminarEstudianteFachada(this.cedula)
            },
            async consultaEstudiantes() {
                const data = await obtenerEstudianteFachada(this.cedula);
                this.nombre = data.nombre;
                this.apellido = data.apellido;
                this.verif=true;
            },
        }

    }
</script>

<style scoped>
    input{
        margin-left: 5px;
        margin-left: 5px;
    }
</style>