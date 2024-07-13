import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

interface ButtonProps {
  onClick: () => void
  secondary?: boolean
  disabled?: boolean
}

export default class Button extends React.Component<
  PropsWithChildren<ButtonProps>
> {
  constructor(props: PropsWithChildren<ButtonProps>) {
    super(props)
  }

  render() {
    return (
      <button
        className={clsx(
          'py-1 px-2 border-[2px] rounded-lg duration-100 outline-none disabled:opacity-50',
          this.props.secondary
            ? 'bg-white border-yellow-400'
            : 'bg-gray-200 border-gray-200',
          !this.props.disabled && 'active:scale-95',
        )}
        disabled={this.props.disabled}
        onClick={this.props.onClick}
      >
        {this.props.children}
      </button>
    )
  }
}
