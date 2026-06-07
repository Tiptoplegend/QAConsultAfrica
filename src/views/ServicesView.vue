<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
import { services } from '@/data/services'
</script>

<template>
  <!-- Page Header -->
  <section 
    class="page-header"
    style="background-image: url('/images/backgrounds/Slider_2.jpg')"
  >
    <div class="page-header__content">
      <div class="container mx-auto px-4">
        <h1 class="page-header__title">Our Services</h1>
        <nav class="breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span>/</span>
          <span>Services</span>
        </nav>
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="section-title text-center max-w-2xl mx-auto">
        <span class="section-title__tagline">What We Offer</span>
        <h2 class="section-title__title">
          Comprehensive Quality <span>Solutions</span>
        </h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="card group"
        >
          <div class="w-16 h-16 rounded-xl bg-qa-orange/10 flex items-center justify-center mb-6 group-hover:bg-qa-orange transition-colors">
            <svg class="w-8 h-8 text-qa-orange group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-qa-blue mb-3">
            <RouterLink :to="`/services/${service.slug}`" class="hover:text-qa-orange transition-colors">
              {{ service.title }}
            </RouterLink>
          </h3>
          <p class="text-qa-gray text-sm mb-4">{{ service.shortDescription }}</p>
          <ul class="space-y-2 mb-6">
            <li 
              v-for="(feature, index) in service.features.slice(0, 3)" 
              :key="index"
              class="flex items-center gap-2 text-sm text-qa-gray"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-qa-orange"></span>
              {{ feature }}
            </li>
          </ul>
          <RouterLink 
            :to="`/services/${service.slug}`"
            class="text-qa-orange font-medium flex items-center gap-2 hover:gap-3 transition-all"
          >
            Learn More
            <ArrowRight class="w-4 h-4" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-20 bg-qa-primary">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div class="section-title">
            <span class="section-title__tagline">Why Choose Us</span>
            <h2 class="section-title__title">
              Expert Consultants <span>You Can Trust</span>
            </h2>
          </div>
          <p class="text-qa-gray mb-8">
            Our team brings decades of combined experience across manufacturing, hospitality, and regulatory sectors. 
            We understand the unique challenges businesses face and provide tailored solutions that deliver results.
          </p>
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-qa-orange/10 flex items-center justify-center">
                <span class="text-2xl font-serif font-bold text-qa-orange">15+</span>
              </div>
              <div>
                <div class="font-bold text-qa-blue">Years</div>
                <div class="text-sm text-qa-gray">Experience</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-qa-orange/10 flex items-center justify-center">
                <span class="text-2xl font-serif font-bold text-qa-orange">50+</span>
              </div>
              <div>
                <div class="font-bold text-qa-blue">Clients</div>
                <div class="text-sm text-qa-gray">Served</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-qa-orange/10 flex items-center justify-center">
                <span class="text-2xl font-serif font-bold text-qa-orange">100%</span>
              </div>
              <div>
                <div class="font-bold text-qa-blue">Success</div>
                <div class="text-sm text-qa-gray">Rate</div>
              </div>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-qa-orange/10 flex items-center justify-center">
                <span class="text-2xl font-serif font-bold text-qa-orange">24/7</span>
              </div>
              <div>
                <div class="font-bold text-qa-blue">Support</div>
                <div class="text-sm text-qa-gray">Available</div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img 
            src="/images/QMS_ISO.jpg" 
            alt="Our Services" 
            class="rounded-2xl shadow-xl w-full"
          />
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 bg-qa-blue">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Need a Custom Solution?
        </h2>
        <p class="text-white/70 mb-8">
          Contact us to discuss your specific requirements and how we can help you achieve your quality goals.
        </p>
        <RouterLink to="/contact" class="btn-primary bg-white text-qa-blue hover:bg-qa-orange hover:text-white">
          <span>Get A Quote</span>
          <ArrowRight class="w-5 h-5 icon" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
