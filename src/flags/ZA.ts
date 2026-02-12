import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_ZA_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><mask id="fp_ZA_smb" width="18" height="20" x="-1" y="-4" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-1-4h18v20H-1z"/><path fill-rule="evenodd" d="M7.714 5 0-1v14l7.714-6H16V5z" clip-rule="evenodd"/></mask><path fill="#5eaa22" fill-rule="evenodd" d="M7.714 5 0-1v14l7.714-6H16V5z" clip-rule="evenodd"/><path fill="#f7fcff" d="m0-1 .614-.79L-1-3.044V-1zm7.714 6-.614.79.271.21h.343zM0 13h-1v2.045l1.614-1.256zm7.714-6V6h-.343l-.27.21zM16 7v1h1V7zm0-2h1V4h-1zM-.614-.21l7.714 6 1.228-1.58-7.714-6zM1 13V-1h-2v14zm6.1-6.79-7.714 6 1.228 1.58 7.714-6zM16 6H7.714v2H16zm-1-1v2h2V5zM7.714 6H16V4H7.714z" mask="url(#fp_ZA_smb)"/><path fill="#272727" stroke="#feca00" d="M.3 2.6-.5 2v8l.8-.6 4-3 .533-.4-.533-.4z"/></g><defs><clipPath id="fp_ZA_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_ZA_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><mask id="fp_ZA_mdb" width="24" height="24" x="-2" y="-4.25" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-2-4.25h24v24H-2z"/><path fill-rule="evenodd" d="M9.643 6.25 0-1.25v17.5l9.643-7.5H20v-2.5z" clip-rule="evenodd"/></mask><path fill="#5eaa22" fill-rule="evenodd" d="M9.643 6.25 0-1.25v17.5l9.643-7.5H20v-2.5z" clip-rule="evenodd"/><path fill="#f7fcff" d="m0-1.25.767-.987-2.017-1.569v2.556zm9.643 7.5-.768.987.339.263h.429zM0 16.25h-1.25v2.556l2.017-1.57zm9.643-7.5V7.5h-.429l-.339.263zM20 8.75V10h1.25V8.75zm0-2.5h1.25V5H20zM-.767-.263l9.642 7.5 1.535-1.974-9.643-7.5zM1.25 16.25v-17.5h-2.5v17.5zm7.625-8.487-9.642 7.5 1.534 1.974 9.643-7.5zM20 7.5H9.643V10H20zm-1.25-1.25v2.5h2.5v-2.5zM9.643 7.5H20V5H9.643z" mask="url(#fp_ZA_mdb)"/><path fill="#272727" stroke="#feca00" stroke-width="1.25" d="m.375 3.25-1-.75v10l1-.75 5-3.75.667-.5-.667-.5z"/></g><defs><clipPath id="fp_ZA_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_ZA_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#e31d1c" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><mask id="fp_ZA_lgb" width="36" height="38" x="-2" y="-7" fill="#000" maskUnits="userSpaceOnUse"><path fill="#fff" d="M-2-7h36v38H-2z"/><path fill-rule="evenodd" d="M15.429 10 0-2v28l15.429-12H32v-4z" clip-rule="evenodd"/></mask><path fill="#5eaa22" fill-rule="evenodd" d="M15.429 10 0-2v28l15.429-12H32v-4z" clip-rule="evenodd"/><path fill="#f7fcff" d="m0-2 1.228-1.579L-2-6.089V-2zm15.429 12L14.2 11.579l.541.421h.687zM0 26h-2v4.09l3.228-2.511zm15.429-12v-2h-.687l-.541.421zM32 14v2h2v-2zm0-4h2V8h-2zM-1.228-.421l15.429 12 2.456-3.158-15.43-12zM2 26V-2h-4v28zm12.2-13.579-15.428 12 2.456 3.158 15.429-12zM32 12H15.429v4H32zm-2-2v4h4v-4zm-14.571 2H32V8H15.429z" mask="url(#fp_ZA_lgb)"/><path fill="#272727" stroke="#feca00" stroke-width="2" d="M.6 5.2-1 4v16l1.6-1.2 8-6 1.067-.8-1.067-.8z"/></g><defs><clipPath id="fp_ZA_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagZA',
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
