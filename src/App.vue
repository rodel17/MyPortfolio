<script setup>
import NavBar from './components/NavBar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import Contact from './components/Contact.vue'
import { profile } from './data/resume.js'

const year = new Date().getFullYear()
</script>

<template>
  <div class="min-h-screen bg-paper text-ink">
    <NavBar />
    <main id="top" class="mx-auto max-w-content px-6 sm:px-8">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </main>
    <footer class="border-t border-line">
      <div class="mx-auto flex max-w-content flex-wrap justify-between gap-3 px-6 py-7 font-mono text-xs text-faint sm:px-8">
        <span>© {{ year }} {{ profile.name }}</span>
        <a href="#top" class="hover:text-ink">Back to top ↑</a>
      </div>
    </footer>
  </div>
</template>
