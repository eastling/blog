import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import Icon from '../Icon'

export const CheckButton = ({ id, text, checked, disabled, ...props }) => (
  <label className={classNames('check-btn', { selected: checked }, {disabled: disabled})} htmlFor={id}>
    {text}
    <input type="checkbox" id={id} checked={checked} {...props} />
    <Icon type="selected" />
  </label>
)

export const CheckGroup = ({ name, size, data, children, ...props }) => {
  const myProps = Object.assign({}, props, {
    className: classNames('check-group', props.className),
  })
  return (
    <div {...myProps}>
      {React.Children.map(children, (child, index) => {
        if (child.type !== CheckButton) {
          return null
        }
        const extraProps = { name, size }
        if (_.indexOf(data, child.props.value) !== -1) {
          extraProps.checked = true
        }

        return React.cloneElement(child, extraProps)
      })}
    </div>
  )
}
