<script setup>
import { ref } from 'vue'
import { certifications } from '../data/resume.js'
import PageSection from './PageSection.vue'
import Lightbox from './Lightbox.vue'

const images = certifications.filter((c) => c.image).map((c) => c.image)
const viewerIndex = ref(null)
</script>

<template>
  <PageSection id="certifications" index="05" label="Certifications">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-6">
      <div v-for="c in certifications" :key="c.title" class="flex flex-col gap-3">
        <button
          v-if="c.image"
          type="button"
          class="overflow-hidden rounded-lg border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/5"
          :aria-label="`View ${c.title} certificate`"
          @click="viewerIndex = images.indexOf(c.image)"
        >
          <img :src="c.image" :alt="c.title" loading="lazy" class="aspect-[4/3] w-full object-cover transition-opacity hover:opacity-90" />
        </button>
        <div v-else class="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-line-strong font-mono text-xs text-faint">
          /public/certifications/
        </div>
        <div>
          <p class="text-[15px] font-medium">{{ c.title }}</p>
          <p class="mt-1 font-mono text-xs text-faint">{{ c.issuer }} · {{ c.date }}</p>
        </div>
      </div>
    </div>

    <Lightbox :images="images" v-model:index="viewerIndex" alt="Certificate" />
  </PageSection>
</template>
