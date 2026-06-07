<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowRight, Check, Phone, Mail } from 'lucide-vue-next'
import { getServiceBySlug, services } from '@/data/services'

const route = useRoute()
const service = computed(() => getServiceBySlug(route.params.slug))
const otherServices = computed(() => services.filter(s => s.slug !== route.params.slug).slice(0, 4))
</script>

<template>
  <template v-if="service">
    <!-- Page Header -->
    <section 
      class="page-header"
      style="background-image: url('/images/backgrounds/Slider_2.jpg')"
    >
      <div class="page-header__content">
        <div class="container mx-auto px-4">
          <h1 class="page-header__title">{{ service.title }}</h1>
          <nav class="breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span>/</span>
            <RouterLink to="/services">Services</RouterLink>
            <span>/</span>
            <span>{{ service.title }}</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Service Detail -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-3 gap-12">
          <!-- Main Content -->
          <div class="lg:col-span-2">
            <img 
              :src="service.image" 
              :alt="service.title"
              class="w-full h-80 object-cover rounded-2xl mb-8"
            />
            <h2 class="text-3xl font-serif font-bold text-qa-blue mb-6">{{ service.title }}</h2>
            <div class="prose prose-lg text-qa-gray mb-8 whitespace-pre-line">
              {{ service.description }}
            </div>

            <!-- Features -->
            <h3 class="text-xl font-serif font-bold text-qa-blue mb-4">Key Features</h3>
            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <div 
                v-for="(feature, index) in service.features" 
                :key="index"
                class="flex items-center gap-3 p-4 bg-qa-primary rounded-xl"
              >
                <div class="w-8 h-8 rounded-full bg-qa-orange flex items-center justify-center flex-shrink-0">
                  <Check class="w-4 h-4 text-white" />
                </div>
                <span class="font-medium text-qa-blue">{{ feature }}</span>
              </div>
            </div>

            <!-- CTA -->
            <div class="bg-qa-blue rounded-2xl p-8 text-center">
              <h3 class="text-2xl font-serif font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p class="text-white/70 mb-6">
                Contact us today to learn more about our {{ service.title }} services.
              </p>
              <RouterLink to="/contact" class="btn-primary bg-qa-orange hover:bg-white hover:text-qa-blue">
                <span>Contact Us</span>
                <ArrowRight class="w-5 h-5 icon" />
              </RouterLink>
            </div>
          </div>

          <!-- Sidebar -->
          <div class="space-y-8">
            <!-- Service List -->
            <div class="card">
              <h3 class="text-xl font-serif font-bold text-qa-blue mb-4 pb-4 border-b">
                All Services
              </h3>
              <ul class="space-y-2">
                <li v-for="s in services" :key="s.id">
                  <RouterLink 
                    :to="`/services/${s.slug}`"
                    class="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-qa-orange hover:text-white transition-colors"
                    :class="{ 'bg-qa-orange text-white': s.slug === route.params.slug, 'text-qa-blue': s.slug !== route.params.slug }"
                  >
                    <ArrowRight class="w-4 h-4" />
                    {{ s.title }}
                  </RouterLink>
                </li>
              </ul>
            </div>

            <!-- Contact Card -->
            <div class="bg-qa-blue rounded-2xl p-6 text-white">
              <h3 class="text-xl font-serif font-bold mb-4">Need Help?</h3>
              <p class="text-white/70 mb-6 text-sm">
                Contact us for a free consultation about your quality management needs.
              </p>
              <div class="space-y-4">
                <a href="tel:+233244691674" class="flex items-center gap-3 text-white hover:text-qa-orange transition-colors">
                  <Phone class="w-5 h-5" />
                  +233 244691674
                </a>
                <a href="mailto:info@qaconsultafrica.com" class="flex items-center gap-3 text-white hover:text-qa-orange transition-colors">
                  <Mail class="w-5 h-5" />
                  info@qaconsultafrica.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Services -->
    <section class="py-20 bg-qa-primary">
      <div class="container mx-auto px-4">
        <div class="section-title text-center max-w-2xl mx-auto">
          <span class="section-title__tagline">Other Services</span>
          <h2 class="section-title__title">
            Explore More <span>Solutions</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="s in otherServices" 
            :key="s.id"
            class="card"
          >
            <h3 class="text-lg font-serif font-bold text-qa-blue mb-3">
              <RouterLink :to="`/services/${s.slug}`" class="hover:text-qa-orange transition-colors">
                {{ s.title }}
              </RouterLink>
            </h3>
            <p class="text-qa-gray text-sm mb-4">{{ s.shortDescription }}</p>
            <RouterLink 
              :to="`/services/${s.slug}`"
              class="text-qa-orange font-medium flex items-center gap-2 text-sm hover:gap-3 transition-all"
            >
              Learn More
              <ArrowRight class="w-4 h-4" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </template>

  <!-- Not Found -->
  <template v-else>
    <section class="py-32">
      <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-serif font-bold text-qa-blue mb-4">Service Not Found</h1>
        <p class="text-qa-gray mb-8">The service you're looking for doesn't exist.</p>
        <RouterLink to="/services" class="btn-primary">
          <span>View All Services</span>
          <ArrowRight class="w-5 h-5 icon" />
        </RouterLink>
      </div>
    </section>
  </template>
</template>
