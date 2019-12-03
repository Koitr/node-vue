import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategorieEdit from '../views/categorieEdit.vue'
import CategorieList from '../views/categorieList.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  name: 'main',
  component: Main,
  children: [{
    path: '/categories/create',
    name: 'categorieEdit',
    component: CategorieEdit
  }, {
    path: '/categories/list',
    name: 'categorieList',
    component: CategorieList
  }, {
    path: '/categories/edit/:id',
    component: CategorieEdit,
    props: true
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
