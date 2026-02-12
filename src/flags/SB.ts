import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SB_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_SB_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SB_smb)"><path fill="#579d20" fill-rule="evenodd" d="M0 12h16V0z" clip-rule="evenodd"/><path fill="#feca00" d="m-.391 12.373-.902-1.248L16.837-.977 17.74.27z"/><path fill="#f7fcff" fill-rule="evenodd" d="m1.827 3.273.681-.473.714.425-.25-.762.5-.545h-.677l-.287-.801-.286.8-.678.029.5.517zm2.829 0 .681-.473.714.425-.25-.762.5-.545h-.677l-.287-.801-.286.8-.678.029.5.517z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m3.324 4.727.682-.473.714.425-.25-.762.499-.545h-.677l-.286-.801-.287.8-.678.029.5.517zM2.508 5.8l-.681.473.217-.81-.5-.517.678-.028.286-.801.287.8h.677l-.5.546.25.762zm2.83 0-.682.473.218-.81-.501-.517.678-.028.286-.801.287.8h.677l-.5.546.25.762z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_SB_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SB_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_SB_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SB_mdb)"><path fill="#579d20" fill-rule="evenodd" d="M0 15h20V0z" clip-rule="evenodd"/><path fill="#feca00" d="m-.489 15.466-1.127-1.56L21.047-1.221l1.127 1.56z"/><path fill="#f7fcff" fill-rule="evenodd" d="m2.283 4.092.853-.591.892.53-.313-.952.625-.682h-.846l-.358-1-.359 1-.847.035.626.647zm3.537 0 .852-.591.892.53-.312-.952.624-.682H7.03l-.358-1-.359 1-.847.035.626.647z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m4.155 5.91.852-.592.893.531-.313-.952.624-.682h-.845l-.359-1.001-.358 1-.847.036.625.647zm-1.02 1.34-.852.592.273-1.013-.626-.647.847-.035.359-1 .358 1h.846l-.625.682.313.953zm3.537 0-.852.592.272-1.013-.626-.647.847-.035.359-1 .358 1h.846l-.624.682.312.953z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_SB_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SB_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#3d58db" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_SB_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_SB_lgb)"><path fill="#579d20" fill-rule="evenodd" d="M0 24h32V0z" clip-rule="evenodd"/><path fill="#feca00" d="m-.782 24.745-1.804-2.496L33.675-1.954 35.48.542z"/><path fill="#f7fcff" fill-rule="evenodd" d="M3.653 6.547 5.017 5.6l1.428.85-.5-1.524.998-1.091H5.59l-.573-1.602-.574 1.602-1.355.056 1.001 1.035zm5.658 0 1.364-.946 1.428.85-.5-1.524.999-1.091h-1.354l-.573-1.602-.573 1.602-1.356.056 1.001 1.035z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="m6.648 9.455 1.364-.946 1.428.85-.5-1.524.998-1.091H8.585l-.573-1.602-.574 1.602-1.355.056 1 1.035zM5.017 11.6l-1.364.946.436-1.62-1.001-1.035 1.355-.056.574-1.602.573 1.602h1.353l-.998 1.09.5 1.525zm5.658 0-1.364.946.436-1.62-1-1.035 1.355-.056.573-1.602.573 1.602h1.354l-1 1.09.501 1.525z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_SB_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSB',
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
