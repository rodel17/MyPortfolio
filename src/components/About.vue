<script setup>
import { education } from '../data/resume.js'
import PageSection from './PageSection.vue'
</script>

<template>
  <PageSection id="about" index="01" label="About">
    <h2 class="max-w-[24ch] text-[28px] font-semibold leading-tight tracking-tight sm:text-[32px]">
      From database schema to the <span class="accent-phrase">screen people use.</span>
    </h2>
    <div class="mt-6 space-y-5 text-[17px] leading-[1.75] text-muted">
      <p class="max-w-[64ch]">
        Since finishing my degree, I've moved between a government office, an ERP consultancy,
        and now a fintech-focused team — mostly building the parts of an application that have
        to work correctly the first time: <span class="text-ink">billing logic, payment gateways,
        and the database underneath them.</span>
      </p>
      <p class="max-w-[64ch]">
        I like projects where the backend has real constraints to design around, and I try to
        leave the front end just as considered as the API behind it.
      </p>
    </div>

    <div class="mt-8 flex items-center gap-4 rounded-xl border border-line bg-surface px-5 py-4">
      <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
        <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 9L12 4 2 9l10 5 10-5z" /><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" /></svg>
      </span>
      <div class="min-w-0">
        <p class="text-[15px] font-medium">{{ education.school }}</p>
        <p class="mt-0.5 font-mono text-xs text-faint">{{ education.years }}</p>
      </div>
    </div>
  </PageSection>
</template>
