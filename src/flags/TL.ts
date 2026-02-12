import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TL_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e31d1c" stroke="#f7fcff" d="M0-.5h-.5v13h17v-13H0Z"/><path fill="#feca00" fill-rule="evenodd" d="m0 0 12 6-12 6z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m0 0 8 6-8 6z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m3.324 7.204-1.01 1.05-.105-1.492L.92 5.968l1.343-.421.22-1.48.93 1.172 1.355-.363-.7 1.387.681 1.339z" clip-rule="evenodd"/></g><defs><clipPath id="fp_TL_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TL_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e31d1c" stroke="#f7fcff" stroke-width="1.25" d="M0-.625h-.625v16.25h21.25V-.625H0Z"/><path fill="#feca00" fill-rule="evenodd" d="m0 0 15 7.5L0 15z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m0 0 10 7.5L0 15z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m4.155 9.005-1.262 1.313-.132-1.866-1.61-.992 1.679-.526.274-1.85L4.267 6.55l1.695-.454-.876 1.734.851 1.673z" clip-rule="evenodd"/></g><defs><clipPath id="fp_TL_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TL_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e31d1c" stroke="#f7fcff" stroke-width="2" d="M0-1h-1v26h34V-1H0Z"/><path fill="#feca00" fill-rule="evenodd" d="m0 0 24 12L0 24z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m0 0 16 12L0 24z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m6.648 14.409-2.02 2.1-.21-2.986-2.576-1.586 2.686-.843.44-2.958 1.859 2.342 2.712-.727-1.402 2.776L9.5 15.203z" clip-rule="evenodd"/></g><defs><clipPath id="fp_TL_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTL',
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
