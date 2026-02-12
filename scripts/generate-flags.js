import fs from 'fs-extra'
import path from 'path'
import { optimize } from 'svgo'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const srcDir = path.resolve(__dirname, '../src/svg')
const outDir = path.resolve(__dirname, '../src/flags')

const lazyFile = path.resolve(__dirname, '../src/runtime/lazy-registry.ts')
const indexFile = path.resolve(__dirname, '../src/index.ts')
const flagsEntryFile = path.resolve(__dirname, '../src/flags-entry.ts')
const typesFile = path.resolve(__dirname, '../src/types.ts')

const sizes = ['sm', 'md', 'lg']

function toSafeName(code) {
  return code.replace(/-/g, '_')
}

async function build() {
  console.log('🚀 Generating flags with proper types...')
  await fs.emptyDir(outDir)

  const codes = new Set()
  const flagData = {}

  for (const size of sizes) {
    const dir = path.join(srcDir, size)
    if (!await fs.pathExists(dir)) continue
    const files = await fs.readdir(dir)

    for (const file of files.filter(f => f.endsWith('.svg'))) {
      const code = file.replace('.svg', '').toUpperCase()
      codes.add(code)

      const raw = await fs.readFile(path.join(dir, file), 'utf-8')

      const result = optimize(raw, {
        plugins: [
          'preset-default',
          {
            name: 'prefixIds',
            params: { prefix: `fp_${toSafeName(code)}_${size}`, delim: '' }
          },
          { name: 'removeDimensions' },
          { name: 'removeXMLNS' }
        ]
      })

      if (!flagData[code]) flagData[code] = {}
      flagData[code][size] = result.data
    }
  }

  const sortedCodes = Array.from(codes).sort()
  const staticExports = []
  const lazyStatements = []

  for (const code of sortedCodes) {
    const data = flagData[code]
    const safeName = toSafeName(code)

    const content = `import { defineComponent, h, type PropType } from 'vue'
import FlagFrame from '../components/FlagFrame.vue'
import type { BaseFlagProps } from '../types'

const svg = {
  sm: \`${data.sm || data.md}\`,
  md: \`${data.md}\`,
  lg: \`${data.lg || data.md}\`
} as const

export default defineComponent({
  name: 'Flag${safeName}',
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
`

    await fs.writeFile(path.join(outDir, `${code}.ts`), content)

    staticExports.push(
      `export { default as Flag${safeName} } from './flags/${code}'`
    )

    lazyStatements.push(
      `  '${code}': () => import('../flags/${code}')`
    )
  }

  await fs.writeFile(indexFile, 
`export { default as Flag } from './components/Flag.vue'
export { default as FlagFrame } from './components/FlagFrame.vue'
export type { BaseFlagProps, FlagCode } from './types'
`)

  await fs.writeFile(flagsEntryFile,
`${staticExports.join('\n')}
export type { FlagCode } from './types'
`)

  await fs.ensureDir(path.dirname(lazyFile))
  await fs.writeFile(lazyFile,
`export const lazyRegistry: Record<string, () => Promise<any>> = {
${lazyStatements.join(',\n')}
}
`)

  await fs.writeFile(typesFile,
`export interface BaseFlagProps {
  size?: 'sm' | 'md' | 'lg'
  gradient?: 'none' | 'top-down' | 'real-linear' | 'real-circular'
  hasShadow?: boolean
  hasBorder?: boolean
  hasBorderRadius?: boolean
}

export type FlagCode = '${sortedCodes.join("' | '")}';
`)

  console.log(`✅ Done: ${codes.size} flags generated`)
}

build().catch(err => {
  console.error(err)
  process.exit(1)
})