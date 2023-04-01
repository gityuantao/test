import { createRouter, createWebHashHistory } from "vue-router"

const department = () => import("~/views/department.vue")
const totality = () => import("~/views/totality.vue")

const routes = [
  { path: "/", redirect: "/department" },
  {
    path: "/department",
    name: "部门态势123",
    component: department
  },
  {
    path: "/totality",
    name: "总体态势123",
    component: totality
  }
]
export default createRouter({
    history: createWebHashHistory(),
    routes: routes
  })