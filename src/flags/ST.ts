import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_ST_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#fbcd17" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0v4h16V0zM0 8v4h16V8z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v12l5-6z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m8.5 6.935-.934.565.213-1.102L7 5.573l1.055-.044L8.5 4.5l.446 1.029H10l-.777.87.234 1.101zM12.5 6.935l-.934.565.213-1.102L11 5.573l1.055-.044L12.5 4.5l.446 1.029H14l-.777.87.234 1.101z" clip-rule="evenodd"/></g><defs><clipPath id="fp_ST_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_ST_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#fbcd17" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0v5h20V0zM0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v15l6.25-7.5z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="m10.626 8.67-1.169.705.267-1.377-.974-1.031 1.318-.056.558-1.286.558 1.286H12.5l-.971 1.087.292 1.377zM15.626 8.67l-1.169.705.267-1.377-.974-1.031 1.318-.056.558-1.286.558 1.286H17.5l-.971 1.087.292 1.377z" clip-rule="evenodd"/></g><defs><clipPath id="fp_ST_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_ST_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#fbcd17" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0v8h32V0zM0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#c51918" fill-rule="evenodd" d="M0 0v24l10-12z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M17.002 13.87 15.132 15l.426-2.204L14 11.146l2.11-.088L17.001 9l.892 2.058H20l-1.554 1.738.468 2.204zM25.002 13.87 23.132 15l.426-2.204L22 11.146l2.11-.088L25.001 9l.892 2.058H28l-1.554 1.738.468 2.204z" clip-rule="evenodd"/></g><defs><clipPath id="fp_ST_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagST',
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
