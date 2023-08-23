<template>
    <div >
        <label for="">Cedula</label>
        <input class="form-control" v-model="cedula" type="text" />
        
        <label for="">Nombre</label>
        <input class="form-control" v-model="nombre" type="text" />
        <label  for="">Apellido</label>
        <input class="form-control" v-model="apellido" type="text" />

        <div>
            <button class="btn btn-primary" @click="guardarEstudiante">Guardar</button>
        </div>
    </div>
</template>

<script>
import { ingresarEstudianteFachada } from '../helpers/EstudianteCliente'

    export default {
        data(){
            return{
                cedula:null,
                nombre:null,
                apellido:null,
            };
        },
        methods:{
            async guardarEstudiante(){
                const data={
                    cedula:this.cedula,
                    nombre: this.nombre,
                    apellido:this.apellido,
                    provincia:'Pichincha',
                }
                ingresarEstudianteFachada(data);
                console.log("Estudiante insertado" + data);
            }
            
        }
    }
</script>

<style scoped>

    input{
        margin-left: 5px;
        margin-right: 5px;
    }

   

</style>