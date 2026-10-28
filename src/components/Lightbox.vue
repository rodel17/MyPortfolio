<script setup>
import { computed, watch, onUnmounted } from 'vue'

// Full-screen image viewer. Open it by setting v-model:index to a number, close with null.
const props = defineProps({
  images: { type: Array, default: () => [] },
  index: { type: Number, default: null },
  alt: { type: String, default: 'Enlarged image' },
})
const emit = defineEmits(['update:index'])

const isOpen = computed(() => props.index !== null && props.images.length > 0)

function close() {
  emit('update:index', null)
}
function step(delta) {
  emit('update:index', (props.index + delta + props.images.length) % props.images.length)
}
function onKey(e) {
  if (e.key === 'Escape') close()
  else if (e.key === 'ArrowRight') step(1)
  else if (e.key === 'ArrowLeft') step(-1)
}

watch(isOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-150"
      enter-from-class="opacity-0"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-4 backdrop-blur-sm sm:p-12"
        role="dialog"
        aria-modal="true"
        @click.self="close"
      >
        <img
          :src="images[index]"
          :alt="`${alt} ${index + 1}`"
          class="max-h-full max-w-full rounded-lg border border-line object-contain shadow-2xl"
        />

        <button
          type="button"
          aria-label="Close"
          class="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink"
          @click="close"
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>

        <template v-if="images.length > 1">
          <button
            type="button"
            aria-label="Previous image"
            class="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink sm:left-6"
            @click="step(-1)"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M15 6l-6 6 6 6" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next image"
            class="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-surface text-muted hover:text-ink sm:right-6"
            @click="step(1)"
          >
            <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <p class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted">
            {{ index + 1 }} / {{ images.length }}
          </p>
        </template>
      </div>
    </Transition>
  </Teleport>
</template>
