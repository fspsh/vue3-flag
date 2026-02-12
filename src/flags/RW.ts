import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_RW_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/><mask id="fp_RW_smb" width="16" height="12" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v12h16V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_RW_smb)"><path fill="#3ca5d9" d="M0 0v7h16V0z"/><path fill="#5a962a" d="M0 9v3h16V9z"/><path fill="#ffdc17" d="M12.04 5.933h-.092l-.302.987-.064-1.028-.09-.021-.524.89.177-1.014-.085-.041-.715.745.408-.944-.073-.06-.87.561.617-.824q-.03-.037-.058-.076l-.975.347.79-.66-.038-.089-1.028.116.922-.462-.017-.095-1.026-.122 1.004-.24.006-.096-.97-.353 1.032-.003.028-.094-.86-.563 1.005.232.05-.085-.706-.745.924.456q.033-.037.068-.07l-.513-.887.793.654.082-.053-.293-.98.62.818.092-.033-.057-1.02.413.938.097-.011L11.995 1l.183 1.009q.048.003.096.01l.413-.939-.057 1.024q.045.014.09.032l.622-.82-.294.984q.04.024.08.052l.797-.657-.516.89.065.07.929-.459-.71.75q.025.04.048.081l1.01-.233-.865.567.027.09 1.038.003-.975.355.005.093 1.011.24-1.033.123-.016.092.928.465-1.034-.116-.037.084.795.665-.98-.35-.056.074.62.83-.874-.565-.07.059.41.948-.719-.748-.082.041.178 1.017-.525-.892-.09.021-.064 1.03zm-.067-.726c.7 0 1.268-.559 1.268-1.25 0-.69-.568-1.249-1.268-1.249s-1.268.56-1.268 1.25.568 1.25 1.268 1.25m.73-1.213a.715.715 0 1 1-1.43 0 .715.715 0 0 1 1.43 0"/></g></g><defs><clipPath id="fp_RW_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_RW_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/><mask id="fp_RW_mdb" width="20" height="15" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v15h20V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_RW_mdb)"><path fill="#3ca5d9" d="M0 0v8.75h20V0z"/><path fill="#5a962a" d="M0 11.25V15h20v-3.75z"/><path fill="#ffdc17" d="M15.051 7.416h-.116l-.377 1.234-.08-1.285-.114-.026-.654 1.112.221-1.267-.105-.052-.895.932.51-1.18-.091-.076-1.087.702.77-1.03-.072-.096-1.218.435.988-.826-.049-.11-1.284.144 1.152-.577-.022-.12-1.282-.152 1.255-.298.007-.122-1.21-.44 1.288-.004q.016-.06.036-.118l-1.075-.704 1.256.29.062-.106-.882-.93 1.155.569q.041-.045.085-.089L12.58 2.12l.992.817q.05-.034.102-.066l-.366-1.225.775 1.023q.057-.022.115-.042l-.071-1.276.516 1.173q.06-.008.12-.013l.23-1.26.228 1.26.12.015.517-1.175-.071 1.28q.056.018.113.04l.777-1.025-.368 1.23q.05.03.1.065l.996-.821-.645 1.113q.042.042.081.086l1.162-.572-.888.936.06.102 1.264-.292-1.083.71q.019.054.034.112l1.298.004-1.22.443q.006.059.007.117l1.264.3-1.291.154-.02.114 1.16.581-1.293-.145-.047.106.995.83-1.226-.436-.07.092.775 1.036-1.091-.705q-.044.038-.089.073l.513 1.186-.898-.935-.103.051.222 1.271-.656-1.114-.112.026-.08 1.287zm-.085-.907c.876 0 1.585-.699 1.585-1.562 0-.862-.71-1.562-1.585-1.562s-1.585.7-1.585 1.562.71 1.562 1.585 1.562m.912-1.516a.893.893 0 1 1-1.787 0 .893.893 0 0 1 1.787 0"/></g></g><defs><clipPath id="fp_RW_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_RW_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#feca00" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/><mask id="fp_RW_lgb" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" fill-rule="evenodd" d="M0 0v24h32V0z" clip-rule="evenodd"/></mask><g fill-rule="evenodd" clip-rule="evenodd" mask="url(#fp_RW_lgb)"><path fill="#3ca5d9" d="M0 0v14h32V0z"/><path fill="#5a962a" d="M0 18v6h32v-6z"/><path fill="#ffdc17" d="M24.082 11.866a4 4 0 0 1-.185 0l-.605 1.974-.128-2.056a4 4 0 0 1-.182-.042l-1.047 1.78.355-2.027a4 4 0 0 1-.17-.083l-1.43 1.49.816-1.888a4 4 0 0 1-.146-.12l-1.739 1.122 1.233-1.649q-.06-.075-.116-.152l-1.95.695 1.581-1.32a4 4 0 0 1-.078-.177l-2.055.23 1.844-.923a4 4 0 0 1-.035-.19l-2.05-.245 2.007-.477q.003-.098.011-.195l-1.937-.705 2.062-.006q.027-.095.057-.188l-1.72-1.127 2.01.464q.046-.085.099-.169l-1.412-1.49 1.849.912q.066-.073.135-.142L20.13 3.39l1.587 1.308q.081-.054.164-.106l-.586-1.96 1.24 1.636q.09-.034.184-.066l-.114-2.042.826 1.877q.096-.013.193-.021L23.99 2l.367 2.017q.096.009.191.022l.827-1.879-.114 2.047q.091.03.181.065l1.243-1.64-.588 1.967q.08.051.16.105l1.593-1.314-1.032 1.781q.067.067.13.138l1.859-.916-1.42 1.498q.05.08.095.163l2.022-.467-1.731 1.135.054.18 2.077.006-1.951.71q.007.093.01.186l2.022.481-2.066.246q-.014.092-.032.183l1.856.93-2.068-.233a4 4 0 0 1-.075.17l1.59 1.329-1.96-.699q-.054.075-.111.147l1.24 1.658-1.747-1.128q-.07.06-.142.117l.82 1.898-1.436-1.496q-.082.043-.165.082l.355 2.033-1.049-1.783q-.088.022-.18.042l-.128 2.059zm-.136-1.451c1.4 0 2.536-1.12 2.536-2.5s-1.135-2.498-2.536-2.498c-1.4 0-2.536 1.118-2.536 2.499 0 1.38 1.135 2.499 2.536 2.499m1.459-2.426a1.43 1.43 0 1 1-2.859 0 1.43 1.43 0 0 1 2.859 0"/></g></g><defs><clipPath id="fp_RW_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagRW',
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
