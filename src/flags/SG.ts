import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_SG_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_SG_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_SG_smb)"><path fill="#e31d1c" d="M0 0v6h16V0z"/><path fill="#f1f9ff" d="M4.434 5.295s-1.413-.568-1.413-2.108 1.413-2.09 1.413-2.09c-.686-.173-2.509-.018-2.509 2.09s1.795 2.505 2.51 2.108m.362-.255.406-.244.414.244-.102-.477.337-.377h-.456l-.193-.446-.194.446-.457.02.338.357zm1.879-.272-.406.245.093-.477-.338-.358.457-.02.194-.445.193.446h.456l-.336.377.1.477zM5.644 2.885l.405-.245.414.245-.101-.478.337-.376h-.457l-.193-.446-.193.446-.457.02.337.356zm-.96.726-.404.245.092-.477-.337-.358.457-.02.193-.445.193.446h.457l-.337.377.101.477zm2.275.223.405-.245.414.245-.101-.477.337-.377h-.457l-.193-.446-.193.446-.457.02.337.357z"/></g></g><defs><clipPath id="fp_SG_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_SG_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_SG_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_SG_mdb)"><path fill="#e31d1c" d="M0 0v7.5h20V0z"/><path fill="#f1f9ff" d="M5.543 6.619s-1.766-.71-1.766-2.635 1.766-2.612 1.766-2.612c-.859-.217-3.136-.023-3.136 2.612S4.65 7.115 5.543 6.619m.452-.319.507-.305.518.305-.127-.596.42-.471h-.57l-.241-.558-.242.558-.571.024.422.447zm2.348-.34-.506.306.115-.597-.422-.446.572-.024.241-.558.242.558h.57l-.42.47.126.597zM7.054 3.606l.507-.306.518.306-.127-.597.421-.47h-.57L7.56 1.98l-.242.557-.57.025.421.446zm-1.198.908-.507.306.116-.597-.422-.446.571-.025.242-.557.242.557h.57l-.42.471.126.597zm2.842.279.507-.306.518.306-.127-.597.421-.471h-.57l-.242-.557-.242.557-.57.024.421.447z"/></g></g><defs><clipPath id="fp_SG_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_SG_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_SG_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_SG_lgb)"><path fill="#e31d1c" d="M0 0v12h32V0z"/><path fill="#f1f9ff" d="M8.868 10.59S6.043 9.453 6.043 6.374s2.825-4.179 2.825-4.179c-1.373-.347-5.017-.037-5.017 4.179s3.589 5.01 5.017 4.216m.724-.51.811-.489.829.49-.203-.955.673-.754h-.912l-.387-.891-.387.891-.914.039.675.715zm3.757-.543-.81.489.185-.955-.675-.715.914-.038.386-.892.387.892h.912l-.673.753.203.955zM11.287 5.77l.81-.49.83.49-.203-.955.673-.753h-.912l-.387-.892-.387.892-.914.038.675.715zM9.37 7.223l-.81.489.184-.955-.675-.715.914-.038.387-.892.387.892h.912l-.673.753.202.955zm4.548.445.81-.49.829.49-.203-.955.673-.753h-.912l-.387-.892-.386.892-.915.039.675.714z"/></g></g><defs><clipPath id="fp_SG_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagSG',
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
