import { createRouter, createWebHashHistory } from "vue-router";


const routes = [
  {
    path: "/:cedula",
    component: () => import("../pages/ConsultaEstudiante.vue"),
  },
  {
    path: "/insertar",
    component: () => import("../pages/GuardaEstudiante.vue"),
  },
  {
    path: "/actualizar",
    component: () => import("../pages/ActualizarEstudiante.vue"),
  },
  {
    path: "/eliminar",
    component: () => import("../pages/EliminarEstudiante.vue"),
  },
  
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/ConsultaEstudiante.vue"),
  },

];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;