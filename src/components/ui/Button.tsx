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
        'py-1 px-2 border-[2px] rounded-lg duration-100 outline-none disabled:opacity-50',
        secondary
          ? 'bg-white border-yellow-400'
          : 'bg-gray-200 border-gray-200',
        !disabled && 'active:scale-95',
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
