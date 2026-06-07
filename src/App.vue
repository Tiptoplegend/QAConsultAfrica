<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterView } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const isLoading = ref(true)
const cursorX = ref(0)
const cursorY = ref(0)
const cursorInnerX = ref(0)
const cursorInnerY = ref(0)
const isHovering = ref(false)

const handleMouseMove = (e) => {
  cursorX.value = e.clientX
  cursorY.value = e.clientY
  
  // Slight delay for the inner cursor is handled by CSS transitions usually, 
  // but here we just update both. The original script uses separate logic.
  cursorInnerX.value = e.clientX
  cursorInnerY.value = e.clientY
}

const handleMouseDown = () => isHovering.value = true
const handleMouseUp = () => isHovering.value = false

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mousedown', handleMouseDown)
  window.addEventListener('mouseup', handleMouseUp)
  
  setTimeout(() => {
    isLoading.value = false
  }, 500)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('mousedown', handleMouseDown)
  window.removeEventListener('mouseup', handleMouseUp)
})
</script>

<template>
  <!-- Custom Cursor -->
  <div class="hidden lg:block">
    <div 
      class="custom-cursor__cursor"
      :style="{ transform: `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)` }"
      :class="{ 'custom-cursor__hover': isHovering }"
    ></div>
    <div 
      class="custom-cursor__cursor-two"
      :style="{ left: `${cursorInnerX}px`, top: `${cursorInnerY}px` }"
      :class="{ 'custom-cursor__innerhover': isHovering }"
    ></div>
  </div>

  <!-- Preloader -->
  <div 
    class="preloader" 
    :class="{ 'loaded': !isLoading }"
  >
    <div class="preloader__spinner"></div>
  </div>

  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
