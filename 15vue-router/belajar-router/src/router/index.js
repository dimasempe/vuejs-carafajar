import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue"
import AboutView from "../views/AboutView.vue"
import UserView from "../views/UserView.vue"
import UserDetailView from "../views/UserDetailView.vue"
import UserProfile from "../views/UserProfile.vue"
import UserPosts from "../views/UserPosts.vue"
import UserIndex from "../views/UserIndex.vue"


const routes = [
  {path: '', component: HomeView},
  {path:'/about', component: AboutView},
  {path: '/user', component: UserView},
  // {path: '/user/:params', component: UserDetailView}, //ini namanya route dynamic
  // {path: '/user/:params/posts', component: UserPosts}, 
  // {path: '/user/:params/profile', component: UserProfile} //ini tanpa nested 
  {
    path: '/user/:params', //ini pakai nested route
    component: UserIndex,
    children: [
      {path:'', component: UserDetailView},
      {path:'/user/:params/posts', component: UserPosts},
      {path:'/user/:params/profile', component: UserProfile}
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router