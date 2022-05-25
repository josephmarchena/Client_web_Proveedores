import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginView from '../views/LoginView.vue'
import MainView from '../views/MainView.vue'
import DatosView from '../views/DatosUsuarioView.vue'
import ListadoComprobantes from '../views/ListadoComprobantes.vue'
import ListadoPrepagoComponent from '../views/PrepagoView.vue'
import EstablecimientosView from '../views/EstablecimientosView.vue'
import ContactosView from '../views/ContactosView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MainView
  },
  {
    path: '/datos',
    name: 'datos',
    component: DatosView
  },
  {
    path: '/comprobantes',
    name: 'listadoComprobantes',
    component: ListadoComprobantes
  },
  {
    path: '/prepago',
    name: 'listadoPrepago',
    component: ListadoPrepagoComponent
  },
  {
    path: '/establecimientos',
    name: 'Establecimientos',
    component: EstablecimientosView
  },
  {
    path: '/contactos',
    name: 'Contactos',
    component: ContactosView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
