<script setup>
import { skills } from '../data/resume.js'
import PageSection from './PageSection.vue'

// stroke icon paths keyed by skill group name
const icons = {
  Frontend: 'M3 5h18v14H3z M3 9h18 M7 7h.01',
  Backend: 'M4 4h16v6H4z M4 14h16v6H4z M8 7h.01 M8 17h.01',
  Database: 'M12 3c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3z M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6 M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6',
  'Version control': 'M6 3v12 M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z M18 9a9 9 0 0 1-9 9',
  DevOps: 'M7 18a4 4 0 0 1-.5-7.97A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z',
  Tools: 'M4 17l6-5-6-5 M12 19h8',
  'AI tools': 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z',
}
const fallbackIcon = 'M12 3v18 M3 12h18'
</script>

<template>
  <PageSection id="skills" index="03" label="Skills">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4">
      <div
        v-for="group in skills"
        :key="group.group"
        class="rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent/30"
      >
        <div class="flex items-center gap-3">
          <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <svg class="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path :d="icons[group.group] || fallbackIcon" />
            </svg>
          </span>
          <h3 class="text-[15px] font-semibold">{{ group.group }}</h3>
        </div>
        <ul class="mt-4 flex flex-wrap gap-1.5">
          <li v-for="item in group.items" :key="item" class="rounded-full border border-line bg-paper px-2.5 py-1 text-[13px] text-muted">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </PageSection>
</template>
