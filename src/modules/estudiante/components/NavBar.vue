<template>
  <div>
    <ul>
      <!-- <li><router-link to="/">Inicio</router-link></li> -->
      <li><router-link to="/ingresar">Ingresar</router-link></li>
      <li><router-link to="/consultar">Consultar</router-link></li>
      <li><router-link to="/actualizar">Actualizar</router-link></li>
      <li><router-link to="/eliminar">Eliminar</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
}

li {
  float: left;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

li a {
  display: block;

  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
</style>
