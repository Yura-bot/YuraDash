import { createRouter, createWebHistory } from 'vue-router'

const defaultchildRoutes = (prop, mode = false) => [
  {
    path: '',
    name: prop + '.dashboard',
    meta: { auth: true, name: 'dashboard' },
    component: () => import('../pages/Dashboard')
  },
  // User Pages
  {
    path: 'UserProfile',
    name: prop + '.UserProfile',
    meta: { auth: true, name: 'User Profile' },
    component: () => import('../views/pages/Users/UserProfile')
  },
  // Widget pages
  {
    path: 'widgetbasic',
    name: prop + '.widgetbasic',
    meta: { auth: true, name: 'Widget Basic' },
    component: () => import('../views/Elements/widget/WidgetBasic')
  },
  {
    path: 'widgetcard',
    name: prop + '.widgetcard',
    meta: { auth: true, name: 'Widget Card' },
    component: () => import('../views/Elements/widget/WidgetCard')
  },
  {
    path: 'widgetchart',
    name: prop + '.widgetchart',
    meta: { auth: true, name: 'Widget Chart' },
    component: () => import('../views/Elements/widget/WidgetChart')
  },
  // Form pages
  {
    path: 'elements',
    name: prop + '.elements',
    meta: { auth: true, name: 'Elements' },
    component: () => import('../views/Elements/Form/Elements')
  },
  {
    path: 'validation',
    name: prop + '.validation',
    meta: { auth: true, name: 'validation' },
    component: () => import('../views/Elements/Form/Validation')
  },
  {
    path: 'wizard',
    name: prop + '.wizard',
    meta: { auth: true, name: 'Wizard' },
    component: () => import('../views/Elements/Form/Wizard')
  },
  // Icons pages
  {
    path: 'dualtone',
    name: prop + '.dualtone',
    meta: { auth: true, name: 'Dual Tone' },
    component: () => import('../views/Elements/Icons/DualTone')
  },
  {
    path: 'outlined',
    name: prop + '.outlined',
    meta: { auth: true, name: 'Outlined' },
    component: () => import('../views/Elements/Icons/Outlined')
  },
  {
    path: 'solid',
    name: prop + '.solid',
    meta: { auth: true, name: 'Solid' },
    component: () => import('../views/Elements/Icons/Solid')
  },
  // Table pages
  {
    path: 'bootstraptable',
    name: prop + '.bootstraptable',
    meta: { auth: true, name: 'Bootstrap Table' },
    component: () => import('../views/Elements/Table/BootstrapTable')
  },
  {
    path: 'datatable',
    name: prop + '.datatable',
    meta: { auth: true, name: 'Datatable' },
    component: () => import('../views/Elements/Table/Datatable')
  },
  // Footer Pages
  {
    path: 'privacypolicy',
    name: prop + '.privacypolicy',
    meta: { auth: true, name: 'privacypolicy' },
    component: () => import('../views/Elements/Extra/PrivacyPolicy')
  },
  {
    path: 'termsofservice',
    name: prop + '.termsofservice',
    meta: { auth: true, name: 'TermsOfService' },
    component: () => import('../views/Elements/Extra/TermsOfService')
  }
]

const guildchildRoutes = (prop, mode = false) => [
  {
    path: ':id',
    name: prop + '.guild',
    meta: { auth: true, name: 'Guild' },
    component: () => import('../views/guild/Base')
  },
  {
    path: 'bvn/:id',
    name: prop + '.bvn',
    meta: { auth: true, name: 'Bvn' },
    component: () => import('../views/guild/Bvn')
  },
  {
    path: 'goodbye/:id',
    name: prop + '.goodbye',
    meta: { auth: true, name: 'Goodbye' },
    component: () => import('../views/guild/Goodbye')
  },
  {
    path: 'autorole/:id',
    name: prop + '.autorole',
    meta: { auth: true, name: 'Autorole' },
    component: () => import('../views/guild/AutoRole')
  },
  {
    path: 'auto-mod/:id',
    name: prop + '.auto-mod',
    meta: { auth: true, name: 'AutoMod' },
    component: () => import('../views/guild/AutoMod')
  },
  {
    path: 'ticket/:id',
    name: prop + '.ticket',
    meta: { auth: true, name: 'Ticket' },
    component: () => import('../views/guild/Ticket')
  },
  {
    path: 'react-roles/:id',
    name: prop + '.react-roles',
    meta: { auth: true, name: 'ReactionRoles' },
    component: () => import('../views/guild/ReactRoles')
  }
]

const routes = [
  { path: '/discord', beforeEnter () { window.location.href = 'https://discord.gg/etQ3uJN' } },
  { path: '/webiste', beforeEnter () { window.location.href = 'https://yurabot.xyz/' } },
  { path: '/status', beforeEnter () { window.location.href = 'https://status.yurabot.xyz' } },
  { path: '/docs', beforeEnter () { window.location.href = 'https://docs.yurabot.xyz' } },
  { path: '/404', component: () => import('../views/pages/Utilities/Error404') },
  { path: '/:catchAll(.*)', redirect: '/404' },
  {
    path: '/',
    name: 'default',
    component: () => import('../layout/Default'),
    children: defaultchildRoutes('default')
  },
  {
    path: '/guild',
    name: 'guild',
    component: () => import('../layout/Guild'),
    children: guildchildRoutes('guild')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  base: process.env.BASE_URL,
  routes

})

export default router
