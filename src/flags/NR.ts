import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_NR_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_NR_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_NR_smb)"><path fill="#feca00" d="M0 4v2h16V4z"/><path fill="#f7fcff" d="m4.415 9.79-.773 1.003-.035-1.266-1.215.357.715-1.044-1.192-.425 1.192-.425-.715-1.045 1.215.357.035-1.265.773 1.003.772-1.003.036 1.265 1.214-.357-.714 1.045 1.192.425-1.192.425.714 1.044-1.214-.357-.036 1.266z"/></g></g><defs><clipPath id="fp_NR_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_NR_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_NR_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_NR_mdb)"><path fill="#feca00" d="M0 5v2.5h20V5z"/><path fill="#f7fcff" d="m5.519 12.237-.966 1.254-.045-1.582-1.518.446.894-1.305-1.49-.532 1.49-.53-.894-1.306 1.518.446.045-1.582.966 1.254.965-1.254.045 1.582 1.518-.446-.894 1.305 1.49.531-1.49.532.894 1.305-1.518-.446-.045 1.582z"/></g></g><defs><clipPath id="fp_NR_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_NR_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_NR_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_NR_lgb)"><path fill="#feca00" d="M0 8v4h32V8z"/><path fill="#f7fcff" d="m8.83 19.58-1.545 2.005-.072-2.53-2.428.714 1.43-2.09-2.385-.85 2.384-.85-1.43-2.088 2.43.714.07-2.53L8.83 14.08l1.545-2.006.071 2.53 2.429-.713-1.43 2.089 2.385.85-2.385.85 1.43 2.089-2.429-.715-.071 2.53z"/></g></g><defs><clipPath id="fp_NR_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagNR',
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
