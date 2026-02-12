import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SY_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#409100" fill-rule="evenodd" d="m4.5 6.935-.934.565.213-1.102L3 5.573l1.055-.044L4.5 4.5l.446 1.029H6l-.777.87.234 1.101zM11.5 6.935l-.934.565.213-1.102L10 5.573l1.055-.044L11.5 4.5l.446 1.029H13l-.777.87.234 1.101z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SY_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SY_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#409100" fill-rule="evenodd" d="m5.626 8.67-1.17.705.268-1.377-.974-1.031 1.318-.056.558-1.286.558 1.286H7.5l-.971 1.087.292 1.377zM14.376 8.67l-1.169.705.267-1.377-.974-1.031 1.318-.056.558-1.286.558 1.286h1.316l-.971 1.087.292 1.377z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SY_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SY_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#409100" fill-rule="evenodd" d="M9.001 13.247 7.754 14l.285-1.47L7 11.432l1.406-.06L9.001 10l.595 1.372H11L9.964 12.53 10.276 14zM23.001 13.247 21.754 14l.284-1.47L21 11.432l1.406-.06.595-1.371.595 1.372H25l-1.036 1.159.312 1.469z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SY_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSY',
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
