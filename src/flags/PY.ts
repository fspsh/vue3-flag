import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_PY_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_PY_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PY_smb)"><path fill="#272727" fill-rule="evenodd" d="M6 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0m3.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" clip-rule="evenodd"/><path fill="#f05234" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#73be4a" d="m7.289 4.928.285.411c-.285.197-.37.47-.262.875.107.398.343.584.76.599l-.018.5c-.636-.023-1.061-.359-1.225-.97-.16-.6-.006-1.092.46-1.415"/><path fill="#73be4a" d="m8.712 4.928-.284.411c.284.197.37.47.261.875-.106.398-.342.584-.76.599l.018.5c.636-.023 1.061-.359 1.225-.97.161-.6.007-1.092-.46-1.415"/><path fill="#fbcd17" fill-rule="evenodd" d="M8.001 6.374a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PY_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_PY_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_PY_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PY_mdb)"><path stroke="#272727" stroke-width=".625" d="M12.188 7.5a2.188 2.188 0 1 1-4.376 0 2.188 2.188 0 0 1 4.376 0Z"/><path fill="#f05234" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path stroke="#73be4a" stroke-width=".625" d="M9.174 6.36s-.704.487-.45 1.432c.252.945 1.24.98 1.24.98"/><path stroke="#73be4a" stroke-width=".625" d="M10.73 6.36s.704.487.45 1.432-1.24.98-1.24.98"/><path fill="#fbcd17" fill-rule="evenodd" d="M10.002 7.967a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25" clip-rule="evenodd"/></g></g><defs><clipPath id="fp_PY_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_PY_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_PY_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_PY_lgb)"><path stroke="#272727" stroke-width=".35" d="M19.825 12a3.825 3.825 0 1 1-7.65 0 3.825 3.825 0 0 1 7.65 0Z"/><path fill="#272727" fill-rule="evenodd" d="M13 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0m5.65 0a2.65 2.65 0 1 1-5.3 0 2.65 2.65 0 0 1 5.3 0" clip-rule="evenodd"/><path fill="#f05234" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#3d58db" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#73be4a" d="m14.617 10.002.284.411c-.66.457-.958.993-.714 1.904.241.9.808 1.348 1.75 1.381l-.017.5c-1.162-.04-1.947-.517-2.245-1.631-.296-1.106.1-1.982.942-2.565"/><path fill="#fbcd17" fill-rule="evenodd" d="m16 12.315-.882.599.297-1.024-.842-.654 1.066-.034L16 10.2l.361 1.003 1.066.034-.842.653.297 1.024z" clip-rule="evenodd"/><path stroke="#73be4a" stroke-width=".5" d="M17.168 10.176s1.126.78.72 2.291c-.404 1.512-1.983 1.567-1.983 1.567"/><path fill="#f7fcff" d="m14.564 9.044.467.718z"/></g></g><defs><clipPath id="fp_PY_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagPY',
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
