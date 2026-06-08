<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import { ArrowRight, Play, Star, Check } from 'lucide-vue-next'
import { services } from '@/data/services'
import { teamMembers, otherConsultants } from '@/data/team'
import { getRecentArticles } from '@/data/articles'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

const modules = [Autoplay, Pagination, Navigation, EffectFade]

const heroSlides = [
  {
    bg: '/images/backgrounds/Slider_1.jpg',
    subtitle: 'Welcome to QA Consult Africa',
    title: 'Trusted Partners In',
    highlight: 'Quality Excellence',
    text: 'We elevate businesses across Ghana through comprehensive quality assurance solutions. From manufacturing standards to hospitality excellence, we ensure your operations meet international benchmarks and drive sustainable growth.'
  },
  {
    bg: '/images/backgrounds/Slider_2.jpg',
    subtitle: 'Welcome to QA Consult Africa',
    title: 'Manufacturing Excellence Through',
    highlight: 'Quality Systems',
    text: 'Transform your manufacturing processes with ISO 9001:2015 certification guidance and quality management systems. Our expert consultants deliver tailored solutions that enhance productivity and ensure regulatory compliance.'
  },
  {
    bg: '/images/backgrounds/Slider_3.jpg',
    subtitle: 'Welcome to QA Consult Africa',
    title: 'Hospitality Standards That',
    highlight: 'Inspire Confidence',
    text: 'We help hospitality businesses achieve excellence through food safety management, quality standards, and customer service optimization.'
  }
]

const processSteps = [
  { icon: 'user', title: 'Request', text: 'Clients submit enquiries; company acknowledges, gathers details, and assigns a dedicated contact person.' },
  { icon: 'chess', title: 'Proposal', text: 'Team reviews request, develops tailored proposal, shares with client, and manages approvals collaboratively.' },
  { icon: 'search', title: 'Assessment', text: 'Gap analysis conducted, risks identified, resources mapped, and findings validated with client alignment.' },
  { icon: 'shield', title: 'Delivery', text: 'Solution implemented with monitoring, quality checks, client communication, handover, feedback, and improvement.' }
]

const stats = [
  { value: 15, suffix: '+', label: 'Client Consultations' },
  { value: 5, suffix: '+', label: 'Retainer Clients' },
  { value: 10, suffix: '+', label: 'Partner Clients' },
  { value: 4, suffix: '+', label: 'Periodic Clients' }
]

const testimonials = [
  {
    name: 'Basil Y. Ampofo',
    role: 'Regulatory Affairs, Unilever',
    image: '/images/icon/icons8-profile-100.png',
    text: 'Working with QA Consult is wonderful. They are professional, knowledgeable and are able to shorten lead times for registration which translates into faster trade shipments and launches which equals more sales and profits. I could not have asked for a much better partner. Thank you!',
    rating: 5
  }
]

const recentArticles = getRecentArticles(3)

const animatedStats = ref([])

onMounted(() => {
  // Animate stats on mount
  stats.forEach((stat, index) => {
    animatedStats.value[index] = 0
    const interval = setInterval(() => {
      if (animatedStats.value[index] < stat.value) {
        animatedStats.value[index]++
      } else {
        clearInterval(interval)
      }
    }, 100)
  })
})
</script>

<template>
  <!-- Hero Section -->
  <section class="relative overflow-hidden" id="home" style="position: relative;">
    <Swiper
      :modules="modules"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 7000, disableOnInteraction: false }"
      :effect="'fade'"
      :fade-effect="{ crossFade: true }"
      :pagination="{ clickable: true }"
      class="hero-swiper"
    >
      <SwiperSlide v-for="(slide, index) in heroSlides" :key="index">
        <div 
          class="relative min-h-[95vh] flex items-center bg-cover bg-center"
          :style="{ backgroundImage: `url(${slide.bg})` }"
        >
          <div class="absolute inset-0 bg-black/70"></div>
          <div class="container mx-auto px-4 relative z-10 py-20">
            <div class="max-w-4xl">
              <p class="text-qa-orange text-lg font-bold uppercase tracking-[0.2em] mb-6 animate-fade-in">
                {{ slide.subtitle }}
              </p>
              <h1 class="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white mb-8 leading-[1.1]">
                {{ slide.title }} <br />
                <span class="text-qa-orange">{{ slide.highlight }}</span>
              </h1>
              <p class="text-white/80 text-xl mb-12 max-w-2xl leading-relaxed">
                {{ slide.text }}
              </p>
              <div class="flex flex-wrap items-center gap-10 pb-8">
                <RouterLink to="/about" class="thm-btn group">
                  <span class="thm-btn-text text-white">Learn More</span>
                  <div class="thm-btn-icon-box">
                    <ArrowRight class="w-4 h-4 icon" />
                  </div>
                </RouterLink>
                <div class="relative">
                  <a 
                    href="https://www.youtube.com/watch?v=pJSputHBClw" 
                    target="_blank"
                    class="flex items-center gap-5 text-white group"
                  >
                    <div class="relative w-16 h-16 rounded-full bg-qa-orange flex items-center justify-center ripple">
                      <Play class="w-6 h-6 fill-current relative z-10" />
                    </div>
                    <span class="text-lg font-bold uppercase tracking-widest">Watch Video</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>

  <!-- About Section -->
  <section class="py-32 bg-white overflow-hidden" id="about">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-20 items-center">
        <!-- Images -->
        <div class="relative group">
          <div class="relative z-10">
            <img 
              src="/images/brand/Aboutus1.jpg" 
              alt="About Us" 
              class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 z-20 w-2/3">
            <img 
              src="/images/brand/Aboutus2.jpg" 
              alt="About Us" 
              class="rounded-3xl shadow-2xl w-full h-72 object-cover border-8 border-white"
            />
          </div>
          <div class="absolute -top-10 -left-10 w-40 h-40 bg-qa-orange/5 rounded-full -z-0 animate-pulse"></div>
        </div>

        <!-- Content -->
        <div class="pt-10 lg:pt-0">
          <div class="mb-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">About Us</span>
              <div class="w-12 h-0.5 bg-qa-orange"></div>
            </div>
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-[1.15]">
              Quality First, <br />
              <span class="text-qa-orange italic">Competitive</span> Excellence Always
            </h2>
          </div>
          <p class="text-qa-gray text-lg mb-10 leading-relaxed">
            We are passionate about getting the output of manufactured processes right first time. 
            Quality of products defines competitive urge and our first response to consumer/customer needs is QUALITY.
          </p>
          <div class="grid sm:grid-cols-2 gap-8 mb-12">
            <div class="flex items-center gap-5 group">
              <div class="w-14 h-14 rounded-full bg-qa-orange/10 flex items-center justify-center text-qa-orange group-hover:bg-qa-orange group-hover:text-white transition-all duration-500">
                <Check class="w-6 h-6" />
              </div>
              <span class="font-bold text-qa-blue uppercase tracking-wider text-sm">Process Excellence</span>
            </div>
            <div class="flex items-center gap-5 group">
              <div class="w-14 h-14 rounded-full bg-qa-orange/10 flex items-center justify-center text-qa-orange group-hover:bg-qa-orange group-hover:text-white transition-all duration-500">
                <Check class="w-6 h-6" />
              </div>
              <span class="font-bold text-qa-blue uppercase tracking-wider text-sm">Consistent Precision</span>
            </div>
            <div class="flex items-center gap-5 group">
              <div class="w-14 h-14 rounded-full bg-qa-orange/10 flex items-center justify-center text-qa-orange group-hover:bg-qa-orange group-hover:text-white transition-all duration-500">
                <Check class="w-6 h-6" />
              </div>
              <span class="font-bold text-qa-blue uppercase tracking-wider text-sm">Competitive Quality</span>
            </div>
            <div class="flex items-center gap-5 group">
              <div class="w-14 h-14 rounded-full bg-qa-orange/10 flex items-center justify-center text-qa-orange group-hover:bg-qa-orange group-hover:text-white transition-all duration-500">
                <Check class="w-6 h-6" />
              </div>
              <span class="font-bold text-qa-blue uppercase tracking-wider text-sm">Customer Focus</span>
            </div>
          </div>
          <RouterLink to="/about" class="thm-btn group">
            <span class="thm-btn-text">Learn More</span>
            <div class="thm-btn-icon-box">
              <ArrowRight class="w-4 h-4 icon" />
            </div>
          </RouterLink>
        </div>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section class="py-32 bg-qa-primary relative overflow-hidden">
    <div class="absolute top-0 left-0 w-full h-full bg-pattern opacity-50"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Working Process</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-tight">
          We Use The Most Effective <br />
          Methods to <span class="text-qa-orange italic">Build a Brand</span>
        </h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="(step, index) in processSteps" 
          :key="index"
          class="bg-white p-10 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3 group relative overflow-hidden"
        >
          <div class="absolute top-0 right-0 w-24 h-24 bg-qa-orange/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-qa-orange group-hover:w-full group-hover:h-full group-hover:rounded-none z-0"></div>
          <div class="relative z-10">
            <div class="w-20 h-20 rounded-full bg-qa-orange/10 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors duration-500">
              <span class="text-3xl font-serif font-black text-qa-orange group-hover:text-white transition-colors duration-500">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
            </div>
            <h3 class="text-2xl font-serif font-black text-qa-blue mb-5 group-hover:text-white transition-colors duration-500 tracking-tight">{{ step.title }}</h3>
            <p class="text-qa-gray text-base leading-relaxed group-hover:text-white/80 transition-colors duration-500">{{ step.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Services Section -->
  <section class="py-32 bg-white relative overflow-hidden" id="services">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Our Services</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-tight">
          Trusted Consultancy Firm With <br />
          <span class="text-qa-orange italic">Quality Solutions</span>
        </h2>
      </div>
      <Swiper
        :modules="modules"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 5000, disableOnInteraction: false }"
        :pagination="{ clickable: true }"
        :breakpoints="{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 }
        }"
        class="services-swiper pb-20"
      >
        <SwiperSlide v-for="service in services.slice(0, 5)" :key="service.id">
          <div class="bg-qa-primary p-10 rounded-3xl h-full transition-all duration-500 hover:bg-white hover:shadow-2xl group border border-transparent hover:border-qa-orange/10">
            <div class="w-20 h-20 rounded-2xl bg-white shadow-lg flex items-center justify-center mb-8 group-hover:bg-qa-orange group-hover:text-white transition-all duration-500">
              <svg class="w-10 h-10 transition-colors duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-2xl font-serif font-black text-qa-blue mb-5 group-hover:text-qa-orange transition-colors tracking-tight">
              <RouterLink :to="`/services/${service.slug}`">
                {{ service.title }}
              </RouterLink>
            </h3>
            <p class="text-qa-gray text-base leading-relaxed mb-8">{{ service.shortDescription }}</p>
            <RouterLink 
              :to="`/services/${service.slug}`"
              class="inline-flex items-center gap-3 text-qa-blue font-bold uppercase tracking-widest text-xs hover:text-qa-orange transition-all group/btn"
            >
              Read More
              <ArrowRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </RouterLink>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>

  <!-- Stats Section -->
  <section 
    class="py-32 bg-cover bg-center bg-fixed relative overflow-hidden"
    style="background-image: url('/images/backgrounds/Slider_1.jpg')"
  >
    <div class="absolute inset-0 bg-black/90"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div 
          v-for="(stat, index) in stats" 
          :key="index"
          class="text-center group"
        >
          <div class="text-6xl md:text-7xl font-serif font-black text-white mb-4 transition-transform duration-500 group-hover:scale-110">
            {{ animatedStats[index] || 0 }}<span class="text-qa-orange">{{ stat.suffix }}</span>
          </div>
          <p class="text-white/60 uppercase tracking-[0.2em] font-bold text-sm">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonials Section -->
  <section class="py-32 bg-qa-primary">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-3 gap-20">
        <div>
          <div class="mb-10">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Testimonials</span>
              <div class="w-12 h-0.5 bg-qa-orange"></div>
            </div>
            <h2 class="text-4xl md:text-5xl font-serif font-black text-qa-blue leading-tight">
              What Our <br /><span class="text-qa-orange italic">Clients Say</span>
            </h2>
          </div>
          <p class="text-qa-gray text-lg leading-relaxed">
            Hear from businesses that trust us with their success and quality standards.
          </p>
        </div>
        <div class="lg:col-span-2">
          <Swiper
            :modules="modules"
            :slides-per-view="1"
            :loop="true"
            :autoplay="{ delay: 6000, disableOnInteraction: false }"
            :pagination="{ clickable: true }"
            class="testimonial-swiper pb-20"
          >
            <SwiperSlide v-for="(testimonial, index) in testimonials" :key="index">
              <div class="bg-white p-12 rounded-3xl shadow-xl relative">
                <div class="absolute top-10 right-12 text-qa-orange/10">
                  <svg class="w-24 h-24 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H15.017C13.3601 14 12.017 12.6569 12.017 11V5C12.017 3.34315 13.3601 2 15.017 2H21.017C22.6739 2 24.017 3.34315 24.017 5V11C24.017 12.6569 22.6739 14 21.017 14H21.017V16C21.017 18.7614 18.7784 21 16.017 21H14.017ZM2.01695 21L2.01695 18C2.01695 16.8954 2.91238 16 4.01695 16H7.01695V14H3.01695C1.3601 14 0.0169519 12.6569 0.0169519 11V5C0.0169519 3.34315 1.3601 2 3.01695 2H9.01695C10.6738 2 12.017 3.34315 12.017 5V11C12.017 12.6569 10.6738 14 9.01695 14H9.01695V16C9.01695 18.7614 6.77837 21 4.01695 21H2.01695Z"/></svg>
                </div>
                <div class="flex items-center gap-6 mb-10 relative z-10">
                  <img 
                    :src="testimonial.image" 
                    :alt="testimonial.name"
                    class="w-20 h-20 rounded-2xl object-cover shadow-lg"
                  />
                  <div>
                    <h4 class="text-xl font-serif font-black text-qa-blue tracking-tight">{{ testimonial.name }}</h4>
                    <p class="text-qa-orange font-bold text-sm uppercase tracking-widest mt-1">{{ testimonial.role }}</p>
                  </div>
                </div>
                <p class="text-qa-gray text-xl italic leading-relaxed mb-10 relative z-10">"{{ testimonial.text }}"</p>
                <div class="flex gap-1">
                  <Star 
                    v-for="i in testimonial.rating" 
                    :key="i"
                    class="w-5 h-5 text-qa-orange fill-current"
                  />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-32 bg-white" id="team">
    <div class="container mx-auto px-4">
      <div class="mb-20 text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">The Team</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue">Exceptional <span class="text-qa-orange italic">Consultants</span></h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div 
          v-for="member in teamMembers" 
          :key="member.id"
          class="group"
        >
          <div class="relative overflow-hidden rounded-[40px] mb-8 shadow-xl">
            <img 
              :src="member.image" 
              :alt="member.name"
              class="w-full h-[400px] object-cover object-top group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-qa-blue/90 via-qa-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10">
              <div class="flex gap-4">
                <a :href="member.social.linkedin" class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a :href="member.social.twitter" class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center px-4">
            <RouterLink :to="`/team/${member.slug}`">
              <h3 class="text-2xl font-serif font-black text-qa-blue hover:text-qa-orange transition-colors tracking-tight mb-2">
                {{ member.name }}
              </h3>
            </RouterLink>
            <p class="text-qa-orange font-bold text-sm uppercase tracking-widest">{{ member.shortRole }}</p>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center">
        <h3 class="text-3xl md:text-4xl font-serif font-black text-qa-blue">
          Other <span class="text-qa-orange italic">Consultants</span>
        </h3>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
        <div 
          v-for="consultant in otherConsultants" 
          :key="consultant.id"
          class="group"
        >
          <div class="relative overflow-hidden rounded-[40px] mb-8 shadow-xl">
            <img 
              :src="consultant.image" 
              :alt="consultant.name"
              class="w-full h-[400px] object-cover object-top group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-qa-blue/90 via-qa-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10">
              <div class="flex gap-4">
                <a :href="consultant.social.linkedin" class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </a>
                <a :href="consultant.social.twitter" class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-all duration-300">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div class="text-center px-4">
            <RouterLink :to="`/team/${consultant.slug}`">
              <h3 class="text-2xl font-serif font-black text-qa-blue hover:text-qa-orange transition-colors tracking-tight mb-2">
                {{ consultant.name }}
              </h3>
            </RouterLink>
            <p class="text-qa-orange font-bold text-sm uppercase tracking-widest">{{ consultant.shortRole }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Blog Section -->
  <section class="py-32 bg-qa-primary relative overflow-hidden" id="blog">
    <div class="absolute bottom-0 right-0 w-full h-full bg-pattern opacity-30 pointer-events-none"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="mb-20 text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Our Blog</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue">Latest <span class="text-qa-orange italic">News & Articles</span></h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article 
          v-for="article in recentArticles" 
          :key="article.id"
          class="bg-white rounded-[40px] overflow-hidden shadow-xl group transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent hover:border-qa-orange/10"
        >
          <div class="relative overflow-hidden h-72">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <span class="absolute top-6 left-6 bg-qa-orange text-white text-xs font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-lg">
              {{ article.category }}
            </span>
          </div>
          <div class="p-10">
            <div class="text-qa-orange font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
              <div class="w-2 h-2 rounded-full bg-qa-orange"></div>
              {{ new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) }}
            </div>
            <h3 class="text-2xl font-serif font-black text-qa-blue mb-6 group-hover:text-qa-orange transition-colors leading-tight tracking-tight">
              <RouterLink :to="`/blog/${article.slug}`">
                {{ article.title }}
              </RouterLink>
            </h3>
            <p class="text-qa-gray text-base leading-relaxed mb-8 line-clamp-2">{{ article.excerpt }}</p>
            <RouterLink 
              :to="`/blog/${article.slug}`"
              class="inline-flex items-center gap-3 text-qa-blue font-bold uppercase tracking-widest text-xs hover:text-qa-orange transition-all group/btn"
            >
              Read More
              <ArrowRight class="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- Contact CTA Section -->
  <section class="py-32 bg-qa-blue relative overflow-hidden" id="contact">
    <div class="absolute inset-0 bg-pattern opacity-10"></div>
    <div class="container mx-auto px-4 relative z-10 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight tracking-tight">
          Ready to Transform Your <span class="text-qa-orange italic">Business?</span>
        </h2>
        <p class="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Get in touch with our team of expert consultants and discover how we can help you achieve quality excellence.
        </p>
        <div class="flex flex-wrap justify-center items-center gap-10">
          <RouterLink to="/contact" class="thm-btn group bg-white border-white">
            <span class="thm-btn-text text-qa-blue group-hover:text-white">Contact Us</span>
            <div class="thm-btn-icon-box bg-qa-orange text-white group-hover:bg-white group-hover:text-qa-orange">
              <ArrowRight class="w-4 h-4 icon" />
            </div>
          </RouterLink>
          <a href="tel:+233244691674" class="text-white flex items-center gap-4 group">
            <div class="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-qa-orange transition-all duration-500">
              <Phone class="w-6 h-6 text-qa-orange" />
            </div>
            <div class="text-left">
              <span class="block text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Call Anytime</span>
              <span class="text-2xl font-black tracking-tight">+233 244691674</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-swiper {
  @apply overflow-hidden relative;
  width: 100%;
  height: 100%;
  min-height: 95vh;
  position: relative;
}

/* Ensure proper stacking for fade effect - Swiper handles opacity automatically */
.hero-swiper :deep(.swiper-wrapper) {
  position: relative;
}

.hero-swiper :deep(.swiper-slide) {
  @apply relative;
  width: 100%;
  height: 100%;
  min-height: 95vh;
}

.hero-swiper {
  position: relative;
}

.hero-swiper :deep(.swiper-pagination) {
  position: absolute !important;
  top: 50% !important;
  right: 10px !important;
  left: auto !important;
  bottom: auto !important;
  transform: translateY(-50%) !important;
  width: auto !important;
  max-width: none !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 15px !important;
  z-index: 30 !important;
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 0 !important;
  margin-left: auto !important;
  margin-right: 0 !important;
  text-align: left !important;
}

.hero-swiper :deep(.swiper-pagination)::before {
  position: absolute;
  top: 0;
  left: 50%;
  width: 4px;
  height: 85px;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 14%, rgba(255, 255, 255, 0.76) 35%, rgba(255, 255, 255, 0.57) 57%, rgba(255, 255, 255, 0.19) 95%);
  transform: translateX(-50%);
  opacity: 0.3;
  content: "";
}

.hero-swiper :deep(.swiper-pagination)::after {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 4px;
  height: 85px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 1) 14%, rgba(255, 255, 255, 0.76) 35%, rgba(255, 255, 255, 0.57) 57%, rgba(255, 255, 255, 0.19) 95%);
  transform: translateX(-50%);
  opacity: 0.3;
  content: "";
}

.hero-swiper :deep(.swiper-pagination-bullet) {
  position: relative;
  display: block;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  margin: 0 !important;
  opacity: 1;
  transition: all 200ms linear;
  transition-delay: 0.1s;
}

.hero-swiper :deep(.swiper-pagination-bullet)::before {
  position: absolute;
  top: -8px;
  left: -8px;
  bottom: -8px;
  right: -8px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transform: scaleX(0);
  transition: all 200ms linear;
  transition-delay: 0.1s;
  content: "";
}

.hero-swiper :deep(.swiper-pagination-bullet-active) {
  background: rgba(255, 255, 255, 1);
}

.hero-swiper :deep(.swiper-pagination-bullet-active)::before {
  transform: scaleX(1);
  border: 1px solid rgba(255, 255, 255, 1);
}

.hero-swiper :deep(.swiper-pagination-bullet:hover) {
  background: rgba(255, 255, 255, 1);
}

.hero-swiper :deep(.swiper-pagination-bullet:hover)::before {
  transform: scaleX(1);
  border: 1px solid rgba(255, 255, 255, 1);
}

.services-swiper :deep(.swiper-pagination),
.testimonial-swiper :deep(.swiper-pagination) {
  @apply bottom-0;
}
</style>
