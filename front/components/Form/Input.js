import React from 'react'
import classNames from 'classnames'

export const Input = ({ addonBefore, addonAfter, ...props }) => {
  const myProps = Object.assign({
    type: 'text',
    className: 'form-control',
    defaultValue: props.value,
  }, props)
  delete myProps.value

  if (addonBefore || addonAfter) {
    return (
      <div className="input-group">
        {addonBefore ? <div className="input-group-addon input-group-addon-before">{addonBefore}</div> : null}
        <input {...myProps} />
        {addonAfter ? <div className="input-group-addon input-group-addon-after">{addonAfter}</div> : null}
      </div>
    )
  }

  return <input {...myProps} />
}

export const Password = ({ addonBefore, addonAfter, ...props }) => {
  const myProps = Object.assign({
    type: 'password',
    className: 'form-control',
  }, props)

  if (addonBefore || addonAfter) {
    return (
      <div className="input-group">
        {addonBefore ? <div className="input-group-addon input-group-addon-before">{addonBefore}</div> : null}
        <input {...myProps} />
        {addonAfter ? <div className="input-group-addon input-group-addon-after">{addonAfter}</div> : null}
      </div>
    )
  }

  return <input {...myProps} />
}

export const CheckBox = ({ name, value, text, inputId, labelClass }) => {
  return (
    <label htmlFor={inputId} className={labelClass}>
      <input type="checkbox" id={inputId} name={name} value={value} />
      <span>{text}</span>
    </label>
  )
}

export const Select = ({ children, ...props }) => {
  const myProps = Object.assign({
    className: 'form-control',
    defaultValue: props.value,
  }, props)
  delete myProps.value

  return (
    <select {...myProps}>
      {React.Children.map(children, (child, index) => {
        const extraProps = {}
        if (myProps.defaultValue === child.props.value) {
          child = React.cloneElement(child, {
            checked: true,
          })
        }
        return child
      })}
    </select>
  )
}

export const Text = ({ text, className, ...props }) => (
  <p className={classNames('form-control-static', className)} {...props}>{text}</p>
)

