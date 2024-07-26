import useTheme from '../utils/hooks/useTheme'
import Button from './ui/Button'

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button onClick={toggleTheme} secondary>
      You are on the <span data-testid="theme-switch">{theme}</span> side!
    </Button>
  )
}
