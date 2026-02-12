import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CN_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M3.557 4.878 1.61 6.403l.744-2.307-1.299-1.2 1.758-.065.744-1.857.744 1.857h1.754L4.76 4.096l.59 2.307zM7.508 3.086l-.817.493.187-.962-.68-.72.92-.04.39-.898.39.899h.92l-.68.759.205.962z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m8.508 5.086-.817.493.187-.962-.68-.72.92-.04.39-.898.39.899h.92l-.68.759.205.962z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m7.508 7.086-.817.493.187-.962-.68-.72.92-.04.39-.898.39.899h.92l-.68.759.205.962z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m5.508 8.086-.817.493.187-.962-.68-.72.92-.04.39-.898.39.899h.92l-.68.759.205.962z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CN_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CN_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M4.446 6.097 2.013 8.004l.93-2.884-1.624-1.5 2.198-.08.93-2.322.929 2.321h2.193L5.95 5.12l.738 2.884zM9.385 3.857l-1.02.617.232-1.203-.85-.9 1.151-.049.487-1.123.487 1.123h1.15l-.849.949.256 1.203z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m10.635 6.357-1.02.617.232-1.203-.85-.9 1.151-.049.487-1.123.487 1.123h1.15l-.849.949.256 1.203z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m9.385 8.857-1.02.617.232-1.203-.85-.9 1.151-.049.487-1.123.487 1.123h1.15l-.849.949.256 1.203z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m6.885 10.107-1.02.617.232-1.203-.85-.9 1.151-.049.487-1.123.487 1.123h1.15l-.849.949.256 1.203z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CN_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CN_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m15.016 4.548-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19zM7.018 9.607l-2.881 1.551.657-3.026-2.4-2.265 3.25-.123 1.374-2.826 1.374 2.826h3.243L9.24 8.132l.72 3.026zM17.016 8.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19zM16.016 12.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19zM13.016 15.548l-1.01.61.23-1.19-.841-.89 1.139-.049.482-1.11.482 1.11h1.137l-.84.94.253 1.19z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CN_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCN',
  props: {
    size: { 
      type: String as PropType<BaseFlagProps['size']>, 
      default: 'md' 
    },
    gradient: { 
      type: String as PropType<BaseFlagProps['gradient']>, 
      default: 'none' 
    },
    hasShadow: { type: Boolean, default: false },
    hasBorder: { type: Boolean, default: true },
    hasBorderRadius: { type: Boolean, default: true }
  },
  setup(props) {
    return () => 
      h(FlagFrame, props as any, {
        default: () => h('span', {
          class: 'flag-svg-root',
          innerHTML: svg[props.size as keyof typeof svg] || svg.md
        })
      })
  }
})
