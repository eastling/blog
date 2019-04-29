import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import Column from '../Column'

export const Form = props => (
  <form {...props}>
    {props.children}
  </form>
)

export const Label = ({ text, className, ...props }) => {
  const label = text ? `${text}：` : ''
  return (
    <label className={classNames('control-label', className)} {...props}>{label}</label>
  )
}

export const FormItem = ({ label, help, children, className, cols, mustfill, ...props }) => {
  let labelElem = null
  let offset = null
  if (label) {
    const labelClass = (cols && cols[0]) ? `col-xs-${cols[0]}` : null
    labelElem = <Label text={label} className={labelClass} />
  } else {
    offset = (cols && cols[0]) ? cols[0] : null
  }

  const elem = React.Children.map(children, (child, index) => {
    const elemProps = {}
    if (cols && cols[index + 1]) {
      elemProps.col = cols[index + 1]
    }
    if (offset && index === 0) {
      elemProps.offset = offset
    }
    if (_.isEmpty(elemProps)) {
      return child
    }

    return (
      <Column className="form-control-wrap" {...elemProps}>
        {child}
        {help ? <span className="help-block">{help}</span> : null}
      </Column>
    )
  })

  return (
    <div className={classNames('form-group', className)} {...props} >
      {labelElem}
      {elem}
    </div>
  )
}
