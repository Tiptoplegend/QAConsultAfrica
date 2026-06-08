<script setup>
import { ref } from 'vue'
import { X, Send } from 'lucide-vue-next'
import { useContactForm } from '@/composables/useContactForm'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const form = ref({
  name: '',
  email: '',
  message: ''
})

const { isSubmitting, submitStatus, submitMessage, submitContactForm } = useContactForm('Chat Widget')

const handleSubmit = async () => {
  const sent = await submitContactForm(form.value)

  if (sent) {
    form.value = { name: '', email: '', message: '' }
    emit('close')
  }
}
</script>

<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="opacity-0 -translate-x-full"
    enter-to-class="opacity-100 translate-x-0"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="opacity-100 translate-x-0"
    leave-to-class="opacity-0 -translate-x-full"
  >
    <div 
      v-show="isOpen"
      class="fixed bottom-0 left-0 w-full max-w-sm bg-qa-blue rounded-tr-2xl shadow-2xl z-50"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b border-white/10">
        <h4 class="text-white font-serif font-bold text-lg">Get In Touch</h4>
        <button 
          @click="emit('close')"
          class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-qa-orange transition-colors"
        >
          <X class="w-4 h-4" />
        </button>
      </div>

      <!-- Form -->
      <div class="p-4">
        <p class="text-white/70 text-sm mb-4">
          Please fill out the form below and we will get back to you as soon as possible.
        </p>
        <form @submit.prevent="handleSubmit" class="space-y-3">
          <input
            v-model="form.name"
            type="text"
            placeholder="Your Name"
            required
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-qa-orange transition-colors"
          />
          <input
            v-model="form.email"
            type="email"
            placeholder="Your Email"
            required
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-qa-orange transition-colors"
          />
          <textarea
            v-model="form.message"
            placeholder="Your Message"
            required
            rows="4"
            class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-qa-orange transition-colors resize-none"
          ></textarea>
          <button
            type="submit"
            :disabled="isSubmitting"
            class="w-full bg-qa-orange text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-white hover:text-qa-blue transition-colors disabled:opacity-50"
          >
            <span>{{ isSubmitting ? 'Sending...' : 'Submit Now' }}</span>
            <Send v-if="!isSubmitting" class="w-4 h-4" />
          </button>
          <p
            v-if="submitMessage"
            class="text-sm"
            :class="submitStatus === 'success' ? 'text-green-300' : 'text-red-300'"
          >
            {{ submitMessage }}
          </p>
        </form>
      </div>
    </div>
  </Transition>
</template>
