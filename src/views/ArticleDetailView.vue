<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowRight, Calendar, User, Tag, ArrowLeft } from 'lucide-vue-next'
import { getArticleBySlug, articles } from '@/data/articles'

const route = useRoute()
const article = computed(() => getArticleBySlug(route.params.slug))
const recentArticles = computed(() => articles.filter(a => a.slug !== route.params.slug).slice(0, 3))

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  })
}
</script>

<template>
  <template v-if="article">
    <!-- Page Header -->
    <section 
      class="page-header"
      style="background-image: url('/images/backgrounds/Slider_1.jpg')"
    >
      <div class="page-header__content">
        <div class="container mx-auto px-4">
          <h1 class="page-header__title">{{ article.title }}</h1>
          <nav class="breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span>/</span>
            <RouterLink to="/blog">Blog</RouterLink>
            <span>/</span>
            <span>{{ article.title }}</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-80 object-cover rounded-2xl mb-8"
            />
            
            <div class="flex flex-wrap items-center gap-4 mb-6 text-sm text-qa-gray">
              <div class="flex items-center gap-2">
                <Calendar class="w-4 h-4 text-qa-orange" />
                {{ formatDate(article.date) }}
              </div>
              <div class="flex items-center gap-2">
                <User class="w-4 h-4 text-qa-orange" />
                {{ article.author }}
              </div>
              <div class="flex items-center gap-2">
                <Tag class="w-4 h-4 text-qa-orange" />
                {{ article.category }}
              </div>
            </div>

            <h1 class="text-3xl font-serif font-bold text-qa-blue mb-6">{{ article.title }}</h1>
            
            <div 
              class="prose prose-lg max-w-none text-qa-gray
                     prose-headings:text-qa-blue prose-headings:font-serif
                     prose-a:text-qa-orange prose-a:no-underline hover:prose-a:underline
                     prose-li:marker:text-qa-orange"
              v-html="article.content"
            ></div>

            <!-- Tags -->
            <div class="mt-8 pt-8 border-t">
              <div class="flex flex-wrap items-center gap-2">
                <span class="font-medium text-qa-blue">Tags:</span>
                <span 
                  v-for="tag in article.tags" 
                  :key="tag"
                  class="px-3 py-1 bg-qa-primary text-qa-gray text-sm rounded-full"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Navigation -->
            <div class="mt-8 flex justify-between">
              <RouterLink 
                to="/blog" 
                class="flex items-center gap-2 text-qa-orange hover:text-qa-blue transition-colors"
              >
                <ArrowLeft class="w-4 h-4" />
                Back to Blog
              </RouterLink>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Search -->
            <div class="card">
              <h3 class="text-xl font-serif font-bold text-qa-blue mb-4">Search</h3>
              <div class="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..."
                  class="input-field pr-12"
                />
                <button class="absolute right-3 top-1/2 -translate-y-1/2 text-qa-gray hover:text-qa-orange">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <!-- Recent Articles -->
            <div class="card">
              <h3 class="text-xl font-serif font-bold text-qa-blue mb-4 pb-4 border-b">
                Recent Articles
              </h3>
              <div class="space-y-4">
                <RouterLink 
                  v-for="a in recentArticles" 
                  :key="a.id"
                  :to="`/blog/${a.slug}`"
                  class="flex gap-4 group"
                >
                  <img 
                    :src="a.image" 
                    :alt="a.title"
                    class="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h4 class="font-medium text-qa-blue group-hover:text-qa-orange transition-colors text-sm line-clamp-2">
                      {{ a.title }}
                    </h4>
                    <p class="text-xs text-qa-gray mt-1">{{ formatDate(a.date) }}</p>
                  </div>
                </RouterLink>
              </div>
            </div>

            <!-- Categories -->
            <div class="card">
              <h3 class="text-xl font-serif font-bold text-qa-blue mb-4 pb-4 border-b">
                Categories
              </h3>
              <ul class="space-y-2">
                <li v-for="category in ['Quality', 'Food Safety', 'Manufacturing', 'QMS', 'Industry']" :key="category">
                  <a 
                    href="#" 
                    class="flex items-center justify-between py-2 text-qa-gray hover:text-qa-orange transition-colors"
                  >
                    <span>{{ category }}</span>
                    <ArrowRight class="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <!-- Not Found -->
  <template v-else>
    <section class="py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-serif font-bold text-qa-blue mb-4">Article Not Found</h1>
        <p class="text-qa-gray mb-8">The article you're looking for doesn't exist.</p>
        <RouterLink to="/blog" class="btn-primary">
          <span>View All Articles</span>
          <ArrowRight class="w-5 h-5 icon" />
        </RouterLink>
      </div>
    </section>
  </template>
</template>
