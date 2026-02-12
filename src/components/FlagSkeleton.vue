<script setup lang="ts">
import { onBeforeMount } from 'vue'

defineProps<{ size: 'sm' | 'md' | 'lg' }>()

onBeforeMount(() => {
  const id = 'vue3-flag-skeleton-styles'
  if (typeof document !== 'undefined' && !document.getElementById(id)) {
    const style = document.createElement('style')
    style.id = id
    style.textContent = `
      .flag-skeleton {
        position: relative;
        overflow: hidden;
        background-color: oklch(0.88 0 0); 
        animation: flag-pulse-heavy 2s ease-in-out infinite;
      }

      .dark .flag-skeleton,
      :global(.dark) .flag-skeleton {
        background-color: oklch(0.32 0 0);
      }

      @keyframes flag-pulse-heavy {
        0%, 100% { opacity: 1; }
        50% { 
          opacity: 0.4;
        }
      }

      .flag-skeleton.size-sm { width: 16px; height: 12px; border-radius: 1px; }
      .flag-skeleton.size-md { width: 20px; height: 15px; border-radius: 1.5px; }
      .flag-skeleton.size-lg { width: 32px; height: 24px; border-radius: 2px; }
    `
    document.head.appendChild(style)
  }
})
</script>

<template>
  <div class="flag-skeleton" :class="[`size-${size}`]" />
</template>