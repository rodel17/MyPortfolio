<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { certifications } from '../data/resume.js'

const itemsPerView = 3
const totalPages = Math.max(1, Math.ceil(certifications.length / itemsPerView))

const pages = computed(() => {
  const chunks = []
  for (let i = 0; i < certifications.length; i += itemsPerView) {
    chunks.push(certifications.slice(i, i + itemsPerView))
  }
  return chunks
})

const current = ref(0)
let timer = null

function next() {
  current.value = (current.value + 1) % totalPages
}
function prev() {
  current.value = (current.value - 1 + totalPages) % totalPages
}
function goTo(i) {
  current.value = i
}

function startAutoplay() {
  stopAutoplay()
  if (totalPages > 1) timer = setInterval(next, 4000)
}
function stopAutoplay() {
  if (timer) clearInterval(timer)
}

onMounted(startAutoplay)
onUnmounted(stopAutoplay)

const activeImage = ref(null)
function openImage(src) {
  activeImage.value = src
}
function closeImage() {
  activeImage.value = null
}
</script>

<template>
  <section class="mt-16">
    <h2 class="text-xl font-semibold">Certifications</h2>
    <div class="mt-4 border-t border-blueprint-line pt-5">
      <div class="relative" @mouseenter="stopAutoplay" @mouseleave="startAutoplay">
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-out"
            :style="{ transform: `translateX(-${current * 100}%)` }"
          >
            <div v-for="(page, pIndex) in pages" :key="pIndex" class="grid w-full shrink-0 grid-cols-1 gap-5 sm:grid-cols-3">
              <div v-for="c in page" :key="c.title">
                <button
                  v-if="c.image"
                  type="button"
                  @click="openImage(c.image)"
                  class="aspect-[4/3] w-full overflow-hidden border border-blueprint-line bg-white"
                >
                  <img :src="c.image" :alt="c.title" class="h-full w-full object-cover transition-transform hover:scale-[1.03]" />
                </button>
                <div
                  v-else
                  class="flex aspect-[4/3] w-full flex-col items-center justify-center gap-1 border border-dashed border-blueprint-line text-center"
                >
                  <span class="font-mono text-xs text-ink/40">certificate image</span>
                  <span class="font-mono text-[11px] text-ink/30">/public/certifications/</span>
                </div>
                <p class="mt-3 text-sm font-medium">{{ c.title }}</p>
                <p class="font-mono text-xs text-ink/50">{{ c.issuer }}, {{ c.date }}</p>
              </div>
            </div>
          </div>
        </div>

        <button
          v-if="totalPages > 1"
          @click="prev"
          aria-label="Previous certificates"
          class="absolute left-0 top-[38%] -translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center border border-blueprint-line bg-paper text-ink/60 hover:text-blueprint"
        >
          ‹
        </button>
        <button
          v-if="totalPages > 1"
          @click="next"
          aria-label="Next certificates"
          class="absolute right-0 top-[38%] translate-x-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center border border-blueprint-line bg-paper text-ink/60 hover:text-blueprint"
        >
          ›
        </button>

        <div v-if="totalPages > 1" class="mt-4 flex justify-center gap-2">
          <button
            v-for="(page, i) in pages"
            :key="'dot-' + i"
            @click="goTo(i)"
            :aria-label="`Go to page ${i + 1}`"
            class="h-1.5 w-1.5 rounded-full"
            :class="i === current ? 'bg-blueprint' : 'bg-blueprint-line'"
          ></button>
        </div>
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
      <img :src="activeImage" alt="Enlarged certificate" class="max-h-full max-w-full object-contain" />
    </div>
  </section>
</template>