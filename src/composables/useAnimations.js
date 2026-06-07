import { onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollAnimations() {
  onMounted(() => {
    // Fade in up animation
    gsap.utils.toArray('.animate-fade-up').forEach((element) => {
      gsap.fromTo(element, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Fade in left animation
    gsap.utils.toArray('.animate-fade-left').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Fade in right animation
    gsap.utils.toArray('.animate-fade-right').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Scale up animation
    gsap.utils.toArray('.animate-scale').forEach((element) => {
      gsap.fromTo(element,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })

    // Stagger animation for children
    gsap.utils.toArray('.animate-stagger').forEach((container) => {
      const children = container.children
      gsap.fromTo(children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      )
    })
  })

  onUnmounted(() => {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
  })
}

export function useCountAnimation(targetRef, endValue, duration = 2000) {
  let currentValue = 0
  let animationFrame = null

  const animate = () => {
    const startTime = performance.now()
    
    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      currentValue = Math.floor(easeOut * endValue)
      
      if (targetRef.value) {
        targetRef.value = currentValue
      }
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step)
      }
    }
    
    animationFrame = requestAnimationFrame(step)
  }

  onMounted(() => {
    animate()
  })

  onUnmounted(() => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame)
    }
  })

  return { currentValue }
}

export function useParallax(elementRef, speed = 0.5) {
  const handleScroll = () => {
    if (elementRef.value) {
      const scrollY = window.scrollY
      const offset = scrollY * speed
      elementRef.value.style.transform = `translateY(${offset}px)`
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
}
