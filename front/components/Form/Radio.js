import React from 'react'
import classNames from 'classnames'
import Icon from '../Icon'

export const RadioButton = ({ id, text, name, value, checked, disabled, extraInfo, ...props }) => (
  <label className={classNames('radio-btn', { selected: checked }, { disabled: disabled })} htmlFor={id}>
    <input type="radio" id={id} name={name} value={value} checked={checked} {...props} />
    {text}
    <Icon type="selected" />
  </label>
)

export const RadioGroup = ({ name, defaultValue, children, ...props }) => {
  const myProps = Object.assign({}, props, {
    className: classNames('radio-group', props.className),
  })
  return (
    <div {...myProps}>
      {React.Children.map(children, (child, index) => {
        if (child.type !== RadioButton) {
          return null
        }
        const id = `recharge-${name}-${index}`
        const extraProps = { id, name }
        if (defaultValue === child.props.value) {
          extraProps.checked = true
        }

        return React.cloneElement(child, extraProps)
      })}
    </div>
  )
}

