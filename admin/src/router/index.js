import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import CategorieEdit from '../views/categorieEdit.vue'
import CategorieList from '../views/categorieList.vue'

import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'

import HeroEdit from '../views/HeroEdit.vue'
import HeroList from '../views/HeroList.vue'
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
  }, {
    path: '/items/create',
    name: 'itemEdit',
    component: ItemEdit
  }, {
    path: '/items/list',
    name: 'itemList',
    component: ItemList
  }, {
    path: '/items/edit/:id',
    component: ItemEdit,
    props: true
  }, {
    path: '/heroes/create',
    name: 'heroEdit',
    component: HeroEdit
  }, {
    path: '/heroes/list',
    name: 'heroList',
    component: HeroList
  }, {
    path: '/heroes/edit/:id',
    component: HeroEdit,
    props: true
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
