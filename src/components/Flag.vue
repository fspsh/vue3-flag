<script setup lang="ts">
import { computed, defineAsyncComponent, markRaw } from 'vue'
import FlagSkeleton from './FlagSkeleton.vue'
import FlagFrame from './FlagFrame.vue'
import { lazyRegistry } from '../runtime/lazy-registry'
import { normalizeCode } from '../runtime/normalize'
import type { FlagCode, BaseFlagProps } from '../types'

interface Props extends BaseFlagProps {
  code: FlagCode | string
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  gradient: 'none',
  hasShadow: false,
  hasBorder: true,
  hasBorderRadius: true
})

const componentCache = new Map<string, any>()
const normalized = computed(() => normalizeCode(props.code))

const FlagComponent = computed(() => {
  const code = normalized.value
  const loader = lazyRegistry[code]
  if (!loader) return null

  if (!componentCache.has(code)) {
    componentCache.set(
      code,
      markRaw(
        defineAsyncComponent({
          loader,
          loadingComponent: FlagSkeleton,
          suspensible: false
        })
      )
    )
  }
  return componentCache.get(code)
})
</script>

<template>
  <component
    v-if="FlagComponent"
    :is="FlagComponent"
    v-bind="props"
  />

  <FlagFrame
    v-else
    v-bind="props"
  >
    <FlagSkeleton :size="size" />
  </FlagFrame>
</template>