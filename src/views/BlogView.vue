<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Calendar, User } from 'lucide-vue-next'
import { articles } from '@/data/articles'

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
}
</script>

<template>
  <!-- Page Header -->
  <section 
    class="page-header"
    style="background-image: url('/images/backgrounds/Slider_1.jpg')"
  >
    <div class="page-header__content">
      <div class="container mx-auto px-4">
        <h1 class="page-header__title">Our Blog</h1>
        <nav class="breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span>/</span>
          <span>Blog</span>
        </nav>
      </div>
    </div>
  </section>

  <!-- Blog Grid -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="section-title text-center max-w-2xl mx-auto">
        <span class="section-title__tagline">Latest Updates</span>
        <h2 class="section-title__title">
          News & <span>Articles</span>
        </h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="card group"
        >
          <div class="relative overflow-hidden rounded-xl mb-4">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <span class="absolute top-4 left-4 bg-qa-orange text-white text-xs font-medium px-3 py-1 rounded-full">
              {{ article.category }}
            </span>
          </div>
          <div class="flex items-center gap-4 text-sm text-qa-gray mb-3">
            <div class="flex items-center gap-1">
              <Calendar class="w-4 h-4" />
              {{ formatDate(article.date) }}
            </div>
            <div class="flex items-center gap-1">
              <User class="w-4 h-4" />
              {{ article.author }}
            </div>
          </div>
          <h3 class="text-xl font-serif font-bold text-qa-blue mb-3 group-hover:text-qa-orange transition-colors">
            <RouterLink :to="`/blog/${article.slug}`">
              {{ article.title }}
            </RouterLink>
          </h3>
          <p class="text-qa-gray text-sm mb-4">{{ article.excerpt }}</p>
          <RouterLink 
            :to="`/blog/${article.slug}`"
            class="text-qa-orange font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            Read More
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </article>
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="py-20 bg-qa-blue">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p class="text-white/70 mb-8">
          Stay updated with the latest news, articles, and insights on quality management.
        </p>
        <form class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-qa-orange"
          />
          <button type="submit" class="btn-primary bg-qa-orange hover:bg-white hover:text-qa-blue">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
