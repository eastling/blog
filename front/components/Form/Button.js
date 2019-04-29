import React from 'react'
import classNames from 'classnames'

export const SubmitButton = ({ text, type, size, ...props }) => {
  const typ = type || 'primary'
  const siz = size || 'sm'
  const myProps = Object.assign({
    type: 'submit',
    value: text,
    className: `btn btn-${typ} btn-${siz}`,
  }, props)
  myProps.className = classNames(myProps.className, { 'btn-disabled': props.disabled })

  return <input {...myProps} />
}

export const VerifyCodeButton = ({ service, type, ...props }) => {
  const codeType = type || 'tel'
  const myProps = Object.assign({
    type: 'button',
    value: '发送验证码',
    href: `/api/sendVerifyCode?type=${codeType}&service=${service}`,
    className: 'btn btn-primary btn-sm btn-inverse btn-verify-code',
    'data-toggle': 'action',
    'data-method': 'post',
    'data-type': codeType,
    style: { height: 40, width: 120 },
  }, props)

  return <input {...myProps} />
}

export const Button = ({ text, ...props }) => {
  return <input type="button" value={text} {...props} />
}
