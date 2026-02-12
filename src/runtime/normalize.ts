import { countryCodeList } from '../utils/country-list'

export function normalizeCode(input: string | undefined | null): string {
  if (!input) return ''

  const value = input.toUpperCase().trim()

  if (value.length === 2) return value

  if (value === '000') {
    console.warn(
      `[vue3-flag] Ambiguous numeric code "000" detected. ` +
      `This code matches multiple subdivisions (like GB-ENG, BQ-SA, etc.). ` +
      `Please use Alpha-2 or Alpha-3/Custom codes instead. ` +
      `Check the source "country-list.ts" for all supported codes.`
    )
    return ''
  }

  const found = countryCodeList.find(
    c => c.alpha3 === value || c.numeric === value
  )

  if (found) {
    return found.alpha2
  }

  console.warn(
    `[vue3-flag] Unknown flag code: "${input}". ` +
    `Are you looking for subdivisions like "GB-ENG" (England) or "GB-SCT" (Scotland)? ` +
    `Check the source "country-list.ts" for all supported codes.`
  )
  
  return ''
}