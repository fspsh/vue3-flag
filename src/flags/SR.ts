import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#4e8b1d" fill-rule="evenodd" d="M0 8h16v4H0zM0 0h16v3H0z" clip-rule="evenodd"/><path fill="#af0100" stroke="#fff" stroke-width="1.5" d="M0 3.25h-.75v5.5h17.5v-5.5H0Z"/><path fill="#feca00" fill-rule="evenodd" d="M8.001 7.247 6.754 8l.285-1.47L6 5.432l1.406-.06L8.001 4l.595 1.372H10L8.964 6.53 9.276 8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#4e8b1d" fill-rule="evenodd" d="M0 10h20v5H0zM0 0h20v3.75H0z" clip-rule="evenodd"/><path fill="#af0100" stroke="#fff" stroke-width="1.875" d="M0 4.063h-.937v6.875h21.875V4.063H0Z"/><path fill="#feca00" fill-rule="evenodd" d="M10.002 9.059 8.442 10l.356-1.836L7.5 6.789l1.758-.074L10.002 5l.743 1.715H12.5l-1.295 1.449.39 1.836z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#4e8b1d" fill-rule="evenodd" d="M0 16h32v8H0zM0 0h32v6H0z" clip-rule="evenodd"/><path fill="#af0100" stroke="#fff" stroke-width="3" d="M0 6.5h-1.5v11h35v-11H0Z"/><path fill="#feca00" fill-rule="evenodd" d="M16.002 14.494 13.508 16l.57-2.938-2.078-2.2 2.813-.118L16.003 8l1.19 2.744H20l-2.072 2.318.624 2.938z" clip-rule="evenodd"/></g><defs><clipPath id="fp_SR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSR',
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
