import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_LB_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#f50101" fill-rule="evenodd" d="M16 0H0v3h16zm0 9H0v3h16z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 3h16v6H0z" clip-rule="evenodd"/><path fill="#52ab0b" fill-rule="evenodd" d="M10.757 6.257c.038.433-1.563-.18-1.563-.007 0 .174 1.715.479 1.712.868-.003.388-2.033-.111-1.578.063.455.175 1.433.594 1.322.854-.238.557-1.813-.386-1.944-.2-.212.3 1.162 1 1.15 1.066-.022.128-.938-.201-1.15.065-.172-.049-.252-.28-.305-.311l-.339-4.362s.304 4.107-.084 4.225-1.466.477-1.497.298c-.012-.067 1.298-.681 1.086-.98-.156-.222-1.736.562-1.836.108-.45-.324 1.454-.604 1.454-.935s-1.741.392-1.533-.069c.208-.46 1.602-.626 1.628-.69.048-.116-1.55.182-1.55 0 0-.344.957-.411 1.55-.72.035-.354-1.44.347-1.55.064-.109-.283 1.886-1.016 1.837-1.074-.077-.09-1.685.317-1.42.104.515-.415 1.52-.98 1.75-1.13 0 0 .028-.057.058-.038l.063-.04s0 .355-.005.078 2.355.935 2.382 1.243c.03.359-1.459-.27-1.424.082.303.188 1.164.55 1.52.71.161.073-1.189-.153-1.16-.042.072.282 1.388.317 1.426.77" clip-rule="evenodd"/></g><defs><clipPath id="fp_LB_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_LB_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#f50101" fill-rule="evenodd" d="M20 0H0v3.75h20zm0 11.25H0V15h20z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 3.75h20v7.5H0z" clip-rule="evenodd"/><path fill="#52ab0b" fill-rule="evenodd" d="M13.447 7.82c.046.543-1.954-.224-1.954-.007s2.143.598 2.14 1.084c-.004.486-2.542-.139-1.973.08.57.218 1.791.741 1.652 1.067-.296.696-2.266-.483-2.43-.25-.264.375 1.454 1.249 1.44 1.333-.029.16-1.174-.252-1.44.08-.215-.06-.314-.35-.381-.388l-.423-5.452s.38 5.133-.105 5.28-1.832.597-1.872.373c-.014-.084 1.622-.851 1.358-1.226-.195-.276-2.17.703-2.296.136-.561-.405 1.818-.755 1.818-1.169s-2.176.49-1.916-.086 2.003-.782 2.035-.862c.06-.146-1.937.227-1.937 0 0-.43 1.195-.514 1.937-.901.044-.442-1.8.434-1.937.08-.137-.353 2.357-1.27 2.296-1.341-.096-.113-2.106.396-1.775.128.643-.518 1.9-1.223 2.188-1.412 0 0 .035-.07.072-.046.037-.025.078-.05.078-.05s0 .443-.006.096c-.006-.346 2.944 1.17 2.977 1.554.039.449-1.822-.338-1.779.103.379.234 1.455.688 1.9.888.201.09-1.486-.192-1.45-.053.09.353 1.734.396 1.783.962" clip-rule="evenodd"/></g><defs><clipPath id="fp_LB_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_LB_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#f50101" fill-rule="evenodd" d="M32 0H0v6h32zm0 18H0v6h32z" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M0 6h32v12H0z" clip-rule="evenodd"/><path fill="#52ab0b" fill-rule="evenodd" d="M21.515 12.513c.074.868-3.126-.36-3.126-.012 0 .347 3.428.957 3.423 1.734-.006.777-4.066-.222-3.155.128.91.35 2.865 1.186 2.643 1.708-.475 1.113-3.626-.773-3.889-.4-.423.599 2.326 1.998 2.303 2.131-.045.257-1.877-.402-2.303.13-.344-.097-.503-.56-.61-.622l-.676-8.723s.607 8.213-.169 8.45c-.776.235-2.931.954-2.994.595-.023-.134 2.595-1.362 2.172-1.962-.311-.442-3.471 1.126-3.673.218-.898-.647 2.909-1.208 2.909-1.87s-3.483.784-3.066-.138c.416-.922 3.205-1.252 3.257-1.38.095-.233-3.1.364-3.1 0 0-.687 1.912-.822 3.1-1.441.07-.707-2.88.695-3.1.129-.219-.566 3.771-2.033 3.673-2.147-.154-.18-3.37.634-2.84.206 1.03-.83 3.039-1.958 3.501-2.26 0 0 .056-.113.115-.074l.126-.08s0 .71-.01.155 4.71 1.87 4.763 2.486c.062.718-2.916-.542-2.846.164.605.376 2.327 1.101 3.039 1.42.323.146-2.378-.306-2.32-.084.145.565 2.775.635 2.853 1.54" clip-rule="evenodd"/></g><defs><clipPath id="fp_LB_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagLB',
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
