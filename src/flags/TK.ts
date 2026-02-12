import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TK_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TK_smb)"><path fill="#f7fcff" d="m1.647 5.032-.443.274.172-.46L1 4.498h.456L1.648 4l.146.498h.457l-.33.348.162.46zM3.647 3.032l-.443.274.172-.46L3 2.498h.457L3.647 2l.146.498h.457l-.33.348.162.46zM5.647 5.032l-.443.274.172-.46L5 4.498h.457L5.647 4l.146.498h.457l-.33.348.162.46zM3.647 7.032l-.443.274.172-.46L3 6.498h.457L3.647 6l.146.498h.457l-.33.348.162.46z"/><path fill="#feca00" d="M12.421 2.732c-2.042 1.008-8.75 5.54-8.75 5.54h11.175q-.167-.035-.314-.065c-.82-.163-1.225-.244-2.111-2.008-.992-1.976 0-3.467 0-3.467m-9.113 6.25-.153.38.153.418 11.377.22.315-.58-.315-.417z"/></g></g><defs><clipPath id="fp_TK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TK_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TK_mdb)"><path fill="#f7fcff" d="m2.059 6.29-.553.342.214-.575-.47-.435h.57L2.06 5l.182.622h.571l-.411.435.201.575zM4.56 3.79l-.554.342.214-.575-.47-.435h.57L4.56 2.5l.182.622h.572l-.412.435.201.575zM7.06 6.29l-.554.342.214-.575-.47-.435h.57L7.06 5l.182.622h.572l-.412.435.201.575zM4.56 8.79l-.554.342.214-.575-.47-.435h.57L4.56 7.5l.182.622h.572l-.412.435.201.575z"/><path fill="#feca00" d="M15.526 3.414c-2.552 1.261-10.938 6.927-10.938 6.927h13.97q-.21-.046-.393-.082c-1.025-.204-1.531-.305-2.639-2.51-1.24-2.47 0-4.335 0-4.335M4.135 11.228l-.191.475.19.522 14.222.275.394-.725-.394-.522z"/></g></g><defs><clipPath id="fp_TK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TK_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TK_lgb)"><path fill="#f7fcff" d="m3.294 10.063-.885.548.344-.92L2 8.995h.913L3.294 8l.292.995H4.5l-.659.696.323.92zM7.294 6.063l-.885.548.344-.92L6 4.995h.913L7.294 4l.292.995H8.5l-.659.696.323.92zM11.295 10.063l-.886.548.344-.92L10 8.995h.913L11.294 8l.292.995h.914l-.659.696.323.92zM7.294 14.063l-.885.548.344-.92L6 12.996h.913L7.294 12l.292.995H8.5l-.659.697.323.92z"/><path fill="#feca00" d="M24.842 5.463c-4.083 2.017-17.5 11.082-17.5 11.082h22.35q-.334-.073-.628-.13c-1.64-.327-2.45-.488-4.222-4.018-1.984-3.952 0-6.934 0-6.934M6.616 17.965l-.306.76.306.835 22.753.44.631-1.16-.63-.835z"/></g></g><defs><clipPath id="fp_TK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTK',
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
