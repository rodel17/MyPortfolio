<script setup>
import { experience } from '../data/resume.js'
</script>

<template>
  <section class="mt-16">
    <h2 class="text-xl font-semibold">Experience</h2>
    <div class="mt-4 border-t border-blueprint-line"></div>

    <ol class="relative">
      <!-- single continuous rail -->
      <div
        class="absolute left-0 top-8 bottom-8 w-px -translate-x-1/2 bg-blueprint-line"
        aria-hidden="true"
      ></div>

      <li
        v-for="job in experience"
        :key="job.title + job.years"
        class="relative border-b border-blueprint-line py-7 pl-6 last:border-b-0 sm:pl-8"
      >
        <span
          class="absolute left-0 top-8 h-2 w-2 -translate-x-1/2 rounded-full bg-blueprint"
          aria-hidden="true"
        ></span>

        <p class="font-mono text-xs text-blueprint">{{ job.years }}</p>
        <h3 class="mt-1 text-lg font-medium">{{ job.title }}</h3>
        <p class="text-sm text-ink/60">{{ job.org }}</p>

        <ul class="mt-3 space-y-1.5">
          <li v-for="b in job.bullets" :key="b" class="flex gap-2 text-[15px] leading-snug text-ink/80">
            <span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30"></span>
            <span>{{ b }}</span>
          </li>
        </ul>

        <p class="mt-3 font-mono text-xs text-ink/45">{{ job.stack }}</p>
      </li>
    </ol>
  </section>
</template>