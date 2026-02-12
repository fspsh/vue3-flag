import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_PK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2f8d00" fill-rule="evenodd" d="M4 0h12v12H4z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h4v12H0z" clip-rule="evenodd"/><path fill="#f1f9ff" fill-rule="evenodd" d="M11.215 7.653s-2.233.582-4.006-.605c-1.772-1.188-.88-3.924-.88-3.924-.925.134-2.377 3.507-.037 5.199s4.582.066 4.923-.67m-2.478-3.22-1.186.58 1.251.223.169 1.223.708-1.042 1.395.094-1.092-.814.581-1.088-1.087.498-.808-.76z" clip-rule="evenodd"/></g><defs><clipPath id="fp_PK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_PK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2f8d00" fill-rule="evenodd" d="M5 0h15v15H5z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h5v15H0z" clip-rule="evenodd"/><path fill="#f1f9ff" fill-rule="evenodd" d="M14.018 9.566s-2.79.728-5.006-.756C6.796 7.325 7.91 3.905 7.91 3.905c-1.155.168-2.97 4.384-.045 6.499s5.728.082 6.153-.838m-3.097-4.024-1.482.724 1.564.279.21 1.528.886-1.302 1.743.118-1.365-1.018.727-1.36-1.36.622-1.009-.949z" clip-rule="evenodd"/></g><defs><clipPath id="fp_PK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_PK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2f8d00" fill-rule="evenodd" d="M8 0h24v24H8z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h8v24H0z" clip-rule="evenodd"/><path fill="#f1f9ff" fill-rule="evenodd" d="M22.43 15.306s-4.466 1.165-8.011-1.21-1.763-7.848-1.763-7.848c-1.849.269-4.752 7.015-.072 10.398s9.164.131 9.845-1.34m-4.956-6.44-2.372 1.16 2.502.446.338 2.445 1.417-2.083 2.788.189-2.184-1.63 1.163-2.176-2.174.996-1.616-1.519z" clip-rule="evenodd"/></g><defs><clipPath id="fp_PK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagPK',
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
