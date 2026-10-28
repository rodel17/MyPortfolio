<script setup>
import { profile } from '../data/resume.js'

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'certifications', label: 'Certifications' },
]

const initials = profile.name.split(' ').map((part) => part[0]).join('')
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
    <nav class="mx-auto flex min-h-[64px] max-w-content items-center justify-between gap-6 px-6 sm:px-8">
      <a href="#top" class="flex shrink-0 items-center gap-2.5 text-[15px] font-semibold text-ink">
        <span class="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-serif text-[15px] italic text-surface">
          {{ initials }}
        </span>
        <span class="hidden sm:inline">{{ profile.name }}</span>
      </a>
      <div class="-mr-2 flex items-center gap-1 overflow-x-auto text-sm text-muted sm:gap-4">
        <a v-for="link in links" :key="link.id" :href="`#${link.id}`" class="shrink-0 px-2 py-2 hover:text-ink">
          {{ link.label }}
        </a>
        <a href="#contact" class="shrink-0 rounded-full bg-accent-soft px-3.5 py-1.5 font-medium text-accent hover:bg-accent hover:text-surface">
          Contact
        </a>
      </div>
    </nav>
  </header>
</template>
