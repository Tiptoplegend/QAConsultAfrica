<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ArrowRight, Phone, Mail, MapPin, Check } from 'lucide-vue-next'
import { getTeamMemberBySlug, getAllTeamMembers } from '@/data/team'

const route = useRoute()
const member = computed(() => getTeamMemberBySlug(route.params.slug))
const otherMembers = computed(() => getAllTeamMembers().filter(m => m.slug !== route.params.slug))
</script>

<template>
  <template v-if="member">
    <!-- Page Header -->
    <section 
      class="page-header"
      style="background-image: url('/images/backgrounds/Slider_3.jpg')"
    >
      <div class="page-header__content">
        <div class="container mx-auto px-4">
          <h1 class="page-header__title">Team Profile</h1>
          <nav class="breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            <span>/</span>
            <RouterLink to="/team">The Team</RouterLink>
            <span>/</span>
            <span>{{ member.name }}</span>
          </nav>
        </div>
      </div>
    </section>

    <!-- Profile Content -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Image -->
          <div>
            <img 
              :src="member.detailImage" 
              :alt="member.name"
              class="w-full rounded-2xl shadow-xl"
            />
          </div>

          <!-- Info -->
          <div>
            <h2 class="text-3xl font-serif font-bold text-qa-blue mb-2">{{ member.name }}</h2>
            <p class="text-qa-orange font-medium mb-6">{{ member.role }}</p>
            
            <!-- Social -->
            <div class="flex gap-3 mb-6">
              <a :href="member.social.linkedin" class="w-10 h-10 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a :href="member.social.twitter" class="w-10 h-10 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a :href="member.social.facebook" class="w-10 h-10 rounded-full bg-qa-blue/10 flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
            </div>

            <p class="text-qa-gray mb-8">{{ member.bio }}</p>

            <!-- Contact Info -->
            <div class="grid sm:grid-cols-2 gap-4 mb-8">
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-qa-orange/10 flex items-center justify-center flex-shrink-0">
                  <MapPin class="w-5 h-5 text-qa-orange" />
                </div>
                <div>
                  <p class="text-sm text-qa-gray">Address</p>
                  <p class="font-medium text-qa-blue">{{ member.address }}</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-full bg-qa-orange/10 flex items-center justify-center flex-shrink-0">
                  <Phone class="w-5 h-5 text-qa-orange" />
                </div>
                <div>
                  <p class="text-sm text-qa-gray">Phone</p>
                  <a
                    v-if="member.phone !== '-'"
                    :href="`tel:${member.phone}`"
                    class="font-medium text-qa-blue hover:text-qa-orange transition-colors"
                  >
                    {{ member.phone }}
                  </a>
                  <p v-else class="font-medium text-qa-blue">-</p>
                </div>
              </div>
              <div class="flex items-start gap-3 sm:col-span-2">
                <div class="w-10 h-10 rounded-full bg-qa-orange/10 flex items-center justify-center flex-shrink-0">
                  <Mail class="w-5 h-5 text-qa-orange" />
                </div>
                <div>
                  <p class="text-sm text-qa-gray">Email</p>
                  <a
                    v-if="member.email !== '-'"
                    :href="`mailto:${member.email}`"
                    class="font-medium text-qa-blue hover:text-qa-orange transition-colors"
                  >
                    {{ member.email }}
                  </a>
                  <p v-else class="font-medium text-qa-blue">-</p>
                </div>
              </div>
            </div>

            <!-- Areas of Expertise -->
            <div class="mt-8">
              <h3 class="text-xl font-serif font-bold text-qa-blue mb-4">Areas of Expertise</h3>
              <div class="grid sm:grid-cols-2 gap-3">
                <div 
                  v-for="(skill, index) in member.expertise" 
                  :key="index"
                  class="flex items-center gap-3 p-3 bg-qa-primary rounded-lg"
                >
                  <div class="w-6 h-6 rounded-full bg-qa-orange flex items-center justify-center flex-shrink-0">
                    <Check class="w-3 h-3 text-white" />
                  </div>
                  <span class="text-qa-blue font-medium text-sm">{{ skill }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Experience & Qualifications -->
        <div class="grid lg:grid-cols-2 gap-12 mt-12">
          <!-- Experience -->
          <div>
            <h3 class="text-2xl font-serif font-bold text-qa-blue mb-6">Work Experience</h3>
            <div class="space-y-6">
              <div 
                v-for="(exp, index) in member.experience" 
                :key="index"
                class="border-l-4 border-qa-orange pl-6"
              >
                <h4 class="text-lg font-bold text-qa-blue mb-2">{{ exp.title }}</h4>
                <p class="text-qa-gray">{{ exp.description }}</p>
              </div>
            </div>
          </div>

          <!-- Qualifications -->
          <div v-if="member.qualifications?.length">
            <h3 class="text-2xl font-serif font-bold text-qa-blue mb-6">Qualifications</h3>
            <ul class="space-y-3">
              <li 
                v-for="(qual, index) in member.qualifications" 
                :key="index"
                class="flex items-start gap-3"
              >
                <div class="w-2 h-2 bg-qa-orange rounded-full mt-2 flex-shrink-0"></div>
                <span class="text-qa-orange font-medium">{{ qual }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Team Members -->
    <section class="py-32 bg-white">
      <div class="container mx-auto px-4">
        <div class="mb-20 text-center">
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="w-12 h-0.5 bg-qa-orange"></div>
            <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Our Team</span>
            <div class="w-12 h-0.5 bg-qa-orange"></div>
          </div>
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-tight">
            Other <span class="text-qa-orange italic">Team Members</span>
          </h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
          <div 
            v-for="m in otherMembers" 
            :key="m.id"
            class="group"
          >
            <div class="relative overflow-hidden rounded-[40px] mb-8 shadow-xl">
              <img 
                :src="m.image" 
                :alt="m.name"
                class="w-full h-[400px] object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-qa-blue/90 via-qa-blue/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-10">
                <div class="flex gap-4">
                  <a :href="m.social.linkedin" class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-all duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a :href="m.social.twitter" class="w-12 h-12 rounded-full bg-white flex items-center justify-center text-qa-blue hover:bg-qa-orange hover:text-white transition-all duration-300">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                </div>
              </div>
            </div>
            <div class="text-center px-4">
              <RouterLink :to="`/team/${m.slug}`">
                <h3 class="text-2xl font-serif font-black text-qa-blue hover:text-qa-orange transition-colors tracking-tight mb-2">
                  {{ m.name }}
                </h3>
              </RouterLink>
              <p class="text-qa-orange font-bold text-sm uppercase tracking-widest">{{ m.shortRole }}</p>
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
        <h1 class="text-4xl font-serif font-bold text-qa-blue mb-4">Profile Not Found</h1>
        <p class="text-qa-gray mb-8">The team member you're looking for doesn't exist.</p>
        <RouterLink to="/team" class="btn-primary">
          <span>View All Team Members</span>
          <ArrowRight class="w-5 h-5 icon" />
        </RouterLink>
      </div>
    </section>
  </template>
</template>
