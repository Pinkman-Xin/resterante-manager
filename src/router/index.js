import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'
import ItemEdit from '../views/ItemEdit.vue'
import ItemList from '../views/ItemList.vue'
import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'
import NormalUserEdit from '../views/NormalUserEdit.vue'
import NormalUserList from '../views/NormalUserList.vue'
import OrderEdit from '../views/OrderEdit.vue'
import OrderList from '../views/OrderList.vue'
Vue.use(VueRouter)

const routes = [
  {path:'/login' ,name:'login',component:Login,meta:{isPublic:true}},
  {path:'/register' ,name:'register',component:Register,meta:{isPublic:true}},
  {
    path: '/',
    name: 'Main',
    component: Main,
    children:[
      {path:'/categories/create',component:CategoryEdit},
      {path:'/categories/edit/:id',component:CategoryEdit,props:true},
      {path:'/categories/list',component:CategoryList},
      {path:'/items/create',component:ItemEdit},
      {path:'/items/edit/:id',component:ItemEdit,props:true},
      {path:'/items/list',component:ItemList}, 
      {path:'/admin_users/create',component:AdminUserEdit},
      {path:'/admin_users/edit/:id',component:AdminUserEdit,props:true},
      {path:'/admin_users/list',component:AdminUserList},
      {path:'/orders/create',component:OrderEdit},
      {path:'/orders/list',component:OrderList},
      {path:'/normal_users/create',component:NormalUserEdit},
      {path:'/normal_users/edit/:id',component:NormalUserEdit,props:true},
      {path:'/normal_users/list',component:NormalUserList},
    ]
  },
  
]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
  if(!to.meta.isPublic && !localStorage.token){
    console.log(123);
    return next('/login')
  }
  next()
})
export default router
