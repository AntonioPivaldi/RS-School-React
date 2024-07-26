import { createContext, PropsWithChildren, useState } from 'react'
import { Themes } from '../utils/enums/themes'
import { THEME_KEY } from '../utils/constants'
import clsx from 'clsx'

export interface ThemeProviderProps {
  theme: Themes
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeProviderProps | null>(null)

export default function ThemeProvider({ children }: PropsWithChildren) {
  const initTheme = (localStorage.getItem(THEME_KEY) as Themes) || Themes.Light
  const [theme, setTheme] = useState(initTheme)

  function toggleTheme() {
    const newTheme = theme === Themes.Light ? Themes.Dark : Themes.Light
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className={clsx(
          `min-h-dvh bg-white duration-150 dark:bg-gray-800 dark:text-white`,
          theme.toLowerCase(),
        )}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
