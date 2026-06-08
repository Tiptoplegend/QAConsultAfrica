<script setup>
import { RouterLink } from 'vue-router'
import { teamMembers, otherConsultants } from '@/data/team'
</script>

<template>
  <!-- Page Header -->
  <section 
    class="page-header"
    style="background-image: url('/images/backgrounds/Slider_3.jpg')"
  >
    <div class="page-header__content">
      <div class="container mx-auto px-4">
        <h1 class="page-header__title">Our Team</h1>
        <nav class="breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span>/</span>
          <span>The Team</span>
        </nav>
      </div>
    </div>
  </section>

  <!-- Team Grid -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="section-title text-center max-w-2xl mx-auto">
        <span class="section-title__tagline">Meet The Experts</span>
        <h2 class="section-title__title">
          Exceptional <span>Consultants</span>
        </h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="member in teamMembers" 
          :key="member.id"
          class="group"
        >
          <div class="relative overflow-hidden rounded-2xl mb-4">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-qa-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
              <div class="flex gap-3">
                <a :href="member.social.linkedin" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a :href="member.social.twitter" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a :href="member.social.facebook" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <RouterLink :to="`/team/${member.slug}`">
            <h3 class="text-lg font-serif font-bold text-qa-blue hover:text-qa-orange transition-colors">
              {{ member.name }}
            </h3>
          </RouterLink>
          <p class="text-qa-gray text-sm">{{ member.role }}</p>
        </div>
      </div>

      <div class="mt-20 text-center">
        <h3 class="text-3xl md:text-4xl font-serif font-bold text-qa-blue">
          Other <span class="text-qa-orange italic">Consultants</span>
        </h3>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <div 
          v-for="consultant in otherConsultants" 
          :key="consultant.id"
          class="group"
        >
          <div class="relative overflow-hidden rounded-2xl mb-4">
            <img 
              :src="consultant.image" 
              :alt="consultant.name"
              class="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-qa-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
              <div class="flex gap-3">
                <a :href="consultant.social.linkedin" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a :href="consultant.social.twitter" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a :href="consultant.social.facebook" class="w-10 h-10 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <RouterLink :to="`/team/${consultant.slug}`">
            <h3 class="text-lg font-serif font-bold text-qa-blue hover:text-qa-orange transition-colors">
              {{ consultant.name }}
            </h3>
          </RouterLink>
          <p class="text-qa-gray text-sm">{{ consultant.role }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 bg-qa-blue">
    <div class="container mx-auto px-4">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
          Want to Join Our Team?
        </h2>
        <p class="text-white/70 mb-8">
          We're always looking for talented professionals passionate about quality excellence.
        </p>
        <RouterLink to="/contact" class="btn-primary bg-white text-qa-blue hover:bg-qa-orange hover:text-white">
          <span>Contact Us</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
