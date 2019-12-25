/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Main from "../views/Main.vue";
import Login from "../views/Login.vue";
import CategorieEdit from "../views/categorieEdit.vue";
import CategorieList from "../views/categorieList.vue";

import ItemEdit from "../views/ItemEdit.vue";
import ItemList from "../views/ItemList.vue";

import HeroEdit from "../views/HeroEdit.vue";
import HeroList from "../views/HeroList.vue";

import ArticleEdit from "../views/ArticleEdit.vue";
import ArticleList from "../views/ArticleList.vue";

import AdEdit from "../views/AdEdit.vue";
import AdList from "../views/AdList.vue";

import AdminUserEdit from "../views/AdminUserEdit.vue";
import AdminUserList from "../views/AdminUserList.vue";
Vue.use(VueRouter);

const routes = [{
  path: "/",
  name: "main",
  component: Main,
  children: [{
      path: "/categories/create",
      name: "categorieEdit",
      component: CategorieEdit
    },
    {
      path: "/categories/list",
      name: "categorieList",
      component: CategorieList
    },
    {
      path: "/categories/edit/:id",
      component: CategorieEdit,
      props: true
    },
    {
      path: "/items/create",
      name: "itemEdit",
      component: ItemEdit
    },
    {
      path: "/items/list",
      name: "itemList",
      component: ItemList
    },
    {
      path: "/items/edit/:id",
      component: ItemEdit,
      props: true
    },
    {
      path: "/heroes/create",
      name: "heroEdit",
      component: HeroEdit
    },
    {
      path: "/heroes/list",
      name: "heroList",
      component: HeroList
    },
    {
      path: "/heroes/edit/:id",
      component: HeroEdit,
      props: true
    },
    {
      path: "/articles/create",
      name: "ArticleEdit",
      component: ArticleEdit
    },
    {
      path: "/articles/list",
      name: "ArticleList",
      component: ArticleList
    },
    {
      path: "/articles/edit/:id",
      component: ArticleEdit,
      props: true
    },
    {
      path: "/ads/create",
      name: "AdEdit",
      component: AdEdit
    },
    {
      path: "/ads/list",
      name: "AdList",
      component: AdList
    },
    {
      path: "/ads/edit/:id",
      component: AdEdit,
      props: true
    },
    {
      path: "/admin_users/create",
      name: "AdminUserEdit",
      component: AdminUserEdit
    },
    {
      path: "/admin_users/list",
      name: "AdminUserList",
      component: AdminUserList
    },
    {
      path: "/admin_users/edit/:id",
      component: AdminUserEdit,
      props: true
    }
  ]
}, {
  path: "/login",
  name: 'login',
  component: Login,
  meta: {
    isPublic: true
  }
}];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next('/login')
  }
  next();
})

export default router;
