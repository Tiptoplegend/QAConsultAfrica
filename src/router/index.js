import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue')
  },
  {
    path: '/services/:slug',
    name: 'service-detail',
    component: () => import('@/views/ServiceDetailView.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: () => import('@/views/TeamView.vue')
  },
  {
    path: '/team/:slug',
    name: 'team-profile',
    component: () => import('@/views/TeamProfileView.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('@/views/BlogView.vue')
  },
  {
    path: '/blog/:slug',
    name: 'article-detail',
    component: () => import('@/views/ArticleDetailView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/ContactView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const element = document.querySelector(to.hash)
          if (element) {
            const headerOffset = 120
            const elementPosition = element.getBoundingClientRect().top
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            })
            resolve({ el: to.hash, behavior: 'smooth', top: offsetPosition })
          } else {
            resolve({ top: 0, behavior: 'smooth' })
          }
        }, 100)
      })
    } else {
      // Return immediately for non-hash routes
      return { top: 0 }
    }
  }
})

export default router
