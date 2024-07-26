import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface ButtonProps {
  onClick: () => void
  secondary?: boolean
  disabled?: boolean
}

export default function Button({
  onClick,
  secondary,
  disabled,
  children,
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={clsx(
        'rounded-lg border-[2px] px-2 py-1 outline-none duration-100 disabled:opacity-50',
        secondary
          ? 'border-yellow-400 bg-white dark:border-red-800 dark:bg-slate-800'
          : 'border-gray-200 bg-gray-200 dark:border-slate-600 dark:bg-slate-600',
        !disabled && 'active:scale-95',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
