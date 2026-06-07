<script setup>
import { ref } from 'vue'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import ChatPopup from '@/components/ChatPopup.vue'
import MobileNav from '@/components/MobileNav.vue'

const isMobileNavOpen = ref(false)
const isChatOpen = ref(false)

const toggleMobileNav = () => {
  isMobileNavOpen.value = !isMobileNavOpen.value
}

const toggleChat = () => {
  isChatOpen.value = !isChatOpen.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader @toggle-mobile-nav="toggleMobileNav" />
    
    <main class="flex-1">
      <slot />
    </main>
    
    <TheFooter />
    
    <!-- Chat Icon -->
    <button 
      @click="toggleChat"
      class="fixed bottom-6 left-6 w-14 h-14 bg-qa-orange text-white rounded-full shadow-lg 
             flex items-center justify-center hover:bg-qa-blue transition-colors duration-300 z-40"
      aria-label="Open chat"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    </button>
    
    <!-- Chat Popup -->
    <ChatPopup :is-open="isChatOpen" @close="isChatOpen = false" />
    
    <!-- Mobile Nav -->
    <MobileNav :is-open="isMobileNavOpen" @close="isMobileNavOpen = false" />
  </div>
</template>
