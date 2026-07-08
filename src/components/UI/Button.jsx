import React from 'react'
import classNames from 'classnames'
import '../styles/components/button.css'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  onClick,
  className,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={classNames(
        'btn',
        `btn--${variant}`,
        `btn--${size}`,
        {
          'btn--disabled': disabled,
          'btn--loading': loading,
        },
        className
      )}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? <span className="btn-spinner" /> : null}
      {children}
    </button>
  )
}

export default Button
