import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_HK_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#ea1a1a" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_HK_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_HK_smb)"><path fill="#fff" fill-rule="evenodd" d="M7.935 5.787s-2.895-2.581.56-4.085c0 0 1.004 1.108.25 2.352-.247.408-.456.7-.612.919-.321.448-.425.593-.198.814M3.662 3.934C3.464 7.696 7.067 6.26 7.067 6.26c-.3.104-.382-.054-.64-.541-.126-.238-.293-.555-.548-.959-.776-1.23-2.217-.827-2.217-.827m5.457 1.98s3.716 1.112 1.224 3.938c0 0-1.38-.579-1.224-2.025.051-.474.117-.826.166-1.091.1-.543.133-.718-.166-.822m-.977.867s.667 3.821-2.975 2.855c0 0-.1-1.492 1.264-2 .447-.166.791-.265 1.05-.34.53-.152.701-.2.661-.515m4.597-1.643c-2.277-3.001-4.102.421-4.102.421.162-.272.327-.206.838 0 .25.1.582.234 1.038.378 1.387.439 2.226-.8 2.226-.8" clip-rule="evenodd"/><path stroke="#ea1a1a" stroke-width=".5" d="M5.08 5.104S5.809 6.25 7 6.25M7.93 3.525s-.653 1.205-.093 2.258M11.055 4.88s-1.525-.23-2.323.655M10.164 7.672S9.86 6.16 8.754 5.714M6.967 8.493S8.284 7.69 8.325 6.5"/></g></g><defs><clipPath id="fp_HK_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_HK_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#ea1a1a" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_HK_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_HK_mdb)"><g filter="url(#fp_HK_mdc)"><path fill="#fff" fill-rule="evenodd" d="M9.918 7.234s-3.618-3.227.7-5.107c0 0 1.256 1.385.314 2.94-.31.51-.57.875-.766 1.149-.401.56-.53.741-.248 1.018m-5.34-2.317c-.249 4.703 4.256 2.91 4.256 2.91-.374.129-.478-.068-.8-.677a17 17 0 0 0-.685-1.199c-.97-1.538-2.771-1.034-2.771-1.034m6.82 2.475s4.646 1.39 1.53 4.923c0 0-1.724-.723-1.53-2.531.065-.593.146-1.033.208-1.364.126-.678.167-.897-.207-1.028m-1.22 1.084s.833 4.776-3.72 3.57c0 0-.123-1.866 1.58-2.5.56-.209.99-.332 1.314-.425.662-.19.876-.252.826-.645m5.746-2.054c-2.847-3.751-5.128.527-5.128.527.202-.34.409-.257 1.048 0 .312.126.728.293 1.297.473 1.734.548 2.783-1 2.783-1" clip-rule="evenodd"/></g><path stroke="#ea1a1a" stroke-width=".625" d="M6.35 6.38s.91 1.432 2.4 1.432M9.913 4.406s-.817 1.507-.117 2.822M13.819 6.101s-1.907-.289-2.904.818M12.705 9.59s-.38-1.89-1.762-2.448M8.708 10.617s1.646-1.004 1.698-2.494"/></g></g><defs><clipPath id="fp_HK_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath><filter id="fp_HK_mdc" width="13.356" height="12.188" x="3.568" y="1.127" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset/><feGaussianBlur stdDeviation=".5"/><feColorMatrix values="0 0 0 0 0.6 0 0 0 0 0 0 0 0 0 0 0 0 0 0.36 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow_270_60905"/><feBlend in="SourceGraphic" in2="effect1_dropShadow_270_60905" result="shape"/></filter></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_HK_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#ea1a1a" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_HK_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g mask="url(#fp_HK_lgb)"><path fill="#fff" fill-rule="evenodd" d="M15.87 11.575s-5.79-5.163 1.119-8.172c0 0 2.009 2.217.502 4.705-.495.816-.912 1.4-1.225 1.837-.643.897-.85 1.187-.396 1.63M7.325 7.868c-.398 7.524 6.81 4.654 6.81 4.654-.6.207-.766-.107-1.281-1.082-.252-.477-.587-1.11-1.096-1.918-1.552-2.46-4.433-1.654-4.433-1.654m10.913 3.96s7.432 2.224 2.448 7.876c0 0-2.76-1.158-2.448-4.05.102-.948.233-1.653.332-2.182.201-1.085.266-1.436-.332-1.645m-1.953 1.734s1.332 7.642-5.951 5.71c0 0-.199-2.985 2.528-4a27 27 0 0 1 2.1-.679c1.061-.304 1.403-.403 1.323-1.031m9.194-3.287c-4.556-6.002-8.205.843-8.205.843.323-.544.653-.412 1.676 0 .5.201 1.165.469 2.076.757 2.773.876 4.453-1.6 4.453-1.6" clip-rule="evenodd"/><path fill="#ea1a1a" d="m9.95 10.342.422-.268c.927 1.458 2.129 2.175 3.63 2.175v.5c-1.68 0-3.037-.81-4.052-2.407"/><path fill="#ea1a1a" fill-rule="evenodd" d="M21.75 10.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M19.959 15.728a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M13.959 17.728a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M9.959 10.728a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M15.959 7.728a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5" clip-rule="evenodd"/><path fill="#ea1a1a" d="m15.635 7.053.44.238c-.833 1.536-.892 2.953-.187 4.279l-.442.235c-.787-1.481-.72-3.075.189-4.752M22.015 9.686l-.075.494c-1.956-.296-3.42.116-4.422 1.23l-.372-.335c1.125-1.249 2.758-1.71 4.869-1.39"/><path fill="#ea1a1a" d="m20.351 15.365-.49.098c-.39-1.939-1.279-3.173-2.668-3.734l.188-.464c1.558.63 2.549 2.007 2.97 4.1M13.907 17.15l-.26-.427c1.688-1.03 2.544-2.287 2.597-3.784l.5.017c-.06 1.68-1.015 3.082-2.838 4.194"/></g></g><defs><clipPath id="fp_HK_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagHK',
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
