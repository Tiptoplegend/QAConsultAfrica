<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { X, ChevronDown, Phone, Mail, MapPin } from 'lucide-vue-next'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const isServicesOpen = ref(false)

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

const closeNav = () => {
  emit('close')
}
</script>

<template>
  <!-- Overlay -->
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-show="isOpen"
      class="fixed inset-0 bg-black/50 z-50 lg:hidden"
      @click="closeNav"
    ></div>
  </Transition>

  <!-- Mobile Nav Panel -->
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-x-full"
    enter-to-class="translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-x-0"
    leave-to-class="translate-x-full"
  >
    <div 
      v-show="isOpen"
      class="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 overflow-y-auto lg:hidden"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <RouterLink to="/" @click="closeNav">
          <img 
            src="/images/Logo/QA Africa.png" 
            alt="QA Consult Africa" 
            class="h-12 w-auto"
          />
        </RouterLink>
        <button 
          @click="closeNav"
          class="w-10 h-10 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <!-- Navigation -->
      <nav class="p-4">
        <ul class="space-y-1">
          <li>
            <RouterLink 
              to="/" 
              @click="closeNav"
              class="block py-3 px-4 text-qa-blue font-medium hover:bg-qa-orange/10 hover:text-qa-orange rounded-lg transition-colors"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/about" 
              @click="closeNav"
              class="block py-3 px-4 text-qa-blue font-medium hover:bg-qa-orange/10 hover:text-qa-orange rounded-lg transition-colors"
            >
              About
            </RouterLink>
          </li>
          <li>
            <button 
              @click="isServicesOpen = !isServicesOpen"
              class="w-full flex items-center justify-between py-3 px-4 text-qa-blue font-medium hover:bg-qa-orange/10 hover:text-qa-orange rounded-lg transition-colors"
            >
              <span>Services</span>
              <ChevronDown class="w-5 h-5 transition-transform" :class="{ 'rotate-180': isServicesOpen }" />
            </button>
            <Transition
              enter-active-class="transition duration-200"
              enter-from-class="opacity-0 -translate-y-2"
              enter-to-class="opacity-100 translate-y-0"
              leave-active-class="transition duration-150"
              leave-from-class="opacity-100 translate-y-0"
              leave-to-class="opacity-0 -translate-y-2"
            >
              <ul v-show="isServicesOpen" class="pl-4 space-y-1 mt-1">
                <li>
                  <RouterLink 
                    to="/services" 
                    @click="closeNav"
                    class="block py-2 px-4 text-qa-gray hover:text-qa-orange transition-colors"
                  >
                    All Services
                  </RouterLink>
                </li>
                <li v-for="service in services" :key="service.slug">
                  <RouterLink 
                    :to="`/services/${service.slug}`" 
                    @click="closeNav"
                    class="block py-2 px-4 text-qa-gray hover:text-qa-orange transition-colors"
                  >
                    {{ service.name }}
                  </RouterLink>
                </li>
              </ul>
            </Transition>
          </li>
          <li>
            <RouterLink 
              to="/team" 
              @click="closeNav"
              class="block py-3 px-4 text-qa-blue font-medium hover:bg-qa-orange/10 hover:text-qa-orange rounded-lg transition-colors"
            >
              The Team
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/blog" 
              @click="closeNav"
              class="block py-3 px-4 text-qa-blue font-medium hover:bg-qa-orange/10 hover:text-qa-orange rounded-lg transition-colors"
            >
              Blog
            </RouterLink>
          </li>
          <li>
            <RouterLink 
              to="/contact" 
              @click="closeNav"
              class="block py-3 px-4 text-qa-blue font-medium hover:bg-qa-orange/10 hover:text-qa-orange rounded-lg transition-colors"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Contact Info -->
      <div class="p-4 border-t">
        <h4 class="font-serif font-bold text-qa-blue mb-4">Contact Info</h4>
        <ul class="space-y-3">
          <li class="flex items-center gap-3 text-qa-gray">
            <MapPin class="w-5 h-5 text-qa-orange flex-shrink-0" />
            <span class="text-sm">Hydraform Estates, Aviation Highway</span>
          </li>
          <li class="flex items-center gap-3">
            <Phone class="w-5 h-5 text-qa-orange flex-shrink-0" />
            <a href="tel:+233244691674" class="text-sm text-qa-gray hover:text-qa-orange transition-colors">
              +233 244691674
            </a>
          </li>
          <li class="flex items-center gap-3">
            <Mail class="w-5 h-5 text-qa-orange flex-shrink-0" />
            <a href="mailto:info@qaconsultafrica.com" class="text-sm text-qa-gray hover:text-qa-orange transition-colors">
              info@qaconsultafrica.com
            </a>
          </li>
        </ul>
      </div>

      <!-- CTA -->
      <div class="p-4">
        <RouterLink 
          to="/contact" 
          @click="closeNav"
          class="btn-primary w-full justify-center"
        >
          <span>Get A Quote</span>
          <svg class="w-4 h-4 icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </RouterLink>
      </div>
    </div>
  </Transition>
</template>
