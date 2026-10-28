<script setup>
// Section shell: small label on the left (sticks while you scroll on desktop), content on the right.
defineProps({
  id: { type: String, required: true },
  index: { type: String, required: true },
  label: { type: String, required: true },
})
</script>

<template>
  <section :id="id" class="flex scroll-mt-16 flex-wrap gap-x-12 gap-y-6 border-t border-line py-20">
    <div class="flex-[1_1_160px] sm:max-w-[200px]">
      <p class="flex items-center gap-2 font-mono text-[13px] lg:sticky lg:top-24">
        <span class="text-accent">{{ index }}</span>
        <span class="h-px w-5 bg-line-strong"></span>
        <span class="text-ink">{{ label }}</span>
      </p>
    </div>
    <div v-reveal class="min-w-0 flex-[999_1_560px]">
      <slot />
    </div>
  </section>
</template>
