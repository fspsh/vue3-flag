import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_TF_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_TF_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TF_smb)"><path fill="#f7fcff" d="M9.394 3.1h4.025l-.393.752h-1.22v.404h.936l-.382.7h-.554v1.399l.913-1.44 1.183 2.047h-.483l-.17-.224h-1.07l-.752 1.39v.077l-.02-.038-.021.038V8.13l-.753-1.39h-1.07l-.169.223h-.483l1.183-2.047.913 1.44V3.852h-1.22zm3.349 2.655-.263.404h.497zm-2.673 0 .263.404h-.497zm-1.913-.448L8.572 5l.416.307-.147-.514.404-.324-.506-.01-.167-.507-.166.506-.506.011.403.324zM14.227 5l-.415.307.147-.514-.404-.324.507-.01.166-.507.166.506.506.011-.403.324.146.514zM12.54 8.902l.415-.307.416.307-.147-.514.404-.324-.507-.01-.166-.507-.166.506-.506.011.403.324zm-2.695-.307-.416.307.147-.514-.404-.324.507-.01.166-.507.166.506.506.011-.403.324.146.514zm1.14 1.505.415-.306.415.306-.146-.513.403-.324-.506-.011-.166-.507-.166.507-.506.01.403.325z"/><path fill="#f50100" d="M4 0h2v5H4z"/><path fill="#2e42a5" d="M0 0h2v5H0z"/><path fill="#f7fcff" d="M2 0h2v5H2z"/></g></g><defs><clipPath id="fp_TF_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_TF_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_TF_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TF_mdb)"><path fill="#f7fcff" d="M11.743 3.875h5.03l-.49.94h-1.526v.505h1.17l-.477.874h-.693v1.75l1.142-1.8 1.478 2.559h-.604l-.21-.28h-1.338l-.941 1.738v.096l-.026-.048-.026.048v-.096l-.94-1.738h-1.338l-.211.28h-.604l1.478-2.56 1.142 1.8V4.815h-1.526zm4.185 3.318-.328.505h.622zm-3.34 0 .328.505h-.621zm-2.392-.56.52-.383.519.383-.183-.641.504-.405-.633-.014-.208-.633-.207.633-.633.014.504.405zm7.589-.383-.52.383.183-.641-.504-.405.633-.014.208-.633.207.633.633.014-.504.405.183.641zm-2.11 4.877.519-.383.52.383-.184-.642.504-.405-.632-.013-.208-.634-.208.634-.632.013.504.405zm-3.369-.383-.52.383.184-.642-.504-.405.632-.013.208-.634.208.634.632.013-.504.405.183.642zm1.425 1.881.519-.383.52.383-.184-.642.504-.405-.632-.013-.208-.634-.208.634-.632.013.504.405z"/><path fill="#f50100" d="M5 0h2.5v6.25H5z"/><path fill="#2e42a5" d="M0 0h2.5v6.25H0z"/><path fill="#f7fcff" d="M2.5 0H5v6.25H2.5z"/></g></g><defs><clipPath id="fp_TF_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_TF_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#2e42a5" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_TF_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_TF_lgb)"><path fill="#f7fcff" d="M18.789 6.2h8.048l-.784 1.504h-2.442v.808h1.872l-.762 1.4h-1.11v2.797L25.44 9.83l2.364 4.095h-.966l-.337-.449h-2.14l-1.506 2.781v.154l-.041-.077-.042.077v-.154l-1.504-2.78h-2.14l-.338.448h-.966l2.364-4.095 1.828 2.88V7.703h-2.442zm6.697 5.31-.526.807h.995zm-5.346 0 .526.807h-.995zm-3.826-.897.83-.612.832.612-.293-1.026.806-.648-1.012-.022-.332-1.014-.333 1.014-1.012.022.807.648zm12.141-.612-.83.612.293-1.026-.807-.648 1.012-.022.332-1.014.333 1.014 1.012.022-.807.648.293 1.026zm-3.375 7.802.83-.612.831.612-.293-1.026.807-.648-1.012-.022-.332-1.013-.333 1.013-1.012.022.807.648zm-5.39-.612-.831.612.293-1.026-.807-.648 1.012-.022.333-1.013.332 1.013 1.012.022-.806.648.293 1.026zm2.279 3.009.831-.613.831.613-.293-1.027.807-.648-1.012-.022-.333-1.013-.332 1.013-1.013.022.807.648z"/><path fill="#f50100" d="M8 0h4v10H8z"/><path fill="#2e42a5" d="M0 0h4v10H0z"/><path fill="#f7fcff" d="M4 0h4v10H4z"/></g></g><defs><clipPath id="fp_TF_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagTF',
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
