import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_NI_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_NI_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_NI_smb)"><path fill="#0080ec" fill-rule="evenodd" d="M0 0v4h16V0zM0 8v4h16V8z" clip-rule="evenodd"/><path fill="#d0ab00" fill-rule="evenodd" d="M8 4q.141 0 .278.02l-.1.637a1.4 1.4 0 0 0-.436.013l-.046-.647Q7.845 4 8 4m.576.084-.174.622a1.355 1.355 0 0 1 .952 1.339l.644.054L10 6a2 2 0 0 0-1.424-1.916m1.18 2.873a2 2 0 0 1-1.608 1.038v-.648c.37-.04.696-.23.915-.508zm-3.468.078a2 2 0 0 0 1.598.962V7.35a1.35 1.35 0 0 1-.968-.535zm-.286-.95L6 6a2 2 0 0 1 1.276-1.865l.167.63c-.468.211-.794.68-.798 1.225z" clip-rule="evenodd"/><path fill="#7cdfff" fill-rule="evenodd" d="M7.987 4.475 6.62 6.84h2.758z" clip-rule="evenodd"/><mask id="fp_NI_smc" width="4" height="3" x="6" y="4" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M7.987 4.475 6.62 6.84h2.758z" clip-rule="evenodd"/></mask><g mask="url(#fp_NI_smc)"><path stroke="#e31d1c" stroke-width=".5" d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"/><path stroke="#ffd018" stroke-width=".5" d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"/><path stroke="#4edd00" stroke-width=".5" d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"/><path stroke="#3d58db" stroke-width=".5" d="M8 7.56a1.195 1.195 0 1 0 0-2.392A1.195 1.195 0 0 0 8 7.56Z"/><path fill="#3d58db" d="M6.509 6.109h3.127v.909H6.509z"/><path fill="#97c923" fill-rule="evenodd" d="m6.719 6.495.623-.62.191.31.134-.377.148.283.156-.215.202.215.185-.283.158.283.181-.215.424.45.076.17-2.478.125z" clip-rule="evenodd"/></g></g></g><defs><clipPath id="fp_NI_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_NI_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_NI_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_NI_mdb)"><path fill="#0080ec" fill-rule="evenodd" d="M0 0v5h20V0zM0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#d0ab00" fill-rule="evenodd" d="M10 5q.177 0 .347.024l-.124.797a1.7 1.7 0 0 0-.545.016L9.62 5.03A2.5 2.5 0 0 1 10 5m.72.105-.217.778a1.694 1.694 0 0 1 1.19 1.673l.804.068q.003-.061.003-.124c0-1.13-.75-2.086-1.78-2.395m1.476 3.591a2.5 2.5 0 0 1-2.01 1.297v-.81c.462-.05.869-.287 1.143-.634zm-4.335.098a2.5 2.5 0 0 0 1.996 1.202v-.809a1.7 1.7 0 0 1-1.21-.668zm-.359-1.187L7.5 7.5a2.5 2.5 0 0 1 1.595-2.331l.209.787c-.585.264-.992.85-.997 1.532z" clip-rule="evenodd"/><path fill="#7cdfff" fill-rule="evenodd" d="M9.984 5.594 8.274 8.55h3.448z" clip-rule="evenodd"/><mask id="fp_NI_mdc" width="4" height="4" x="8" y="5" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M9.984 5.594 8.274 8.55h3.448z" clip-rule="evenodd"/></mask><g mask="url(#fp_NI_mdc)"><path stroke="#e31d1c" stroke-width=".625" d="M10 9.449a1.494 1.494 0 1 0 0-2.989 1.494 1.494 0 0 0 0 2.989Z"/><path stroke="#ffd018" stroke-width=".625" d="M10 9.449a1.494 1.494 0 1 0 0-2.989 1.494 1.494 0 0 0 0 2.989Z"/><path stroke="#4edd00" stroke-width=".625" d="M10 9.449a1.494 1.494 0 1 0 0-2.989 1.494 1.494 0 0 0 0 2.989Z"/><path stroke="#3d58db" stroke-width=".625" d="M10 9.449a1.494 1.494 0 1 0 0-2.989 1.494 1.494 0 0 0 0 2.989Z"/><path fill="#3d58db" d="M8.136 7.636h3.909v1.136H8.136z"/><path fill="#97c923" fill-rule="evenodd" d="m8.398 8.12.78-.775.238.387.167-.473.186.355.195-.27.252.27.231-.355.198.355.226-.27.53.563.095.212-3.098.157z" clip-rule="evenodd"/></g></g></g><defs><clipPath id="fp_NI_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_NI_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_NI_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_NI_lgb)"><path fill="#0080ec" fill-rule="evenodd" d="M0 0v8h32V0zM0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#d0ab00" fill-rule="evenodd" d="M16 8q.284 0 .555.038l-.198 1.276a2.7 2.7 0 0 0-.872.026l-.093-1.294A4 4 0 0 1 16 8m1.152.168-.348 1.244a2.71 2.71 0 0 1 1.904 2.677l1.287.11Q20 12.1 20 12c0-1.809-1.2-3.337-2.848-3.832m2.361 5.746a4 4 0 0 1-3.217 2.075v-1.296c.741-.08 1.392-.46 1.83-1.014zm-6.936.156a4 4 0 0 0 3.194 1.924V14.7a2.7 2.7 0 0 1-1.935-1.07zm-.573-1.899L12 12a4 4 0 0 1 2.552-3.73l.334 1.26a2.71 2.71 0 0 0-1.595 2.45z" clip-rule="evenodd"/><path fill="#7cdfff" fill-rule="evenodd" d="m15.975 8.95-2.737 4.73h5.517z" clip-rule="evenodd"/><mask id="fp_NI_lgc" width="6" height="6" x="13" y="8" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="m15.975 8.95-2.737 4.73h5.517z" clip-rule="evenodd"/></mask><g mask="url(#fp_NI_lgc)"><path stroke="#e31d1c" d="M16 15.118a2.39 2.39 0 1 0 0-4.782 2.39 2.39 0 0 0 0 4.782Z"/><path stroke="#ffd018" d="M16 15.118a2.39 2.39 0 1 0 0-4.782 2.39 2.39 0 0 0 0 4.782Z"/><path stroke="#4edd00" d="M16 15.118a2.39 2.39 0 1 0 0-4.782 2.39 2.39 0 0 0 0 4.782Z"/><path stroke="#3d58db" d="M16 15.118a2.39 2.39 0 1 0 0-4.782 2.39 2.39 0 0 0 0 4.782Z"/><path fill="#3d58db" d="M13.018 12.218h6.255v1.818h-6.255z"/><path fill="#97c923" fill-rule="evenodd" d="m13.437 12.99 1.247-1.239.382.62.267-.756.297.567.312-.43.403.43.37-.567.316.567.363-.43.848.9.152.339-4.957.251z" clip-rule="evenodd"/></g></g></g><defs><clipPath id="fp_NI_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagNI',
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
