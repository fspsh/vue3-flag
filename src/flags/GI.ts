import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_GI_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" d="M0 0h16v12H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 8h16v4H0z" clip-rule="evenodd"/><path fill="#db000b" fill-rule="evenodd" d="M8.229.633h-.947v.848h.467l-.033 2.33H6.334V2.753h.474v-.847H5.86v.424h-.474v-.424h-.948v.847h.474v1.06h-.999v.848h.474v2.542h-.474v.848h9v-.848h-.947V4.66h.947v-.848h-.928l.023-1.06h.483v-.847h-.947v.424h-.474v-.424h-.947v.847h.464l-.023 1.06H9.137L9.17 1.48h.48V.633h-.947v.424h-.474z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M5.808 6.845a.553.553 0 1 1 1.105 0v.914H5.808zM9.86 6.845a.553.553 0 0 1 1.106 0v.914H9.86zM7.65 6.663a.737.737 0 0 1 1.474 0v1.463H7.65z" clip-rule="evenodd"/><path fill="#e8aa00" fill-rule="evenodd" d="m8.661 7.599-.09.166-.169-.252-1.379.925 1.538.732 1.356-.887zm-.63.765.444-.297.469.255-.422.276zM7.579 10.267h.737V11h-.737z" clip-rule="evenodd"/><path fill="#e8aa00" fill-rule="evenodd" d="M8 9h.874v2H8z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GI_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_GI_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" d="M0 0h20v15H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 10h20v5H0z" clip-rule="evenodd"/><path fill="#db000b" fill-rule="evenodd" d="M9.838 2.042h-.921v.916h.454L9.34 5.48H7.996V4.333h.46v-.916h-.92v.458h-.461v-.458h-.921v.916h.46V5.48h-.971v.917h.46v2.75h-.46v.916h8.75v-.916h-.921v-2.75h.92v-.917h-.902l.023-1.146h.47v-.916h-.922v.458h-.46v-.458h-.921v.916h.451l-.023 1.146H10.72l.033-2.52h.466v-.917h-.92V2.5h-.461z" clip-rule="evenodd"/><path fill="#272727" d="M7.132 5.48a.23.23 0 1 1 .46 0v1.145h-.46z"/><path fill="#272727" fill-rule="evenodd" d="M6.76 8.556a.69.69 0 0 1 1.382 0V9.7H6.76zM11.826 8.556a.69.69 0 0 1 1.381 0V9.7h-1.381zM9.063 8.328a.921.921 0 0 1 1.842 0v1.83H9.063z" clip-rule="evenodd"/><path fill="#272727" d="M9.895 5.48a.23.23 0 0 1 .46 0v1.145h-.46zM12.658 5.48a.23.23 0 0 1 .46 0v1.145h-.46z"/><path fill="#e8aa00" fill-rule="evenodd" d="m10.327 9.498-.114.208-.21-.314-1.724 1.155 1.922.915 1.696-1.108zm-.788.957.555-.372.586.32-.527.344zM8.974 12.833h.92v.917h-.92z" clip-rule="evenodd"/><path fill="#e8aa00" fill-rule="evenodd" d="M9.5 11.25h1.093v2.5H9.5z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GI_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_GI_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" d="M0 0h32v24H0z"/><path fill="#c51918" fill-rule="evenodd" d="M0 16h32v8H0z" clip-rule="evenodd"/><path fill="#db000b" fill-rule="evenodd" d="M17.389 5H13.61v4.615h-.944V6.846H8.889v2.77H7v.923h.944v4.615H7v.923h17v-.923h-.944v-4.615H24v-.924h-1.889V6.846h-3.778v2.77h-.944z" clip-rule="evenodd"/><path fill="#272727" d="M9.833 8.59a.82.82 0 0 1 1.64 0V9.8h-1.64zM19.278 8.59a.82.82 0 0 1 1.64 0V9.8h-1.64z"/><path fill="#272727" fill-rule="evenodd" d="M9.567 13.47a1.086 1.086 0 0 1 2.173 0v1.868H9.567z" clip-rule="evenodd"/><path fill="#272727" d="M19.012 13.47a1.086 1.086 0 0 1 2.172 0v1.868h-2.172z"/><path fill="#272727" fill-rule="evenodd" d="M13.895 13.64a1.392 1.392 0 0 1 2.783 0v2.67h-2.783z" clip-rule="evenodd"/><path fill="#272727" d="M14.556 7.666a.82.82 0 1 1 1.64 0V9.8h-1.64z"/><path fill="#de1a23" d="M7 8.692h.944v.923H7z"/><path fill="#de1a23" fill-rule="evenodd" d="M8.5 6h1v1h-1zm3.818 0h1v1h-1zm-.568 0h-1.5v1h1.5zM18.09 6h1v1h-1zm3.728 0h1v1h-1zm-.614 0h-1.5v1h1.5zM13.8 4.023h-1v1h1zm1.5 0h-1v1h1zm.5 0h1v1h-1zm2.5 0h-1v1h1z" clip-rule="evenodd"/><path fill="#de1a23" d="M22.999 8.775h1v.839h-1z"/><path fill="#e8aa00" fill-rule="evenodd" d="m15.44 18.453 2.712-1.774-2.894-1.353-2.894 1.663zm-1.06-1.611.888-.595.937.51-.843.552zM13.476 21.007h1.473v1.107-.374h-.915v.374h-.558z" clip-rule="evenodd"/><path fill="#e8aa00" fill-rule="evenodd" d="M14.816 18.114h1.25v4h-1.25z" clip-rule="evenodd"/></g><defs><clipPath id="fp_GI_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagGI',
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
