import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_GG_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_GG_smb)"><path fill="#e31d1c" d="M6 0h4v4h6v4h-6v4H6V8H0V4h6z"/><path fill="#feca00" d="M6.503 1.523 7 2.4V5H3.433v-.029l-.88-.498v2.98L3.385 7H7v2.525l-.497.878h2.98l-.479-.88H9V7h3.6l.833.453v-2.98l-.88.498V5H9V2.403h.004l.479-.88z"/></g></g><defs><clipPath id="fp_GG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_GG_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_GG_mdb)"><path fill="#e31d1c" d="M7.5 0h5v5H20v5h-7.5v5h-5v-5H0V5h7.5z"/><path fill="#feca00" d="M8.128 1.904 8.75 3v3.25H4.29v-.036l-1.099-.623v3.725l1.04-.566H8.75v3.157l-.622 1.096h3.726l-.599-1.1h-.005V8.75h4.5l1.04.566V5.591l-1.099.623v.036H11.25V3.003h.005l.599-1.1z"/></g></g><defs><clipPath id="fp_GG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_GG_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_GG_lgb)"><path fill="#e31d1c" d="M12 0h8v8h12v8H20v8h-8v-8H0V8h12z"/><path fill="#feca00" d="M13.006 3.046 14 4.8V10H6.865v-.057l-1.759-.998v5.96L6.771 14H14v5.051l-.995 1.754h5.96l-.956-1.759H18V14h7.2l1.665.906v-5.96l-1.759.997V10H18V4.805h.009l.957-1.759z"/></g></g><defs><clipPath id="fp_GG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGG',
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
