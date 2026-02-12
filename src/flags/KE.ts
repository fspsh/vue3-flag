import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: `<svg fill="none" viewBox="0 0 16 12"><g clip-path="url(#fp_KE_sma)"><path fill="#fff" d="M0 0h16v12H0z"/><path fill="#0067c3" fill-rule="evenodd" d="M0 0h16v12H0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 0v4h16V0z" clip-rule="evenodd"/><path fill="#4e8b1d" fill-rule="evenodd" d="M0 8v4h16V8z" clip-rule="evenodd"/><path fill="#e31d1c" stroke="#f7fcff" d="M0 3.5h-.5v5h17v-5H0Z"/><ellipse cx="8" cy="6" fill="#ac2317" rx="2" ry="4"/><path fill="#fff" d="M9.812 2.015q.17-.308.92-.673a.07.07 0 0 1 .056 0c.03.012.043.044.028.07l-5.179 9.314-.27-.116L9.932 2.4q-.309-.045-.12-.385"/><path fill="#fff" d="M6.183 2.015q.189.341-.12.385l4.564 8.21-.27.116L5.18 1.412c-.015-.026-.003-.058.027-.07a.07.07 0 0 1 .056 0q.75.366.92.673"/><path fill="#000" fill-rule="evenodd" d="M9.692 8.133A7.2 7.2 0 0 0 10 6c0-.784-.113-1.515-.308-2.133A3.66 3.66 0 0 0 9 6c0 .784.254 1.515.692 2.133M6.308 8.133A3.66 3.66 0 0 0 7 6c0-.784-.254-1.515-.692-2.133A7.2 7.2 0 0 0 6 6c0 .784.113 1.515.308 2.133" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M8.12 5.7c.274-.17.48-.914.48-1.805s-.206-1.635-.48-1.806zm-.3-.047c-.243-.235-.42-.933-.42-1.758s.177-1.523.42-1.758zm0 .747v3.516c-.243-.235-.42-.933-.42-1.758s.177-1.523.42-1.758m.3 3.563v-3.61c.274.17.48.914.48 1.805s-.206 1.635-.48 1.805" clip-rule="evenodd"/><path fill="#f7fcff" d="M8 5.737c.331 0 .6.235.6.526 0 .29-.269.526-.6.526s-.6-.235-.6-.526c0-.29.269-.526.6-.526"/></g><defs><clipPath id="fp_KE_sma"><path fill="#fff" d="M0 0h16v12H0z"/></clipPath></defs></svg>`,
  md: `<svg fill="none" viewBox="0 0 20 15"><g clip-path="url(#fp_KE_mda)"><path fill="#fff" d="M0 0h20v15H0z"/><path fill="#0067c3" fill-rule="evenodd" d="M0 0h20v15H0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 0v5h20V0z" clip-rule="evenodd"/><path fill="#4e8b1d" fill-rule="evenodd" d="M0 10v5h20v-5z" clip-rule="evenodd"/><path fill="#e31d1c" stroke="#f7fcff" stroke-width="1.25" d="M0 4.375h-.625v6.25h21.25v-6.25H0Z"/><ellipse cx="10" cy="7.5" fill="#ac2317" rx="2.5" ry="5"/><path fill="#fff" d="M12.265 2.52q.213-.387 1.15-.842a.09.09 0 0 1 .07-.002c.038.016.053.056.035.089L7.046 13.407l-.337-.144L12.416 3q-.389-.055-.151-.48"/><path fill="#fff" d="M7.728 2.52q.237.424-.15.48l5.706 10.263-.337.144L6.473 1.765c-.018-.033-.003-.073.035-.089a.09.09 0 0 1 .07.002q.937.456 1.15.841"/><path fill="#000" fill-rule="evenodd" d="M12.115 10.166c.244-.772.385-1.686.385-2.666s-.141-1.894-.385-2.666A4.58 4.58 0 0 0 11.25 7.5c0 .98.317 1.894.865 2.666M7.885 4.834C7.64 5.606 7.5 6.52 7.5 7.5s.141 1.894.385 2.666A4.58 4.58 0 0 0 8.75 7.5a4.58 4.58 0 0 0-.865-2.666" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M10.15 7.125c.342-.213.6-1.143.6-2.257s-.258-2.043-.6-2.256zm-.375-.06C9.471 6.773 9.25 5.9 9.25 4.869c0-1.03.22-1.903.525-2.197zm0 .935v4.395c-.304-.294-.525-1.167-.525-2.198S9.47 8.294 9.775 8m.375 4.454c.342-.213.6-1.143.6-2.257s-.258-2.043-.6-2.256z" clip-rule="evenodd"/><path fill="#f7fcff" d="M10 7.171c.414 0 .75.295.75.658s-.336.658-.75.658-.75-.295-.75-.658.336-.658.75-.658"/></g><defs><clipPath id="fp_KE_mda"><path fill="#fff" d="M0 0h20v15H0z"/></clipPath></defs></svg>`,
  lg: `<svg fill="none" viewBox="0 0 32 24"><g clip-path="url(#fp_KE_lga)"><path fill="#fff" d="M0 0h32v24H0z"/><path fill="#0067c3" fill-rule="evenodd" d="M0 0h32v24H0z" clip-rule="evenodd"/><path fill="#272727" fill-rule="evenodd" d="M0 0v8h32V0z" clip-rule="evenodd"/><path fill="#4e8b1d" fill-rule="evenodd" d="M0 16v8h32v-8z" clip-rule="evenodd"/><path fill="#e31d1c" stroke="#f7fcff" stroke-width="2" d="M0 7h-1v10h34V7H0Z"/><ellipse cx="16" cy="12" fill="#ac2317" rx="4" ry="8"/><path fill="#fff" d="M19.623 4.03q.343-.615 1.842-1.345a.14.14 0 0 1 .111-.003c.06.026.085.09.056.141L11.274 21.452l-.54-.231 9.13-16.42q-.62-.09-.24-.77"/><path fill="#fff" d="M12.366 4.03q.379.682-.242.77l9.13 16.42-.54.232L10.358 2.823c-.03-.052-.004-.115.056-.14a.14.14 0 0 1 .11.002q1.5.73 1.843 1.346"/><path fill="#000" fill-rule="evenodd" d="M19.385 16.266C19.775 15.03 20 13.567 20 12s-.226-3.03-.615-4.265C18.508 8.969 18 10.432 18 12s.508 3.03 1.385 4.265M12.615 7.735C12.225 8.969 12 10.432 12 12s.226 3.03.615 4.265C13.492 15.032 14 13.569 14 12s-.508-3.03-1.385-4.265" clip-rule="evenodd"/><path fill="#f7fcff" fill-rule="evenodd" d="M16.24 11.4c.548-.341.96-1.828.96-3.61 0-1.783-.412-3.27-.96-3.611zm-.6-.095c-.487-.47-.84-1.866-.84-3.516s.353-3.046.84-3.515zm0 1.495v7.031c-.487-.469-.84-1.866-.84-3.515s.353-3.046.84-3.516m.358 7.2h.004zm.242-.074v-7.22c.548.34.96 1.828.96 3.61s-.412 3.269-.96 3.61" clip-rule="evenodd"/><path fill="#f7fcff" d="M16 11.474c.663 0 1.2.471 1.2 1.052s-.537 1.053-1.2 1.053-1.2-.471-1.2-1.053c0-.581.537-1.052 1.2-1.052"/></g><defs><clipPath id="fp_KE_lga"><path fill="#fff" d="M0 0h32v24H0z"/></clipPath></defs></svg>`
} as const

export default defineComponent({
  name: 'FlagKE',
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
