<script setup>
import { profile } from '../data/resume.js'
</script>

<template>
  <header class="border border-blueprint-line">
    <div class="border-b border-blueprint-line p-6 sm:p-8">
      <h1 class="text-4xl font-semibold tracking-tight sm:text-5xl">{{ profile.name }}</h1>
      <p class="mt-2 font-mono text-sm text-blueprint sm:text-base">{{ profile.role }}</p>
      <p class="mt-5 max-w-[42ch] text-[15px] leading-relaxed text-ink/80">{{ profile.summary }}</p>
    </div>

    <dl class="grid grid-cols-2 sm:grid-cols-4">
      <div class="border-r border-blueprint-line p-4 sm:p-5">
        <dt class="font-mono text-xs text-ink/50">Location</dt>
        <dd class="mt-1 text-sm">{{ profile.location }}</dd>
      </div>
      <div class="border-r border-blueprint-line p-4 sm:p-5">
        <dt class="font-mono text-xs text-ink/50">Email</dt>
        <dd class="mt-1 break-words text-sm">
          <a :href="`mailto:${profile.email}`" class="hover:text-blueprint">{{ profile.email }}</a>
        </dd>
      </div>
      <div class="border-r border-t border-blueprint-line p-4 sm:border-t-0 sm:p-5">
        <dt class="font-mono text-xs text-ink/50">Phone</dt>
        <dd class="mt-1 text-sm">{{ profile.phone }}</dd>
      </div>
      <div class="border-t border-blueprint-line p-4 sm:border-t-0 sm:p-5">
        <dt class="font-mono text-xs text-ink/50">GitHub</dt>
        <dd class="mt-1 text-sm">
          <a :href="profile.githubUrl" target="_blank" rel="noopener" class="hover:text-blueprint">{{ profile.github }}</a>
        </dd>
      </div>
    </dl>
  </header>
</template>
