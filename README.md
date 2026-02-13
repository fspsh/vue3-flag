# vue3-flag 

[![npm version](https://img.shields.io/npm/v/vue3-flag?color=42b883&style=flat-square)](https://www.npmjs.com/package/vue3-flag) [![Vue Version](https://img.shields.io/badge/vue-3.5+-42b883?style=flat-square)](https://vuejs.org/) [![TypeScript](https://img.shields.io/badge/types-included-blue?style=flat-square)](https://www.typescriptlang.org/)

This library uses SVGs from [Flagpack](https://flagpack.xyz/) and is adapted to work with Vue 3.5+ and Nuxt 4+ (SSR-ready).

---

### Installation

```bash
# npm
npm install vue3-flag
```

## Usage

### First way: Static Imports 
Fully tree-shakable — only the flags you use are included in your final bundle.

```vue
<script setup>
import { FlagVN, FlagGB_SCT } from 'vue3-flag/flags'
</script>

<template>
    <FlagVN size="lg" />
    <FlagGB_SCT size="sm" />
</template>
```
**Naming Convention**: Each flag component follows the **Flag[ISO 3166 Alpha-2 code]** format (e.g., FlagVN, extra cases: FlagGB_SCT, FlagGB_WLS, FlagGB_ENG).


##

### Second way: Dynamic Component
Use the generic `Flag` component when the country code is determined at runtime (e.g., from an API response).


```vue
<script setup>
import { Flag } from 'vue3-flag'
</script>

<template>
    <Flag code="VN" size="lg" />
</template>
```
**Efficiency:** Only the flags you render are loaded. SVG chunks are fetched dynamically and cached for maximum performance.

> You can use ISO 3166-1 Alpha-2, Alpha-3 or Numeric codes here.

## Props

| Key | Value | Required | Default | Format |
| :--- | :--- | :--- | :--- | :--- |
| `code` | String | true* | - | ISO Alpha-2, Alpha-3 or Numeric |
| `size` | String | false | 'md' | 'sm', 'md' or 'lg' |
| `gradient` | String | false | 'none' | 'none', 'top-down', 'real-linear' or 'real-circular' |
| `hasShadow` | Boolean | false | false | - |
| `hasBorder` | Boolean | false | true | - |
| `hasBorderRadius` | Boolean | false | true | - |

> *If you import a specific flag component (e.g., `FlagPL`), the `code` prop is **not required** and is not available. 

## License [MIT](https://github.com/fspsh/vue3-flag/tree/main?tab=MIT-1-ov-file)

*Made with unnecessary attention to detail.*
*Enjoy.*

![enjoy](https://media1.tenor.com/m/TI_9VU9o6mEAAAAd/yuuri-girls-last-tour.gif)

