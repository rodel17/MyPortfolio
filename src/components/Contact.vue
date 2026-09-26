<script setup>
import { profile } from '../data/resume.js'

const year = new Date().getFullYear()
</script>

<template>
  <section class="mt-16 border-t border-blueprint-line pt-8">
    <h2 class="text-xl font-semibold">Get in touch</h2>
    <p class="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink/80">
      Open to junior and mid-level developer roles, especially full-stack work involving
      Laravel, Vue, or React. The fastest way to reach me is email.
    </p>
    <div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
      <a :href="`mailto:${profile.email}`" class="break-all text-blueprint hover:text-blueprint-dark">{{ profile.email }}</a>
      <span class="text-ink/70">{{ profile.phone }}</span>
      <a :href="profile.githubUrl" target="_blank" rel="noopener" class="text-blueprint hover:text-blueprint-dark">{{ profile.github }}</a>
    </div>
    <p class="mt-10 font-mono text-xs text-ink/35">© {{ year }} {{ profile.name }}</p>
  </section>
</template>
