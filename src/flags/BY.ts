import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_BY_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#af0100" fill-rule="evenodd" d="M0 0v8h16V0z" clip-rule="evenodd"/><path fill="#f7fcff" d="M0 0h3v12H0z"/><path fill="#d0181a" fill-rule="evenodd" d="M.5 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2 0a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M1 2.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M2.5 2a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m0 7a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M1 9.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M.5 11a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1m2.5.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M1.5 10a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M2 1.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0m.055 4.52L3 7v1l.022.046L1.546 6.57.219 8H0V7l.991-.986-.99-.992V4h.108l1.423 1.476 1.43-1.422L3 4v1zM1.5 3a.5.5 0 1 1 0 1 .5.5 0 0 1 0-1M2 8.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0" clip-rule="evenodd"/><path fill="#8f181a" fill-rule="evenodd" d="M0 0h1v1H0zm1 2H0v1h1zM0 4h1v1H0zm1 3H0v1h1zM0 9h1v1H0zm1 2H0v1h1zm2 0H2v1h1zM3 0H2v1h1z" clip-rule="evenodd" opacity=".4"/></g><defs><clipPath id="fp_BY_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_BY_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#af0100" fill-rule="evenodd" d="M0 0v10h20V0z" clip-rule="evenodd"/><path fill="#f7fcff" d="M0 0h3.75v15H0z"/><path fill="#d0181a" fill-rule="evenodd" d="M.625 0a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.5 0a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25M1.25 3.125a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0M3.125 2.5a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m0 8.75a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m-1.875.625a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0M.625 13.75a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m3.125.625a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0M1.875 12.5a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25M2.5 1.875a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m.069 5.65L3.75 8.75V10l.027.058-1.845-1.847L.274 10H0V8.75l1.24-1.232L0 6.278V5h.136l1.779 1.846 1.787-1.778L3.75 5v1.25zM1.875 3.75a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m.625 6.875a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0" clip-rule="evenodd"/><path fill="#8f181a" fill-rule="evenodd" d="M0 0h1.25v1.25H0zm1.25 2.5H0v1.25h1.25zM0 5h1.25v1.25H0zm1.25 3.75H0V10h1.25zM0 11.25h1.25v1.25H0zm1.25 2.5H0V15h1.25zm2.5 0H2.5V15h1.25zM3.75 0H2.5v1.25h1.25z" clip-rule="evenodd" opacity=".4"/></g><defs><clipPath id="fp_BY_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_BY_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#73be4a" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#af0100" fill-rule="evenodd" d="M0 0v16h32V0z" clip-rule="evenodd"/><path fill="#f7fcff" d="M0 0h6v24H0z"/><path fill="#b20000" fill-rule="evenodd" d="M.444 2.236 1.897.056l1.415 2.18-1.415 2.08zm1.447 1.19.815-1.197L1.89.975 1.056 2.23zM2 2.064h-.25v.516H2zM1.137 4.186l-.693.99.693.946.675-.945zm.324 1.007-.312.424-.316-.449.315-.465zM2.637 4.186l-.693.99.693.946.675-.945zm.324 1.007-.312.424-.316-.449.315-.465z" clip-rule="evenodd"/><path fill="#b20000" fill-rule="evenodd" d="m3.637 4.186-.693.99.693.946.675-.945zm.324 1.007-.312.424-.316-.449.315-.465zM5.137 4.186l-.693.99.693.946.675-.945zm.324 1.007-.312.424-.316-.449.315-.465zM2.944 2.236 4.397.056l1.415 2.18-1.415 2.08zm1.447 1.19.815-1.197L4.39.975 3.556 2.23zM4.5 2.064h-.25v.516h.25z" clip-rule="evenodd"/><path fill="#b20000" d="M1.656 12.406.037 9.687l.426-.27 1.174 1.97 1.432-2.631 1.468 2.638 1.037-1.721.424.272L4.52 12.4 3.074 9.8z"/><path fill="#b20000" fill-rule="evenodd" d="M.75.516h.269v.516H.75zM3 0h.269v.516H3zM5.25.516h.269v.516H5.25zM.75 3.613H1v.516H.75zm2.25 0h.25v.516H3zm2.5 0h-.25v.516h.25zM.75 6.194H1v.516H.75zm2.25 0h.25v.516H3zm2.5 0h-.25v.516h.25z" clip-rule="evenodd"/><path fill="#b20000" fill-rule="evenodd" d="m2.208 8.955-.664.968L.496 8.036l1.38-2.156 1.187 1.88 1.186-1.88 1.38 2.156-1.048 1.887-.664-.968.525-1.09-.193-.444L3.13 9.24v.215l-.066-.108-.067.108v-.215L1.876 7.42l-.192.443zM3 10.58h.25v.517H3zm0 2.581h.25v.516H3zm0-1.806h-.25v.516H3v.258h-.25v.516H3v-.258h.25v.258h.25v-.516h-.25v-.258h.25v-.516h-.25v.516H3zm-.75.516h.25v.516h-.25zm1.75 0h-.25v.516H4zm-3.5 0h.25v.516H.5zm5.25 0H5.5v.516h.25zM.444 21.764l1.453 2.18 1.415-2.18-1.415-2.08zm1.447-1.19.815 1.197-.815 1.254-.835-1.254zM2 21.936h-.25v-.516H2zM1.137 19.814l-.693-.99.693-.946.675.945zm.324-1.007-.312-.424-.316.449.315.465zM2.637 19.814l-.693-.99.693-.946.675.945zm.324-1.007-.312-.424-.316.449.315.465z" clip-rule="evenodd"/><path fill="#b20000" fill-rule="evenodd" d="m3.637 19.814-.693-.99.693-.946.675.945zm.324-1.007-.312-.424-.316.449.315.465zM5.137 19.814l-.693-.99.693-.946.675.945zm.324-1.007-.312-.424-.316.449.315.465zM2.944 21.764l1.453 2.18 1.415-2.18-1.415-2.08zm1.447-1.19.815 1.197-.815 1.254-.835-1.254zm.109 1.361h-.25v-.516h.25z" clip-rule="evenodd"/><path fill="#b20000" d="M1.656 11.594.037 14.313l.426.27 1.174-1.97 1.432 2.631 1.468-2.638 1.037 1.721.424-.272L4.52 11.6l-1.446 2.6z"/><path fill="#b20000" fill-rule="evenodd" d="M.75 23.484h.269v-.516H.75zM3 24h.269v-.516H3zM5.25 23.484h.269v-.516H5.25zM.75 20.387H1v-.516H.75zm2.25 0h.25v-.516H3zm2.5 0h-.25v-.516h.25zM.75 17.807H1v-.517H.75zm2.25 0h.25v-.517H3zm2.5 0h-.25v-.517h.25z" clip-rule="evenodd"/><path fill="#b20000" fill-rule="evenodd" d="m2.208 15.193-.664-.968L.496 16.11l1.38 2.156 1.187-1.879 1.186 1.88 1.38-2.157-1.048-1.886-.664.968.525 1.09-.193.443-1.12-1.817v-.215l-.066.107-.067-.107v.215l-1.12 1.817-.192-.443z" clip-rule="evenodd"/></g><defs><clipPath id="fp_BY_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagBY',
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
