import React from 'react'
import classNames from 'classnames'

const Column = ({ col, offset, type = 'xs', children, className, ...props }) => {
  const colClass = col ? `col-${type}-${col}` : null
  const offsetClass = offset ? `col-${type}-offset-${offset}` : null

  const myClassName = classNames(colClass, offsetClass, className)
  return (
    <div className={myClassName} {...props}>{children}</div>
  )
}

export default Column
