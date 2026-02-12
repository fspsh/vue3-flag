import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_JM_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#093" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#272727" stroke="#feca00" stroke-width="1.35" d="m-.07-.52-1.105-.912v14.864l1.105-.911 7.269-6L7.829 6l-.63-.52z"/><path fill="#272727" stroke="#feca00" stroke-width="1.35" d="m16.082-.53 1.093-.862v14.784l-1.093-.862-7.61-6L7.8 6l.673-.53z"/></g><defs><clipPath id="fp_JM_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_JM_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#093" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#272727" stroke="#feca00" stroke-width="1.688" d="m-.088-.65-1.38-1.14v18.58l1.38-1.14 9.086-7.5.789-.65-.789-.65z"/><path fill="#272727" stroke="#feca00" stroke-width="1.688" d="m20.103-.663 1.366-1.077v18.48l-1.366-1.077-9.512-7.5-.84-.663.84-.663z"/></g><defs><clipPath id="fp_JM_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_JM_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#093" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#272727" stroke="#feca00" stroke-width="2.7" d="m-.14-1.041-2.21-1.824v29.73l2.21-1.824 14.537-12L15.658 12l-1.26-1.041z"/><path fill="#272727" stroke="#feca00" stroke-width="2.7" d="m32.164-1.06 2.186-1.724v29.568l-2.186-1.724-15.219-12L15.601 12l1.344-1.06z"/></g><defs><clipPath id="fp_JM_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagJM',
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
