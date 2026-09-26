<script setup>
import { skills } from '../data/resume.js'
</script>

<template>
  <section class="mt-16">
    <h2 class="text-xl font-semibold">Skills</h2>
    <div class="mt-4 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-blueprint-line pt-5 sm:grid-cols-2">
      <div v-for="group in skills" :key="group.group">
        <p class="text-sm font-medium text-ink">{{ group.group }}</p>
        <p class="mt-1.5 font-mono text-[13px] leading-relaxed text-ink/60">
          {{ group.items.join(', ') }}
        </p>
      </div>
    </div>
  </section>
</template>
