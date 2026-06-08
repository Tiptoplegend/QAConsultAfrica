<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight, Building2, Scale, GraduationCap, Shield, Users, Factory, Gavel, Clock, Heart, Target } from 'lucide-vue-next'
import { teamMembers, otherConsultants } from '@/data/team'

const features = [
  {
    icon: Building2,
    title: 'Professional',
    text: 'QA Consult is made up of professionals who have acquired knowledge in the field of Quality Assurance, Quality Auditing, Food Safety/HACCP, Regulatory Affairs and Manufacturing Hygiene. They are also well trained in Food safety and all associated programs. Excellence in manufacturing Hygiene, Quality Assurance and Food Safety.'
  },
  {
    icon: Scale,
    title: 'Food Safety',
    text: 'Our Food Safety training aligns with national and international standards with a curriculum developed to satisfy both local and international curricula. Training is broken into theoretical and practical sessions to drive deeper understanding.'
  },
  {
    icon: GraduationCap,
    title: 'Quality management Systems',
    text: 'Training in Quality management systems is tailored to align with the requirements of small, medium and large scale enterprises. QA consult is the firm to look up to when it comes to specialist training, workshops and general training on the subject of QA, Manufacturing Hygiene and Food Safety.'
  }
]

const values = [
  { icon: Scale, title: 'Integrity', text: 'We uphold the highest ethical standards in all our engagements, ensuring honesty, transparency, and trust in every decision we make.' },
  { icon: Users, title: 'Mutual', text: 'We foster relationships built on collaboration, respect, and shared success—valuing every stakeholder\'s contribution.' },
  { icon: Shield, title: 'Passion', text: 'We are driven by a deep commitment to excellence, approaching every project with enthusiasm, dedication, and purpose.' },
  { icon: Factory, title: 'Accountability', text: 'We take ownership of our actions and results, delivering on our commitments and standing by the quality of our work.' },
  { icon: Heart, title: 'Customer focus', text: 'We place our clients at the center of everything we do, tailoring our solutions to meet their unique needs and exceed expectations.' },
  { icon: Clock, title: 'Timeliness', text: 'We deliver efficiently and on schedule, ensuring that our services align with your timelines without compromising quality.' }
]

const testimonials = [
  {
    name: 'Basil Y.Ampofo',
    role: 'Regulatory Affairs, Uniliver',
    text: 'Working with QA Consult is wonderful. They are professional, knowledgeable and are able to shorten lead times for registration which translates into faster trade shipments and launches which equals more sales and profits. I could not have asked for a much better partner. Thank you!',
    rating: 5,
    image: '/images/icon/icons8-profile-100.png'
  }
]

const brands = [
  { name: 'Unilever', image: '/images/brand/Unilever.svg.png' },
  { name: 'FC Logo', image: '/images/brand/fc logo.png' },
  { name: 'R&R Skincare', image: '/images/brand/R&R Skincare.webp' },
  { name: 'Upfield', image: '/images/brand/Upfield.png' },
  { name: 'Hotel Joecarl', image: '/images/brand/hotel-joecarl.jpg' },
  { name: 'Yendent', image: '/images/brand/Yendentlogo.jpg' }
]
</script>

<template>
  <!-- Page Header -->
  <section 
    class="relative py-32 bg-cover bg-center bg-no-repeat overflow-hidden"
    style="background-image: url('/images/backgrounds/Slider_2.jpg')"
  >
    <div class="absolute inset-0 bg-black/80"></div>
    <div class="container mx-auto px-4 relative z-10 text-center">
      <h1 class="text-5xl md:text-7xl font-serif font-black text-white mb-6 uppercase tracking-wider">About Us</h1>
      <nav class="flex items-center justify-center gap-3 text-white font-bold uppercase tracking-widest text-sm">
        <RouterLink to="/" class="hover:text-qa-orange transition-colors">Home</RouterLink>
        <span class="text-qa-orange">/</span>
        <span class="text-white/60">About Us</span>
      </nav>
    </div>
  </section>

  <!-- About One Section -->
  <section class="py-32 bg-white overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-20 items-center mb-20">
        <!-- Images -->
        <div class="relative group">
          <div class="relative z-10">
            <img 
              src="/images/brand/Aboutus1.jpg" 
              alt="About QA Consult" 
              class="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 z-20 w-2/3">
            <img 
              src="/images/brand/Aboutus2.jpg" 
              alt="About QA Consult" 
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
            <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-[1.15] mb-8">
              Quality first, driving <span class="text-qa-orange italic">competitiveness</span> and trust
            </h2>
          </div>
          <p class="text-qa-gray text-lg mb-10 leading-relaxed">
            We are passionate about getting the output of manufactured processes right first time. 
            Quality of products defines competitive urge and our first response to consumer/customer needs is QUALITY.
          </p>
          <div class="space-y-6 mb-8">
            <div>
              <h5 class="text-qa-blue font-black text-xl mb-2">Our Vision</h5>
              <p class="text-qa-gray text-lg leading-relaxed">
                To be the most preferred provider of the world class solutions along the value chain for our clients
              </p>
            </div>
            <div>
              <h5 class="text-qa-blue font-black text-xl mb-2">Our Mission</h5>
              <p class="text-qa-gray text-lg leading-relaxed">
                We Promote the quality and safety and safety of products and services by providing competitive consultancy and cost-effective training in manufacturing Excellence hospitality and services
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Feature One Section -->
      <div class="grid md:grid-cols-3 gap-10">
        <div 
          v-for="(feature, index) in features" 
          :key="index"
          class="bg-qa-primary p-10 rounded-[40px] text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
        >
          <div class="w-20 h-20 rounded-full bg-qa-orange/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-qa-orange transition-all duration-500">
            <component :is="feature.icon" class="w-10 h-10 text-qa-orange group-hover:text-white transition-all duration-500" />
          </div>
          <h3 class="text-2xl font-serif font-black text-qa-blue mb-6 tracking-tight group-hover:text-qa-orange transition-colors">
            {{ feature.title }}
          </h3>
          <p class="text-qa-gray text-base leading-relaxed">{{ feature.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Our Values Section -->
  <section 
    class="py-32 bg-cover bg-center bg-fixed relative overflow-hidden"
    style="background-image: url('/images/backgrounds/Slider_1.jpg')"
  >
    <div class="absolute inset-0 bg-black/70"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-3xl mx-auto mb-20">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Our Values</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white leading-tight">
          The Principles That <span class="text-qa-orange italic">Guide Us</span>
        </h2>
      </div>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(value, index) in values" 
          :key="index"
          class="bg-white/95 backdrop-blur-sm p-10 rounded-[40px] text-center group hover:bg-white hover:shadow-2xl transition-all duration-500"
        >
          <div class="w-20 h-20 rounded-full bg-qa-orange/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-qa-orange transition-all duration-500">
            <component :is="value.icon" class="w-10 h-10 text-qa-orange group-hover:text-white transition-all duration-500" />
          </div>
          <h3 class="text-2xl font-serif font-black text-qa-blue mb-6 tracking-tight group-hover:text-qa-orange transition-colors">{{ value.title }}</h3>
          <p class="text-qa-gray text-base leading-relaxed">{{ value.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="py-32 bg-white">
    <div class="container mx-auto px-4">
      <div class="mb-20 text-center">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">The Team</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-tight">
          Exceptional <span class="text-qa-orange italic">Consultants</span>
        </h2>
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
          Associate <span class="text-qa-orange italic">Consultants</span>
        </h3>
      </div>
      <div class="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto mt-12">
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

  <!-- Testimonials Section -->
  <section class="py-32 bg-qa-primary relative overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto text-center mb-20">
        <div class="flex items-center justify-center gap-3 mb-4">
          <div class="w-12 h-0.5 bg-qa-orange"></div>
          <span class="text-qa-orange uppercase text-sm font-black tracking-[0.3em]">Testimonials</span>
          <div class="w-12 h-0.5 bg-qa-orange"></div>
        </div>
        <h2 class="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-qa-blue leading-tight mb-8">
          What Our Client's Says <br />
          About Our <span class="text-qa-orange italic">Best Work.</span>
        </h2>
      </div>
      <div class="max-w-4xl mx-auto">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="index"
          class="bg-white p-12 rounded-3xl shadow-xl relative"
        >
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
            <svg 
              v-for="i in testimonial.rating" 
              :key="i"
              class="w-5 h-5 text-qa-orange fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Brand Section -->
  <section class="py-32 bg-white">
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-4 gap-12 items-center">
        <div class="lg:col-span-1">
          <p class="text-2xl font-serif font-black text-qa-blue leading-tight">
            We have <span class="text-qa-orange italic">over 250 trusted</span> <br />
            brands worldwide
          </p>
        </div>
        <div class="lg:col-span-3">
          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div 
              v-for="(brand, index) in brands" 
              :key="index"
              class="flex items-center justify-center p-6 bg-qa-primary rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 group"
            >
              <img 
                :src="brand.image" 
                :alt="brand.name"
                class="max-h-16 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-32 bg-qa-blue relative overflow-hidden text-center">
    <div class="absolute inset-0 bg-pattern opacity-10"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-serif font-black text-white mb-8 leading-tight tracking-tight">
          Ready to Get <span class="text-qa-orange italic">Started?</span>
        </h2>
        <p class="text-white/60 text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
          Contact us today to discuss how we can help your business achieve quality excellence.
        </p>
        <RouterLink to="/contact" class="thm-btn group bg-white border-white">
          <span class="thm-btn-text text-qa-blue group-hover:text-white">Contact Us</span>
          <div class="thm-btn-icon-box bg-qa-orange text-white group-hover:bg-white group-hover:text-qa-orange">
            <ArrowRight class="w-4 h-4 icon" />
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
