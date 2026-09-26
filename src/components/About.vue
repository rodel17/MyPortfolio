<script setup>
import { education } from '../data/resume.js'
</script>

<template>
  <section class="mt-16">
    <h2 class="text-xl font-semibold">About</h2>
    <div class="mt-4 border-t border-blueprint-line pt-5">
      <p class="max-w-[62ch] text-[15px] leading-relaxed text-ink/80">
        Since finishing my degree, I've moved between a government office, an ERP consultancy,
        and now a fintech-focused team — mostly building the parts of an application that have
        to work correctly the first time: billing logic, payment gateways, and the database
        underneath them. I like projects where the backend has real constraints to design around,
        and I try to leave the front end just as considered as the API behind it.
      </p>
      <div class="mt-6 flex items-baseline justify-between border-t border-dashed border-blueprint-line pt-4">
        <div>
          <p class="text-sm font-medium">{{ education.school }}</p>
          <p class="font-mono text-xs text-ink/50">{{ education.years }}</p>
        </div>
        <p class="font-mono text-sm text-signal">{{ education.note }}</p>
      </div>
    </div>
  </section>
</template>
