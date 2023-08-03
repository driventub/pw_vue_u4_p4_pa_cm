import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/ingresar",
    component: () => import("../modules/estudiante/pages/GuardaEstudiante.vue"),
  },
  {
    path: "/consultar",
    component: () => import("../modules/estudiante/pages/ConsultaEstudiante.vue"),
  },
  {
    path: "/actualizar",
    component: () => import("../modules/estudiante/pages/ActualizarEstudiante.vue"),
  },
  {
    path: "/eliminar",
    component: () => import("../modules/estudiante/pages/EliminarEstudiante.vue"),
  },
  
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../modules/estudiante/pages/NoEncontradoPage"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
