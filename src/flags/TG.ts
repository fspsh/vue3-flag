import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#5eaa22" stroke="#f7fcff" d="M0-.5h-.5v13h17v-13H0Z"/><path fill="#feca00" fill-rule="evenodd" d="M0 3v2h16V3zM0 7v2h16V7z" clip-rule="evenodd"/><path fill="#f50101" d="M0 0h8v7H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="m4.125 5.072-1.86 1.15.722-1.931L1.5 2.99h1.824l.801-1.925.611 1.925h1.802L5.273 4.29l.623 1.837z" clip-rule="evenodd"/></g><defs><clipPath id="fp_TG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#5eaa22" stroke="#f7fcff" stroke-width="1.25" d="M0-.625h-.625v16.25h21.25V-.625H0Z"/><path fill="#feca00" fill-rule="evenodd" d="M0 3.75v2.5h20v-2.5zM0 8.75v2.5h20v-2.5z" clip-rule="evenodd"/><path fill="#f50101" d="M0 0h10v8.75H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M5.156 6.34 2.832 7.78l.902-2.415-1.859-1.627h2.28l1.001-2.406.764 2.406h2.253L6.59 5.364l.778 2.296z" clip-rule="evenodd"/></g><defs><clipPath id="fp_TG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#5eaa22" stroke="#f7fcff" stroke-width="2" d="M0-1h-1v26h34V-1H0Z"/><path fill="#feca00" fill-rule="evenodd" d="M0 6v4h32V6zM0 14v4h32v-4z" clip-rule="evenodd"/><path fill="#f50101" d="M0 0h16v14H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="m8.25 10.144-3.72 2.302 1.445-3.864L3 5.98h3.648L8.25 2.13l1.223 3.85h3.604l-2.532 2.603 1.246 3.674z" clip-rule="evenodd"/></g><defs><clipPath id="fp_TG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTG',
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
