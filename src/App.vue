<script setup>
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import Contact from './components/Contact.vue'
</script>

<template>
  <main class="min-h-screen bg-paper text-ink">
    <div class="mx-auto max-w-content px-6 py-16 sm:px-10">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  </main>
</template>
