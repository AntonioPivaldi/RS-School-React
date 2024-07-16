import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

/// <reference types="vitest" />

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      include: ['src'],
      exclude: [
        'src/utils/constants',
        'src/utils/env',
        'src/utils/mocks',
        'src/main.tsx',
      ],
    },
  },
})
