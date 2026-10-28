<script setup>
import { ref } from 'vue'
import { profile } from '../data/resume.js'
import PageSection from './PageSection.vue'

const copied = ref(false)

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    copied.value = true
    setTimeout(() => (copied.value = false), 2000)
  } catch {
    window.location.href = `mailto:${profile.email}`
  }
}
</script>

<template>
  <PageSection id="contact" index="06" label="Contact">
    <div class="relative overflow-hidden rounded-2xl border border-accent/15 bg-accent-soft px-6 py-10 sm:px-10 sm:py-12">
      <div class="bg-dots pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="relative">
        <h2 class="text-[clamp(1.9rem,4vw,2.5rem)] font-semibold leading-tight tracking-tight">
          Let's work <span class="accent-phrase">together.</span>
        </h2>
        <p class="mt-4 max-w-[56ch] text-[17px] leading-[1.7] text-muted">
          Open to full-stack developer roles, especially work involving Laravel, Vue, or React.
          The fastest way to reach me is email.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a :href="`mailto:${profile.email}`" class="btn-primary">Email me</a>
          <button type="button" class="btn-secondary bg-surface" @click="copyEmail">
            {{ copied ? 'Copied!' : 'Copy email' }}
          </button>
        </div>
        <div class="mt-7 flex flex-wrap gap-x-7 gap-y-2 font-mono text-[13px] text-muted">
          <span class="break-all">{{ profile.email }}</span>
          <a :href="`tel:${profile.phone.replace(/-/g, '')}`" class="hover:text-ink">{{ profile.phone }}</a>
          <a :href="profile.githubUrl" target="_blank" rel="noopener" class="hover:text-ink">{{ profile.github }}</a>
        </div>
      </div>
    </div>
  </PageSection>
</template>
