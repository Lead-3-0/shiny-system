import React from 'react'
import classNames from 'classnames'
import '../styles/components/badge.css'

const Badge = ({ children, variant = 'default', size = 'md', className }) => {
  return (
    <span
      className={classNames(
        'badge',
        `badge--${variant}`,
        `badge--${size}`,
        className
      )}
    >
      {children}
    </span>
  )
}

export default Badge
