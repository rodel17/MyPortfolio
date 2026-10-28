import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Fades an element up the first time it scrolls into view.
// Optional value is a delay in ms, e.g. v-reveal="120".
const reveal = {
  mounted(el, { value: delay = 0 }) {
    if (reduceMotion || !('IntersectionObserver' in window)) return
    el.classList.add('reveal')
    el.style.transitionDelay = `${delay}ms`
    el._revealObserver = new IntersectionObserver(
      ([entry], observer) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        el.classList.add('is-visible')
        // hand transitions back to the element's own classes (hover effects etc.)
        setTimeout(() => {
          el.classList.remove('reveal', 'is-visible')
          el.style.transitionDelay = ''
        }, delay + 700)
      },
      { threshold: 0.12 }
    )
    el._revealObserver.observe(el)
  },
  unmounted(el) {
    el._revealObserver?.disconnect()
  },
}

createApp(App).directive('reveal', reveal).mount('#app')
