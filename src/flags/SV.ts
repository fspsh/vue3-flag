import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SV_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_SV_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SV_smb)"><path fill="#3d58db" fill-rule="evenodd" d="M0 0v4h16V0zM0 8v4h16V8z" clip-rule="evenodd"/><path stroke="#e8aa00" stroke-width=".5" d="M9.713 5.93a1.82 1.82 0 1 1-3.642 0 1.82 1.82 0 0 1 3.642 0Z"/><path fill="#1e601b" fill-rule="evenodd" d="M6.905 4.831s-.476.784-.476 1.322S7 7.368 7.896 7.368c.875 0 1.504-.523 1.523-1.215s-.47-1.184-.47-1.184.276.996.138 1.4c-.139.403-.587.891-1.19.83-.604-.063-1.177-.806-1.177-1.046s.185-1.322.185-1.322" clip-rule="evenodd"/><path stroke="#188396" stroke-width=".5" d="M7.08 6.164h1.604"/><path stroke="#e8aa00" stroke-width=".5" d="M7.23 5.903h1.38M8.525 6.206H7.297l.62-1.029z"/></g></g><defs><clipPath id="fp_SV_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SV_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_SV_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SV_mdb)"><path fill="#3d58db" fill-rule="evenodd" d="M0 0v5h20V0zM0 10v5h20v-5z" clip-rule="evenodd"/><path stroke="#e8aa00" stroke-width=".625" d="M12.14 7.411a2.276 2.276 0 1 1-4.551 0 2.276 2.276 0 0 1 4.552 0Z"/><path fill="#1e601b" fill-rule="evenodd" d="M8.632 6.039s-.596.98-.596 1.652c0 .673.713 1.518 1.834 1.518 1.094 0 1.88-.653 1.904-1.518.023-.864-.589-1.48-.589-1.48s.347 1.245.173 1.75c-.173.504-.733 1.114-1.488 1.037C9.116 8.92 8.4 7.99 8.4 7.69s.232-1.652.232-1.652" clip-rule="evenodd"/><path stroke="#188396" stroke-width=".625" d="M8.85 7.705h2.005"/><path stroke="#e8aa00" stroke-width=".625" d="M9.037 7.379h1.725M10.656 7.757H9.121l.774-1.285z"/></g></g><defs><clipPath id="fp_SV_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SV_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_SV_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SV_lgb)"><path fill="#3d58db" fill-rule="evenodd" d="M0 0v8h32V0zM0 16v8h32v-8z" clip-rule="evenodd"/><path stroke="#e8aa00" d="M19.425 11.858a3.642 3.642 0 1 1-7.283 0 3.642 3.642 0 0 1 7.283 0Z"/><path fill="#1e601b" fill-rule="evenodd" d="M13.81 9.662s-.952 1.568-.952 2.644 1.14 2.429 2.934 2.429c1.75 0 3.008-1.045 3.046-2.429s-.942-2.369-.942-2.369.555 1.993.278 2.8c-.278.807-1.175 1.784-2.382 1.66s-2.353-1.61-2.353-2.09.372-2.645.372-2.645" clip-rule="evenodd"/><path stroke="#188396" d="M14.16 12.328h3.208"/><path stroke="#e8aa00" d="M14.459 11.806h2.76M17.05 12.411h-2.457l1.24-2.056z"/></g></g><defs><clipPath id="fp_SV_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSV',
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
