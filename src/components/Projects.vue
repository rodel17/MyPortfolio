<script setup>
import { reactive } from 'vue'
import { projects } from '../data/resume.js'
import PageSection from './PageSection.vue'
import Lightbox from './Lightbox.vue'

const viewer = reactive({ images: [], index: null })

function openViewer(project) {
  viewer.images = project.screenshots
  viewer.index = 0
}
</script>

<template>
  <PageSection id="work" index="04" label="Work">
    <div class="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-6">
      <article
        v-for="p in projects"
        :key="p.title"
        class="flex flex-col overflow-hidden rounded-xl border border-line bg-surface transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
      >
        <!-- screenshot sits on a tinted, dotted backdrop like a framed print -->
        <button
          v-if="p.screenshots?.length"
          type="button"
          class="group relative block overflow-hidden border-b border-line bg-accent-soft px-6 pt-6"
          :aria-label="`View ${p.title} screenshots`"
          @click="openViewer(p)"
        >
          <div class="bg-dots pointer-events-none absolute inset-0" aria-hidden="true"></div>
          <img
            :src="p.screenshots[0]"
            :alt="`${p.title} screenshot`"
            class="relative aspect-[16/10] w-full rounded-t-lg border border-b-0 border-line object-cover object-top shadow-lg shadow-ink/10 transition-transform duration-500 group-hover:-translate-y-1"
          />
          <span
            v-if="p.screenshots.length > 1"
            class="absolute bottom-3 right-3 rounded-full border border-line bg-surface/95 px-2.5 py-1 font-mono text-[11px] text-muted shadow-sm"
          >
            {{ p.screenshots.length }} screenshots
          </span>
        </button>
        <div v-else class="flex aspect-[16/10] items-center justify-center border-b border-dashed border-line-strong font-mono text-xs text-faint">
          screenshots go in /public/projects/
        </div>

        <div class="flex grow flex-col gap-2.5 p-6">
          <h3 class="text-lg font-semibold leading-snug">{{ p.title }}</h3>
          <dl class="grid grid-cols-[auto_1fr] items-center gap-x-3 gap-y-1.5 text-[13px]">
            <dt class="font-mono text-[11px] uppercase tracking-wider text-faint">Role</dt>
            <dd class="text-muted">{{ p.role }}</dd>
            <template v-if="p.client">
              <dt class="font-mono text-[11px] uppercase tracking-wider text-faint">Client</dt>
              <dd class="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-muted">
                {{ p.client }}
                <span v-if="p.inUse" class="inline-flex items-center gap-1.5 rounded-full bg-ok/10 px-2 py-0.5 font-mono text-[11px] text-[#2B7552]">
                  <span class="h-1.5 w-1.5 rounded-full bg-ok"></span>
                  In active use
                </span>
              </dd>
            </template>
          </dl>
          <p class="text-[15px] leading-relaxed text-muted">{{ p.description }}</p>

          <div v-if="p.stack?.length" class="mt-2">
            <p class="font-mono text-[11px] uppercase tracking-wider text-faint">Tech stack</p>
            <ul class="mt-2 flex flex-wrap gap-1.5">
              <li v-for="tech in p.stack" :key="tech" class="rounded-md border border-line bg-paper px-2 py-0.5 font-mono text-xs text-muted">
                {{ tech }}
              </li>
            </ul>
          </div>
          <div class="mt-auto flex flex-wrap gap-5 pt-3 text-sm font-medium">
            <a v-if="p.siteUrl" :href="p.siteUrl" target="_blank" rel="noopener" class="text-accent hover:text-accent-dark">Live site ↗</a>
            <a :href="p.url" target="_blank" rel="noopener" class="text-muted hover:text-ink">Source ↗</a>
          </div>
        </div>
      </article>
    </div>

    <Lightbox :images="viewer.images" v-model:index="viewer.index" alt="Project screenshot" />
  </PageSection>
</template>
