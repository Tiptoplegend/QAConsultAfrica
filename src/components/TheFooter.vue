<script setup>
import { RouterLink } from 'vue-router'
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <footer class="relative bg-qa-blue text-white overflow-hidden">
    <!-- Main Footer -->
    <div class="py-24 relative z-10">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <!-- About Column -->
          <div class="lg:col-span-4">
            <RouterLink to="/" class="inline-block mb-10">
              <img 
                src="/images/Logo/QA Africa.png" 
                alt="QA Consult Africa" 
                class="h-16 w-auto brightness-0 invert"
              />
            </RouterLink>
            <p class="text-white/70 text-lg mb-10 leading-relaxed max-w-md">
              We are passionate about getting the output of manufactured processes right first time. 
              Quality of products defines competitive urge and our first response to consumer/customer needs is QUALITY.
            </p>
            <div class="flex gap-4">
              <a 
                href="https://web.facebook.com/qaconsultafrica" 
                target="_blank"
                class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-qa-orange hover:border-qa-orange transition-all duration-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a 
                href="https://www.linkedin.com/company/qaconsultafrica/" 
                target="_blank"
                class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-qa-orange hover:border-qa-orange transition-all duration-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a 
                href="https://x.com/qaconsultafrica" 
                target="_blank"
                class="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-qa-orange hover:border-qa-orange transition-all duration-500"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          <!-- Links and Info Container -->
          <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-12">
            <!-- Quick Links -->
            <div>
              <div class="mb-10">
                <h4 class="text-2xl font-serif font-black text-white">Quick Links</h4>
                <div class="w-12 h-0.5 bg-qa-orange mt-4"></div>
              </div>
              <ul class="space-y-4">
                <li>
                  <RouterLink to="/about" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    About Us
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Our Services
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/team" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    The Team
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/blog" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Blog
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/contact" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Contact
                  </RouterLink>
                </li>
              </ul>
            </div>

            <!-- Services -->
            <div>
              <div class="mb-10">
                <h4 class="text-2xl font-serif font-black text-white">Our Services</h4>
                <div class="w-12 h-0.5 bg-qa-orange mt-4"></div>
              </div>
              <ul class="space-y-4">
                <li>
                  <RouterLink to="/services/manufacturing" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Manufacturing
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/hospitality" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Hospitality
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/qms" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    QMS
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/regulatory-affairs" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Regulatory Affairs
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/services/training" class="text-white/70 hover:text-qa-orange transition-all font-bold flex items-center gap-2 group">
                    <div class="w-1.5 h-1.5 rounded-full bg-qa-orange opacity-0 group-hover:opacity-100 transition-all"></div>
                    Training
                  </RouterLink>
                </li>
              </ul>
            </div>

            <!-- Contact Info -->
            <div>
              <div class="mb-10">
                <h4 class="text-2xl font-serif font-black text-white">Official Info</h4>
                <div class="w-12 h-0.5 bg-qa-orange mt-4"></div>
              </div>
              <ul class="space-y-8">
                <li class="flex items-start gap-5 group">
                  <div class="w-12 h-12 rounded-full bg-qa-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-qa-orange transition-all duration-500">
                    <MapPin class="w-5 h-5 text-qa-orange group-hover:text-white" />
                  </div>
                  <span class="text-white/70 leading-relaxed font-medium">Hydraform Estates, Aviation Highway, Accra, Ghana</span>
                </li>
                <li class="flex items-start gap-5 group">
                  <div class="w-12 h-12 rounded-full bg-qa-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-qa-orange transition-all duration-500">
                    <Phone class="w-5 h-5 text-qa-orange group-hover:text-white" />
                  </div>
                  <div class="flex flex-col gap-1">
                    <a href="tel:+233244691674" class="text-white/70 hover:text-qa-orange transition-colors font-medium">
                      +233 244691674
                    </a>
                    <a href="tel:+233209996002" class="text-white/70 hover:text-qa-orange transition-colors font-medium">
                      +233 209996002
                    </a>
                  </div>
                </li>
                <li class="flex items-start gap-5 group">
                  <div class="w-12 h-12 rounded-full bg-qa-orange/10 flex items-center justify-center flex-shrink-0 group-hover:bg-qa-orange transition-all duration-500">
                    <Mail class="w-5 h-5 text-qa-orange group-hover:text-white" />
                  </div>
                  <a href="mailto:info@qaconsultafrica.com" class="text-white/70 hover:text-qa-orange transition-colors font-medium">
                    info@qaconsultafrica.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Footer -->
    <div class="bg-black/20 py-8 relative z-10 border-t border-white/5">
      <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <p class="text-white/50 text-sm font-medium">
            &copy; {{ new Date().getFullYear() }} <a href="#" class="text-white hover:text-qa-orange transition-colors">QA Consult Africa</a>. All Rights Reserved.
          </p>
          <ul class="flex items-center gap-8 text-sm font-bold uppercase tracking-widest">
            <li>
              <a href="#" class="text-white/50 hover:text-qa-orange transition-colors">Support</a>
            </li>
            <li>
              <a href="#" class="text-white/50 hover:text-qa-orange transition-colors">Terms</a>
            </li>
            <li>
              <a href="#" class="text-white/50 hover:text-qa-orange transition-colors">Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
