import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_AG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#1b1b1b" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#f9d313" fill-rule="evenodd" d="M8 7 6.887 8.9l.028-2.098-2.032 1.325 1.162-1.88-2.55.489 2.068-1.291L3 5l2.563-.445-2.068-1.29 2.55.488-1.162-1.88 2.032 1.325L6.887 1.1 8 3l1.113-1.9-.028 2.098 2.032-1.325-1.162 1.88 2.55-.489-2.068 1.291L13 5l-2.563.445 2.068 1.29-2.55-.488 1.162 1.88-2.032-1.325.028 2.098z" clip-rule="evenodd"/><path fill="#f1f9ff" d="M3 7h10v5H3z"/><path fill="#4a80e8" d="M1 5h14v2H1z"/><path fill="#e31d1c" fill-rule="evenodd" d="m0 3 8 9 8-9v9H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_AG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_AG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#1b1b1b" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#f9d313" fill-rule="evenodd" d="m10 8.75-1.39 2.375.034-2.623-2.54 1.657 1.453-2.35-3.188.61 2.584-1.613L3.75 6.25l3.203-.556L4.37 4.08l3.188.61-1.454-2.35 2.541 1.657-.035-2.623L10 3.75l1.39-2.375-.034 2.623 2.54-1.657-1.453 2.35 3.188-.61-2.584 1.613 3.203.556-3.203.556L15.63 8.42l-3.188-.61 1.454 2.35-2.541-1.657.035 2.623z" clip-rule="evenodd"/><path fill="#f1f9ff" d="M3.75 8.75h12.5V15H3.75z"/><path fill="#4a80e8" d="M1.25 6.25h17.5v2.5H1.25z"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 3.75 10 15 20 3.75V15H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_AG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_AG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#1b1b1b" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#f9d313" fill-rule="evenodd" d="m16 14-2.003 3.8.05-4.196-3.658 2.65 2.093-3.76-4.59.977 3.72-2.58L7 10l4.613-.89L7.89 6.529l4.59.977-2.092-3.76 3.659 2.65-.05-4.195L16 6l2.003-3.8-.05 4.196 3.658-2.65-2.093 3.76 4.59-.977-3.72 2.58L25 10l-4.613.89 3.722 2.581-4.59-.977 2.092 3.76-3.658-2.65.05 4.195z" clip-rule="evenodd"/><path fill="#f1f9ff" d="M6 14h20v10H6z"/><path fill="#4a80e8" d="M2 10h28v4H2z"/><path fill="#e31d1c" fill-rule="evenodd" d="m0 6 16 18L32 6v18H0z" clip-rule="evenodd"/></g><defs><clipPath id="fp_AG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagAG',
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
