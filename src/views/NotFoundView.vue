<script setup>
import { RouterLink } from 'vue-router'
import { Home, ArrowLeft } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-[80vh] flex items-center justify-center py-20 bg-qa-primary">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-[150px] md:text-[200px] font-serif font-bold text-qa-blue/10 leading-none mb-4">
          404
        </h1>
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-qa-blue mb-6 -mt-20">
          Page Not Found
        </h2>
        <p class="text-qa-gray mb-8">
          Sorry, the page you are looking for doesn't exist or has been moved. 
          Please check the URL or navigate back to our homepage.
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <RouterLink to="/" class="btn-primary">
            <Home class="w-5 h-5" />
            <span>Back to Home</span>
          </RouterLink>
          <button 
            @click="$router.back()" 
            class="btn-secondary"
          >
            <ArrowLeft class="w-5 h-5" />
            <span>Go Back</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
