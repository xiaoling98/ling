import Vue from 'vue'
import VueRouter from 'vue-router'
const Login = () => import('../views/login.vue')
const Home = () => import('../views/home.vue')
const About = () => import('../components/about.vue')
const Skill = () => import('../components/skill.vue')
const Evaluate = () => import('../components/evaluate.vue')
const Message = () => import('../components/message.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/about',
      children: [
        { path: '/about', component: About },
        { path: '/skill', component: Skill },
        { path: '/evaluate', component: Evaluate },
        { path: '/message', component: Message }
      ]
    }
  ]
})

export default router
