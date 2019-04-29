import React from 'react'
import classNames from 'classnames'

const Icon = ({ type, className, ...props }) => {
  const iconClassName = classNames('icon', `icon-${type}`, className)
  const myProps = Object.assign({ className: iconClassName }, props)

  return (
    <i {...myProps} />
  )
}

export default Icon
