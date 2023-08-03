<template>
    <div class="container">    
        <div class="menu">
            <router-link to="/">Consultar</router-link>
            <router-link to="/insertar">Insertar</router-link>
            <router-link to="/actualizar">Actualizar</router-link>
            <router-link to="/eliminar">Eliminar</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

.container{
    text-align: left;
}
.menu{
text-align: center;
}

a{
    border: solid;
    border-style: groove;
    border-color:black ;
    margin: 0;
    font-weight: bold;
    font-size: large;
    color:black;  
    padding-left: 10px;
    padding-right: 10px;
}

a:hover{
    background-color: green;
}


</style>