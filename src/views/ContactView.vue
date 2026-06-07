<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-vue-next'

const form = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  alert('Thank you for your message! We will get back to you soon.')
  form.value = { name: '', email: '', phone: '', subject: '', message: '' }
  isSubmitting.value = false
}
</script>

<template>
  <!-- Page Header -->
  <section 
    class="page-header"
    style="background-image: url('/images/backgrounds/Slider_2.jpg')"
  >
    <div class="page-header__content">
      <div class="container mx-auto px-4">
        <h1 class="page-header__title">Contact Us</h1>
        <nav class="breadcrumb">
          <RouterLink to="/">Home</RouterLink>
          <span>/</span>
          <span>Contact</span>
        </nav>
      </div>
    </div>
  </section>

  <!-- Contact Info -->
  <section class="py-20">
    <div class="container mx-auto px-4">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div class="card text-center group">
          <div class="w-16 h-16 rounded-full bg-qa-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-qa-orange transition-colors">
            <MapPin class="w-8 h-8 text-qa-orange group-hover:text-white transition-colors" />
          </div>
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">Our Location</h3>
          <p class="text-qa-gray text-sm">Hydraform Estates, Aviation Highway, Accra, Ghana</p>
        </div>
        <div class="card text-center group">
          <div class="w-16 h-16 rounded-full bg-qa-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-qa-orange transition-colors">
            <Phone class="w-8 h-8 text-qa-orange group-hover:text-white transition-colors" />
          </div>
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">Phone Number</h3>
          <a href="tel:+233244691674" class="text-qa-gray text-sm hover:text-qa-orange transition-colors">
            +233 244691674
          </a>
        </div>
        <div class="card text-center group">
          <div class="w-16 h-16 rounded-full bg-qa-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-qa-orange transition-colors">
            <Mail class="w-8 h-8 text-qa-orange group-hover:text-white transition-colors" />
          </div>
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">Email Address</h3>
          <a href="mailto:info@qaconsultafrica.com" class="text-qa-gray text-sm hover:text-qa-orange transition-colors">
            info@qaconsultafrica.com
          </a>
        </div>
        <div class="card text-center group">
          <div class="w-16 h-16 rounded-full bg-qa-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-qa-orange transition-colors">
            <Clock class="w-8 h-8 text-qa-orange group-hover:text-white transition-colors" />
          </div>
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">Working Hours</h3>
          <p class="text-qa-gray text-sm">Mon - Fri: 09:00 - 17:00</p>
        </div>
      </div>

      <!-- Contact Form -->
      <div class="grid lg:grid-cols-2 gap-12">
        <div>
          <div class="section-title">
            <span class="section-title__tagline">Get In Touch</span>
            <h2 class="section-title__title">
              Have Questions? <span>Contact Us</span>
            </h2>
          </div>
          <p class="text-qa-gray mb-8">
            We'd love to hear from you. Fill out the form and our team will get back to you as soon as possible.
          </p>
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid sm:grid-cols-2 gap-6">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name *"
                required
                class="input-field"
              />
              <input
                v-model="form.email"
                type="email"
                placeholder="Your Email *"
                required
                class="input-field"
              />
            </div>
            <div class="grid sm:grid-cols-2 gap-6">
              <input
                v-model="form.phone"
                type="tel"
                placeholder="Phone Number"
                class="input-field"
              />
              <input
                v-model="form.subject"
                type="text"
                placeholder="Subject"
                class="input-field"
              />
            </div>
            <textarea
              v-model="form.message"
              placeholder="Your Message *"
              required
              rows="6"
              class="textarea-field"
            ></textarea>
            <button
              type="submit"
              :disabled="isSubmitting"
              class="btn-primary disabled:opacity-50"
            >
              <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              <Send v-if="!isSubmitting" class="w-5 h-5 icon" />
            </button>
          </form>
        </div>

        <!-- Map -->
        <div class="rounded-2xl overflow-hidden shadow-lg h-[500px] lg:h-auto">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.563037741858!2d-0.1740832!3d5.6148378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNcKwMzYnNTMuNCJOIDDCsDEwJzI2LjciVw!5e0!3m2!1sen!2sgh!4v1625000000000!5m2!1sen!2sgh"
            width="100%" 
            height="100%" 
            style="border:0;" 
            allowfullscreen="" 
            loading="lazy"
            class="grayscale hover:grayscale-0 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="py-20 bg-qa-primary">
    <div class="container mx-auto px-4">
      <div class="section-title text-center max-w-2xl mx-auto">
        <span class="section-title__tagline">FAQ</span>
        <h2 class="section-title__title">
          Frequently Asked <span>Questions</span>
        </h2>
      </div>
      <div class="max-w-3xl mx-auto space-y-4">
        <div class="card">
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">
            What services do you offer?
          </h3>
          <p class="text-qa-gray text-sm">
            We offer comprehensive quality consultancy services including QMS implementation, food safety management, 
            regulatory affairs, training, and various ISO certification support.
          </p>
        </div>
        <div class="card">
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">
            How long does ISO certification take?
          </h3>
          <p class="text-qa-gray text-sm">
            The timeline varies depending on your organization's current state and the standard you're pursuing. 
            Typically, it takes 6-12 months to achieve certification with our guidance.
          </p>
        </div>
        <div class="card">
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">
            Do you provide training services?
          </h3>
          <p class="text-qa-gray text-sm">
            Yes, we offer comprehensive training programs on ISO standards, HACCP, food safety, 
            internal auditing, and more. Training can be customized to your organization's needs.
          </p>
        </div>
        <div class="card">
          <h3 class="text-lg font-serif font-bold text-qa-blue mb-2">
            What industries do you serve?
          </h3>
          <p class="text-qa-gray text-sm">
            We serve various industries including manufacturing, food & beverage, hospitality, 
            pharmaceuticals, cosmetics, and service organizations across Ghana and West Africa.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
