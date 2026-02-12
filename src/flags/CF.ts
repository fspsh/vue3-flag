import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CF_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h16v3H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 3h16v3H0z" clip-rule="evenodd"/><path fill="#73be4a" fill-rule="evenodd" d="M0 6h16v3H0z" clip-rule="evenodd"/><path fill="#ffd018" fill-rule="evenodd" d="M0 9h16v3H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="m2.265 2.708-1.213.84.388-1.44-.89-.92 1.205-.049.51-1.424.51 1.424h1.203l-.888.97.444 1.355z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M6 0h4v12H6z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CF_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CF_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h20v3.75H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 3.75h20V7.5H0z" clip-rule="evenodd"/><path fill="#73be4a" fill-rule="evenodd" d="M0 7.5h20v3.75H0z" clip-rule="evenodd"/><path fill="#ffd018" fill-rule="evenodd" d="M0 11.25h20V15H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M2.83 3.385 1.317 4.436l.484-1.8-1.113-1.15 1.507-.062.637-1.78.637 1.78h1.504l-1.11 1.212.556 1.694z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M8 0h4v15H8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CF_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CF_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0h32v6H0z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 6h32v6H0z" clip-rule="evenodd"/><path fill="#73be4a" fill-rule="evenodd" d="M0 12h32v6H0z" clip-rule="evenodd"/><path fill="#ffd018" fill-rule="evenodd" d="M0 18h32v6H0z" clip-rule="evenodd"/><path fill="#feca00" fill-rule="evenodd" d="M4.53 5.416 2.104 7.098l.775-2.88-1.78-1.84 2.41-.1L4.53-.57l1.019 2.848h2.406l-1.776 1.94.89 2.71z" clip-rule="evenodd"/><path fill="#e11c1b" fill-rule="evenodd" d="M12 0h8v24h-8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_CF_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCF',
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
