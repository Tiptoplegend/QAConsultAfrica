<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Menu, X, Phone, Mail, MapPin, Search, ChevronDown } from 'lucide-vue-next'

const emit = defineEmits(['toggle-mobile-nav'])

const route = useRoute()
const router = useRouter()
const isSticky = ref(false)
const isServicesDropdownOpen = ref(false)

const services = [
  { name: 'Manufacturing', slug: 'manufacturing' },
  { name: 'Hospitality', slug: 'hospitality' },
  { name: 'QMS', slug: 'qms' },
  { name: 'EMS', slug: 'ems' },
  { name: 'OHS', slug: 'ohs' },
  { name: 'FMS', slug: 'fms' },
  { name: 'Regulatory Affairs', slug: 'regulatory-affairs' },
  { name: 'Training', slug: 'training' }
]

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  
  // Handle hash navigation on page load
  if (route.path === '/' && route.hash) {
    setTimeout(() => {
      const element = document.querySelector(route.hash)
      if (element) {
        const headerOffset = 120
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const isActive = (path) => {
  return route.path === path || route.path.startsWith(path + '/')
}

const handleNavClick = (e, path, hash) => {
  // Handle Home link
  if (path === '/' && !hash) {
    if (route.path === '/') {
      // Already on home, scroll to top
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // Otherwise let RouterLink handle navigation
    return
  }
  
  // Special handling for Blog: if on another page, navigate to /blog page
  if (path === '/blog' && route.path !== '/') {
    e.preventDefault()
    router.push('/blog')
    return
  }
  
  // If we're on the home page and there's a hash, scroll to section
  if (route.path === '/' && hash) {
    e.preventDefault()
    setTimeout(() => {
      const element = document.querySelector(hash)
      if (element) {
        const headerOffset = 120
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        // Update URL hash
        window.history.pushState(null, '', hash)
      }
    }, 50)
  } else if (route.path !== '/' && hash) {
    // If we're on another page, navigate to home with hash
    e.preventDefault()
    router.push({ path: '/', hash: hash })
  }
  // Otherwise, let default navigation happen
}
</script>

<template>
  <!-- Top Bar -->
  <div class="bg-gray-800 text-white py-3 hidden lg:block border-b border-white/10">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between">
        <ul class="flex items-center gap-8 text-sm font-medium">
          <li class="flex items-center gap-3">
            <Mail class="w-4 h-4 text-white" />
            <a href="mailto:info@qaconsultafrica.com" class="text-white hover:text-qa-orange transition-colors">
              info@qaconsultafrica.com
            </a>
          </li>
          <li class="flex items-center gap-3 border-l border-white/20 pl-8">
            <MapPin class="w-4 h-4 text-white" />
            <span class="text-white">Hydraform Estates, Aviation Highway</span>
          </li>
        </ul>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-3 border-r border-white/20 pr-6">
            <a href="https://www.linkedin.com/company/qaconsultafrica/" target="_blank" class="w-8 h-8 flex items-center justify-center border border-white/30 text-white hover:border-qa-orange hover:text-qa-orange transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="https://x.com/qaconsultafrica" target="_blank" class="w-8 h-8 flex items-center justify-center border border-white/30 text-white hover:border-qa-orange hover:text-qa-orange transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://web.facebook.com/qaconsultafrica" target="_blank" class="w-8 h-8 flex items-center justify-center border border-white/30 text-white hover:border-qa-orange hover:text-qa-orange transition-all">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
          </div>
          <button class="text-white hover:text-qa-orange transition-colors">
            <Search class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Header -->
  <header 
    class="bg-white transition-all duration-300 z-50"
    :class="{ 'fixed top-0 left-0 right-0 shadow-lg animate-slide-up': isSticky, 'relative': !isSticky }"
  >
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between py-5">
        <!-- Logo -->
        <RouterLink to="/" class="flex-shrink-0">
          <img 
            src="/images/Logo/QA Africa.png" 
            alt="QA Consult Africa" 
            class="h-12 w-auto"
          />
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-10">
          <RouterLink 
            to="/"
            @click="route.path === '/' && window.scrollTo({ top: 0, behavior: 'smooth' })"
            class="text-[15px] font-bold text-qa-blue hover:text-qa-orange transition-all uppercase tracking-wider"
            :class="{ 'text-qa-orange': route.path === '/' && !route.hash }"
          >
            Home
          </RouterLink>
          <a 
            href="#about"
            @click="handleNavClick($event, '/about', '#about')"
            class="text-[15px] font-bold text-qa-blue hover:text-qa-orange transition-all uppercase tracking-wider cursor-pointer"
            :class="{ 'text-qa-orange': route.path === '/' && route.hash === '#about' || route.path === '/about' }"
          >
            About
          </a>
          
          <!-- Services Dropdown -->
          <div 
            class="relative group"
            @mouseenter="isServicesDropdownOpen = true"
            @mouseleave="isServicesDropdownOpen = false"
          >
            <a 
              href="#services"
              @click="handleNavClick($event, '/services', '#services')"
              class="text-[15px] font-bold text-qa-blue hover:text-qa-orange transition-all uppercase tracking-wider flex items-center gap-1 cursor-pointer"
              :class="{ 'text-qa-orange': route.path === '/' && route.hash === '#services' || isActive('/services') }"
            >
              Services
              <ChevronDown class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isServicesDropdownOpen }" />
            </a>
            <Transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 translate-y-2"
            >
              <div 
                v-show="isServicesDropdownOpen"
                class="absolute top-full left-0 mt-0 w-64 bg-white shadow-2xl border-t-2 border-qa-orange py-3 z-50"
              >
                <RouterLink 
                  v-for="service in services" 
                  :key="service.slug"
                  :to="`/services/${service.slug}`"
                  class="block px-6 py-3 text-[14px] font-bold text-qa-blue hover:text-qa-orange transition-colors uppercase tracking-tight"
                >
                  {{ service.name }}
                </RouterLink>
              </div>
            </Transition>
          </div>

          <a 
            href="#team"
            @click="handleNavClick($event, '/team', '#team')"
            class="text-[15px] font-bold text-qa-blue hover:text-qa-orange transition-all uppercase tracking-wider cursor-pointer"
            :class="{ 'text-qa-orange': route.path === '/' && route.hash === '#team' || isActive('/team') }"
          >
            The Team
          </a>
          <a 
            href="#blog"
            @click="handleNavClick($event, '/blog', '#blog')"
            class="text-[15px] font-bold text-qa-blue hover:text-qa-orange transition-all uppercase tracking-wider cursor-pointer"
            :class="{ 'text-qa-orange': route.path === '/' && route.hash === '#blog' || (route.path !== '/' && isActive('/blog')) }"
          >
            Blog
          </a>
          <a 
            href="#contact"
            @click="handleNavClick($event, '/contact', '#contact')"
            class="text-[15px] font-bold text-qa-blue hover:text-qa-orange transition-all uppercase tracking-wider cursor-pointer"
            :class="{ 'text-qa-orange': route.path === '/' && route.hash === '#contact' || route.path === '/contact' }"
          >
            Contact
          </a>
        </nav>

        <!-- Right Side -->
        <div class="flex items-center gap-8">
          <!-- CTA Button -->
          <RouterLink to="/contact" class="hidden xl:inline-flex thm-btn group">
            <span class="thm-btn-text">Get A Quote</span>
            <div class="thm-btn-icon-box">
              <svg class="w-4 h-4 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </RouterLink>

          <!-- Sidebar Toggle -->
          <button class="hidden lg:flex flex-col gap-1 hover:text-qa-orange transition-colors">
            <span class="w-6 h-0.5 bg-current"></span>
            <span class="w-6 h-0.5 bg-current"></span>
            <span class="w-6 h-0.5 bg-current"></span>
          </button>

          <!-- Mobile Menu Button -->
          <button 
            @click="emit('toggle-mobile-nav')"
            class="lg:hidden w-10 h-10 flex items-center justify-center text-qa-blue"
            aria-label="Toggle menu"
          >
            <Menu class="w-7 h-7" />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
