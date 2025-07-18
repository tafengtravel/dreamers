import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f2632a1 = () => interopDefault(import('..\\pages\\record\\batter\\index.vue' /* webpackChunkName: "pages/record/batter/index" */))
const _65e83e1a = () => interopDefault(import('..\\pages\\record\\pitcher\\index.vue' /* webpackChunkName: "pages/record/pitcher/index" */))
const _60563604 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/record/batter",
    component: _6f2632a1,
    name: "record-batter"
  }, {
    path: "/record/pitcher",
    component: _65e83e1a,
    name: "record-pitcher"
  }, {
    path: "/",
    component: _60563604,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
