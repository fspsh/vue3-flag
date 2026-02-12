import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_CV_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#4141db" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_CV_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CV_smb)"><path fill="#f90000" stroke="#f7fcff" d="M0 6.5h-.5v2h17v-2H0Z"/><path stroke="#ffde00" d="M5.5 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_CV_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_CV_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#4141db" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_CV_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CV_mdb)"><path fill="#f90000" stroke="#f7fcff" stroke-width="1.25" d="M0 8.125h-.625v2.5h21.25v-2.5H0Z"/><g filter="url(#fp_CV_mdc)"><path fill="#ffde00" fill-rule="evenodd" d="m5.119 6.32.53-.37.597.43-.009.032.027-.019.027.02-.008-.033.617-.43.596.43-.009.032.027-.019.027.02-.008-.033.617-.43.514.37h-.291l.588.521-.224.821.663-.461.514.37h-.291l.588.52-.199.73h-.39l.589.52-.199.73h-.39l.589.52-.199.73h-.311l-.302-.67-.258.67h-.768l.588.52-.199.73h-.311l-.302-.67-.258.67h-.69l-.302-.67-.258.67h-.69l-.302-.67-.258.67h-.373l-.177-.73.515-.52h-.655l-.302-.67-.258.67h-.373l-.177-.73.515-.52h-.338l-.177-.73.515-.52h-.338l-.177-.73.515-.52H3.87l.53-.37.642.461-.2-.821.515-.52zm-.107 0 .199-.729-.588-.52h.768l.258-.67.302.67h.69L6.9 4.4l.302.67h.69l.258-.67.302.67h.655l-.515.52.177.73h.373l.258-.67.302.67h.655l-.515.52.177.73h.373l.258-.67.302.67h.655l-.515.52.177.73h.338l-.515.52.177.73h.338l-.515.52.2.821-.641-.461-.531.37h.237l-.515.52.2.821-.641-.461-.531.37h.237l-.515.52.2.821-.641-.461-.617.43.008.031-.027-.019-.027.02.01-.033-.597-.43-.617.43.008.032-.027-.019-.027.02.01-.033-.597-.43-.663.462.224-.821-.588-.52h.29L4.4 12.2l-.663.461.224-.821-.588-.52h.29l-.513-.37-.663.461.224-.821-.588-.52h.39l.198-.73-.588-.52h.39l.198-.73-.588-.52h.768l.258-.67.302.67h.311l.199-.73-.588-.52h.768l.258-.67.302.67zM3.35 8.595l.315.227H3.45zm-.73.227.372-.26-.1.26zm0 1.25h.272l.1-.26zm.73-.227.102.227h.213zm2.742 3.247.173-.174.197.174-.195.718zm1.425.718.195-.718-.197-.174-.173.174zm2.875-3.738h-.272l.372-.26zm.56 0-.102-.227.315.227zm.213-1.25-.315-.227.102.227zm-.673-.26-.372.26h.272zm-2.78-2.97-.195.718-.175-.718.173-.174zm-1.447-.174-.173.174.175.718.195-.718z" clip-rule="evenodd"/></g></g></g><defs><clipPath id="fp_CV_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><filter id="fp_CV_mdc" width="15.483" height="15.512" x="-.877" y="1.401" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="1.5"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_270_60962"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_270_60962" result="shape"/></filter></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_CV_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#4141db" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_CV_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_CV_lgb)"><path fill="#f90000" stroke="#f7fcff" stroke-width="2" d="M0 13h-1v4h34v-4H0Z"/><g filter="url(#fp_CV_lgc)"><path fill="#ffde00" fill-rule="evenodd" d="m9.796 10.26.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574zm3 1.6.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574zm3.126 1.89-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.906zm-.726 4.51.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574zm-1.674 1.89-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.906zm-3.726 2.11.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574zm-2.274-2.11-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.906zm-3.126-1.89.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574zm.726-4.51-.726.51.245-.906-.645-.574h.842l.283-.74.33.74h.719l-.564.574.218.906zm1.674-1.89.726-.51.702.51-.218-.906.564-.574h-.718l-.331-.74-.283.74h-.842l.645.574z" clip-rule="evenodd"/></g></g></g><defs><clipPath id="fp_CV_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath><filter id="fp_CV_lgc" width="20.974" height="22.219" x="-.004" y="4.041" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_270_67487"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_270_67487" result="shape"/></filter></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagCV',
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
