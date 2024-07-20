import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeProvider'

export default function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('No theme context. Contact the support team!')
  }

  return context
}
