import { createRouter, createWebHashHistory } from "vue-router"

const department = () => import("~/views/department.vue")
const totality = () => import("~/views/totality.vue")

const routes = [
  { path: "/", redirect: "/department" },
  {
    path: "/department",
    name: "department",
    component: department
  },
  {
    path: "/totality",
    name: "totality",
    component: totality
  }
]
export default createRouter({
    history: createWebHashHistory(),
    routes: routes
  })