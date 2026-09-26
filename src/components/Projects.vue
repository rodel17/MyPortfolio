<script setup>
import { ref } from 'vue'
import { projects } from '../data/resume.js'

const activeImage = ref(null)

function openImage(src, event) {
  event.preventDefault()
  event.stopPropagation()
  activeImage.value = src
}
function closeImage() {
  activeImage.value = null
}
</script>

<template>
  <section class="mt-16">
    <h2 class="text-xl font-semibold">Featured projects</h2>
    <div class="mt-4 border-t border-blueprint-line">
      <div
        v-for="p in projects"
        :key="p.title"
        class="border-b border-blueprint-line py-6"
      >
        <div
          v-if="p.screenshots && p.screenshots.length"
          class="grid gap-2"
          :class="p.screenshots.length === 1 ? 'grid-cols-1' : 'grid-cols-2 sm:grid-cols-3'"
        >
          <button
            v-for="(src, i) in p.screenshots"
            :key="i"
            type="button"
            @click="openImage(src, $event)"
            class="aspect-[16/9] w-full overflow-hidden border border-blueprint-line bg-white"
          >
            <img :src="src" :alt="`${p.title} screenshot ${i + 1}`" class="h-full w-full object-cover transition-transform hover:scale-[1.03]" />
          </button>
        </div>
        <div
          v-else
          class="flex aspect-[16/9] w-full flex-col items-center justify-center gap-1 border border-dashed border-blueprint-line text-center"
        >
          <span class="font-mono text-xs text-ink/40">project screenshots</span>
          <span class="font-mono text-[11px] text-ink/30">/public/projects/</span>
        </div>

        <a :href="p.url" target="_blank" rel="noopener" class="group mt-4 block">
          <h3 class="text-lg font-medium group-hover:text-blueprint">{{ p.title }}</h3>
          <p class="mt-1 text-sm text-ink/60">{{ p.role }}</p>
          <p class="mt-2 max-w-[60ch] text-[15px] leading-relaxed text-ink/80">{{ p.description }}</p>
          <p class="mt-3 font-mono text-xs text-blueprint">{{ p.label }}</p>
        </a>

        <a
          v-if="p.siteUrl"
          :href="p.siteUrl"
          target="_blank"
          rel="noopener"
          @click.stop
          class="mt-2 inline-block font-mono text-xs text-signal hover:text-blueprint"
        >
          View live site →
        </a>
      </div>
    </div>

    <div
      v-if="activeImage"
      @click="closeImage"
      class="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-6"
    >
      <button
        @click="closeImage"
        aria-label="Close image"
        class="absolute right-6 top-6 flex h-9 w-9 items-center justify-center border border-paper/40 text-paper hover:border-paper"
      >
        ✕
      </button>
      <img :src="activeImage" alt="Enlarged screenshot" class="max-h-full max-w-full object-contain" />
    </div>
  </section>
</template>