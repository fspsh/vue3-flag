<script setup lang="ts">
import { computed, useId } from 'vue'
import type { BaseFlagProps } from '../types'
import type { CSSProperties } from 'vue'

const props = withDefaults(defineProps<BaseFlagProps>(), {
  size: 'md',
  gradient: 'none',
  hasShadow: false,
  hasBorder: true,
  hasBorderRadius: true
})

const sizes = {
  sm: { w: 16, h: 12, r: 1 },
  md: { w: 20, h: 15, r: 1.5 },
  lg: { w: 32, h: 24, r: 2 }
} as const

const shadows = {
  sm: 'drop-shadow(0 0 1px rgba(0,0,0,0.10))',
  md: 'drop-shadow(0 1px 2px rgba(0,0,0,0.10))',
  lg: 'drop-shadow(0 2px 3px rgba(0,0,0,0.10))'
}

const id = useId()
const cfg = computed(() => sizes[props.size])
const radius = computed(() => props.hasBorderRadius ? cfg.value.r : 0)

const gradientStyles: Record<string, string> = {
  'top-down': 'linear-gradient(0deg, rgba(0,0,0,0.30) 2%, rgba(255,255,255,0.70) 100%)',
  'real-linear': 'linear-gradient(45deg, rgba(0,0,0,0.20) 0%, rgba(39,39,39,0.22) 11%, rgba(255,255,255,0.30) 27%, rgba(0,0,0,0.24) 41%, rgba(0,0,0,0.55) 52%, rgba(255,255,255,0.26) 63%, rgba(0,0,0,0.27) 74%, rgba(255,255,255,0.30) 100%)',
  'real-circular': 'radial-gradient(50% 36%, hsla(0, 0%, 100%, .3) 0, rgba(0, 0, 0, .24) 11%, rgba(0, 0, 0, .55) 17%, hsla(0, 0%, 100%, .26) 22%, rgba(0, 0, 0, .17) 27%, hsla(0, 0%, 100%, .28) 31%, hsla(0, 0%, 100%, 0) 37%) 50% calc(50% - 8px) / 600% 600%, radial-gradient(50% 123%, hsla(0, 0%, 100%, .3) 0, rgba(0, 0, 0, .24) 48%, rgba(0, 0, 0, .55) 61%, hsla(0, 0%, 100%, .26) 72%, rgba(0, 0, 0, .17) 80%, hsla(0, 0%, 100%, .28) 88%, hsla(0, 0%, 100%, .3) 100%) 50% calc(50% - 8px) / 600% 600%'
}

const rootStyle = computed((): CSSProperties => ({
  display: 'inline-block',
  verticalAlign: 'middle',
  backfaceVisibility: 'hidden',
  transform: 'translateZ(0)',
  imageRendering: '-webkit-optimize-contrast',
  filter: props.hasShadow ? (shadows[props.size] || shadows.md) : undefined
}))

const contentStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  overflow: 'hidden'
}

const overlayStyle = computed((): CSSProperties => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  mixBlendMode: 'overlay',
  pointerEvents: 'none',
  backgroundImage: gradientStyles[props.gradient]
}))

const slotSvgStyle: CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'block'
}
</script>

<template>
  <svg
    :width="cfg.w"
    :height="cfg.h"
    :viewBox="`0 0 ${cfg.w} ${cfg.h}`"
    xmlns="http://www.w3.org/2000/svg"
    :style="rootStyle"
  >
    <defs>
      <clipPath :id="`clip-${id}`">
        <rect
          x="0"
          y="0"
          :width="cfg.w"
          :height="cfg.h"
          :rx="radius"
          :ry="radius"
        />
      </clipPath>
    </defs>

    <g :clip-path="`url(#clip-${id})`">
      <rect
        x="0"
        y="0"
        :width="cfg.w"
        :height="cfg.h"
        fill="white"
      />

      <foreignObject x="0" y="0" :width="cfg.w" :height="cfg.h">
        <div xmlns="http://www.w3.org/1999/xhtml" :style="contentStyle">
          <div :style="slotSvgStyle">
            <slot />
          </div>
          
          <div 
            v-if="gradient !== 'none'" 
            :style="overlayStyle"
          ></div>
        </div>
      </foreignObject>

      <rect
        x="0"
        y="0"
        :width="cfg.w"
        :height="cfg.h"
        fill="black"
        fill-opacity="0.001"
        style="mix-blend-mode: overlay; pointer-events: none;"
      />
      
      <rect
        v-if="hasBorder"
        x="0.5"
        y="0.5"
        :width="cfg.w - 1"
        :height="cfg.h - 1"
        :rx="radius > 0 ? radius - 0.2 : 0"
        :ry="radius > 0 ? radius - 0.2 : 0"
        fill="none"
        stroke="black"
        stroke-opacity="0.5"
        stroke-width="0.8"
        style="mix-blend-mode: overlay; pointer-events: none; shape-rendering: geometricPrecision;"
      />
    </g>
  </svg>
</template>