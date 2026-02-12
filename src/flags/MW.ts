import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_MW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_MW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_MW_smb)"><path fill="#272727" d="M0 0v5h16V0z"/><path fill="#5eaa22" d="M0 8v4h16V8z"/><path fill="#e11c1b" d="M2 6.973v-.001h-.004zm.315-1.91h.051l-.078-.012zm1.464 0q.039-.075.082-.149l-1.145-.758 1.35.44q.114-.159.243-.307l-.992-.945 1.264.66q.14-.133.291-.255L4.07 2.641l1.133.867a5 5 0 0 1 .327-.2l-.578-1.24.957 1.051q.171-.076.35-.14l-.325-1.333.741 1.202q.179-.048.364-.083l-.054-1.378.493 1.312a6 6 0 0 1 .37-.027L8.07 1.3l.224 1.372q.186.008.369.028l.493-1.313-.054 1.38q.183.035.362.083l.743-1.204-.326 1.336q.178.064.348.14l.96-1.054-.58 1.245q.167.093.324.198l1.138-.87-.806 1.113q.15.12.288.253l1.271-.663-.997.95q.127.147.24.304l1.358-.442-1.152.763.08.144h-.983c-.677-.938-1.915-1.566-3.33-1.566-1.414 0-2.651.628-3.328 1.566zm1.5 0c.642-.661 1.65-1.087 2.782-1.087s2.14.426 2.781 1.087zm8.495 0h.052l.027-.012zm.367 1.909h.004z"/></g></g><defs><clipPath id="fp_MW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_MW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_MW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_MW_mdb)"><path fill="#272727" d="M0 0v6h20V0z"/><path fill="#5eaa22" d="M0 10v5h20v-5z"/><path fill="#e11c1b" d="M2.501 8.666v-.001h-.006zm.393-2.387h.064l-.098-.015zm1.83 0q.048-.095.102-.186l-1.43-.948 1.687.55a5 5 0 0 1 .303-.384l-1.24-1.18 1.58.824a6 6 0 0 1 .364-.319L5.087 3.251l1.417 1.083q.198-.13.408-.248l-.722-1.55 1.196 1.313q.215-.095.438-.176l-.407-1.665.927 1.502q.224-.06.455-.104L8.73 1.684l.616 1.64q.228-.025.462-.034l.28-1.715.278 1.715q.234.01.461.035l.617-1.641-.068 1.724q.231.045.453.105l.929-1.505-.408 1.669q.222.08.435.176l1.2-1.317-.725 1.555q.21.117.405.248L15.09 3.25 14.08 4.643q.189.15.36.316l1.59-.829-1.248 1.187q.16.185.3.38l1.698-.552-1.44.954q.052.09.1.18h-1.229c-.846-1.173-2.393-1.958-4.16-1.958-1.769 0-3.316.785-4.162 1.958zm1.876 0c.802-.827 2.06-1.36 3.476-1.36s2.675.533 3.477 1.36zm10.618 0h.064l.035-.015zm.458 2.386h.005l-.005.001z"/></g></g><defs><clipPath id="fp_MW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_MW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#e11c1b" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_MW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_MW_lgb)"><path fill="#272727" d="M0 0v10h32V0z"/><path fill="#5eaa22" d="M0 16v8h32v-8z"/><path fill="#e11c1b" d="M4.002 11.946v-.002l-.01.001zm.628-3.82h.103l-.158-.023zm2.928 0q.078-.15.164-.298l-2.29-1.515 2.7.878q.227-.317.486-.614L6.633 4.688l2.529 1.32q.279-.265.583-.51L8.14 3.281l2.266 1.734q.317-.21.654-.397L9.904 2.137l1.914 2.102q.343-.154.7-.282l-.65-2.665 1.483 2.404q.357-.096.727-.167L13.97.774l.986 2.624q.365-.04.739-.054L16.14.6l.447 2.744q.372.016.737.056l.987-2.626-.109 2.76q.369.07.726.167l1.485-2.409-.652 2.671q.355.129.696.282l1.92-2.108-1.16 2.49q.335.186.648.395l2.276-1.74-1.612 2.226q.3.243.577.506l2.542-1.326-1.995 1.9q.255.294.48.608l2.716-.883-2.304 1.525q.083.142.159.289H22.74c-1.354-1.877-3.83-3.134-6.658-3.134S10.778 6.25 9.424 8.127zm3.002 0c1.283-1.322 3.297-2.175 5.562-2.175s4.28.853 5.562 2.176zm16.989 0h.103l.055-.023zm.733 3.818.008.001h-.008z"/></g></g><defs><clipPath id="fp_MW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagMW',
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
