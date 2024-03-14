// router/index.ts

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'
import Help from '../pages/help'
import Inventory from '../pages/inventory'
import POS_System from '../pages/pos_system'
import User_Account from '../pages/user_account'
import Category from '../pages/category'
import Products from '../pages/products'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard' 
      // Redirect index route to /dashboard instead of just showing blank index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/inventory',
      name: 'Inventory',
      component: Inventory
    },
    {
      path: '/pos_system',
      name: 'POS_System',
      component: POS_System
    },
    {
      path: '/user_account',
      name: 'User_Account',
      component: User_Account
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
  ]
})

export default router
