<script setup>
import { profile, experience, projects } from '../data/resume.js'

const firstYear = Math.min(...experience.map((job) => parseInt(job.years, 10)))

const stats = [
  { value: `${new Date().getFullYear() - firstYear}+`, label: 'Years of professional experience' },
  { value: String(experience.length), label: 'Teams across government, ERP and fintech' },
  { value: String(projects.filter((p) => p.siteUrl).length), label: 'Featured projects live in production' },
]
</script>

<template>
  <section class="relative pb-20 pt-20 sm:pt-24">
    <div class="bg-dots pointer-events-none absolute -right-6 top-0 h-[420px] w-[70%] sm:-right-8" aria-hidden="true"></div>

    <div class="relative">
      <p class="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 font-mono text-xs text-muted shadow-sm">
        <span v-if="profile.available" class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-40"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-ok"></span>
        </span>
        <span v-if="profile.available">Open to new roles ·</span>
        {{ profile.location }}
      </p>

      <h1 class="mt-7 text-[clamp(2.5rem,6vw,3.75rem)] font-semibold leading-[1.05] tracking-tight">
        {{ profile.name }}
      </h1>
      <p class="mt-4 max-w-[30ch] text-[clamp(1.35rem,2.6vw,1.75rem)] leading-snug text-muted">
        {{ profile.role }} building payment systems and ERP tools that
        <span class="accent-phrase">work the first time.</span>
      </p>
      <p class="mt-7 max-w-[60ch] text-[17px] leading-[1.7] text-muted">{{ profile.summary }}</p>

      <div class="mt-9 flex flex-wrap gap-3">
        <a :href="`mailto:${profile.email}`" class="btn-primary gap-2">
          Email me
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </a>
        <a href="#work" class="btn-secondary bg-surface">View work</a>
        <a :href="profile.githubUrl" target="_blank" rel="noopener" class="btn-secondary gap-2 bg-surface">
          <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.76 2.69 1.25 3.35.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.7 5.39-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" /></svg>
          GitHub
        </a>
      </div>

      <dl class="mt-16 grid gap-3 sm:grid-cols-3">
        <div v-for="s in stats" :key="s.label" class="flex flex-col-reverse gap-1 rounded-xl border border-line bg-surface px-5 py-4">
          <dt class="text-[13px] leading-snug text-faint">{{ s.label }}</dt>
          <dd class="font-serif text-4xl text-accent">{{ s.value }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
