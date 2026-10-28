<script setup>
import { experience } from '../data/resume.js'
import PageSection from './PageSection.vue'
</script>

<template>
  <PageSection id="experience" index="02" label="Experience">
    <!-- timeline: the left border is the rail, each job gets a dot on it -->
    <div class="ml-1 space-y-10 border-l border-line">
      <article
        v-for="job in experience"
        :key="job.title + job.years"
        class="flex flex-wrap gap-x-8 gap-y-2 pl-7"
      >
        <div class="relative flex-[0_0_140px]">
          <span
            class="absolute -left-[32px] top-[7px] h-[9px] w-[9px] rounded-full"
            :class="job.years.includes('Present') ? 'bg-accent ring-4 ring-accent/15' : 'border-2 border-line-strong bg-paper'"
            aria-hidden="true"
          ></span>
          <p class="mt-0.5 font-mono text-[13px]" :class="job.years.includes('Present') ? 'text-accent' : 'text-faint'">
            {{ job.years }}
          </p>
        </div>
        <div class="min-w-0 flex-[1_1_400px]">
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h3 class="text-lg font-semibold">{{ job.title }}</h3>
            <span
              v-if="job.years.includes('Present')"
              class="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-[11px] text-accent"
            >
              Current
            </span>
          </div>
          <p class="mt-0.5 text-[15px] text-muted">{{ job.org }}</p>
          <ul class="mt-3.5 list-disc space-y-2 pl-[18px] text-[15px] leading-relaxed text-muted marker:text-accent/50">
            <li v-for="b in job.bullets" :key="b">{{ b }}</li>
          </ul>
          <p class="mt-3.5 font-mono text-xs text-faint">{{ job.stack.split(', ').join(' · ') }}</p>
        </div>
      </article>
    </div>
  </PageSection>
</template>
