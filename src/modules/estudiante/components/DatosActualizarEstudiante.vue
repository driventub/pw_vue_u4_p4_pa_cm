<template>
    <label for="">Id</label>
    <input v-model="id" type="text" />    
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
        
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />

    <div>
    <button @click="actualizarEstudiante">Actualizar</button>
    </div>
</template>

<script>
import { actualizarEstudianteFachada } from '../helpers/EstudianteCliente';
    export default {
        data(){
            return{
                id:null,
                cedula:null,
                nombre:null,
                apellido:null,
                
            };
        },
        methods:{
           async actualizarEstudiante(){
                const data={
                    id:this.id,
                    cedula: this.cedula,
                    nombre: this.nombre,
                    apellido:this.apellido,
                    provincia:'Pichincha',
                }
                await actualizarEstudianteFachada(data,this.id)
            }
        }

    }
</script>

<style scoped>

input{
    margin-left: 5px;
    margin-right: 5px;
}

button{
    margin-top: 10px;
    font-size: large;
}

</style>