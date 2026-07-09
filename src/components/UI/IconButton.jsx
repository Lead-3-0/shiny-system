import React from 'react'
import classNames from 'classnames'
import '../../styles/components/icon-button.css'

const IconButton = ({
  icon: Icon,
  onClick,
  variant = 'default',
  size = 'md',
  disabled = false,
  tooltip,
  className,
  ...props
}) => {
  return (
    <button
      className={classNames(
        'icon-button',
        `icon-button--${variant}`,
        `icon-button--${size}`,
        {
          'icon-button--disabled': disabled,
        },
        className
      )}
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
      {...props}
    >
      <Icon size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} />
    </button>
  )
}

export default IconButton
