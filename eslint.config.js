import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import astro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default defineConfig(
  globalIgnores(['.astro/', 'dist/', '.wrangler/']),
  js.configs.recommended,
  tseslint.configs.recommended,
  astro.configs.recommended,
  astro.configs['jsx-a11y-recommended']
)
