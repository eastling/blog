import React from 'react'
import classNames from 'classnames'

const CancelButton = ({ text }) => (
  <button type="button" className="btn btn-primary btn-inverse" data-dismiss="modal">
    {text}
  </button>
)

const CloseBtn = () => (
  <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
)

const Modal = (props) => {
  const { title, id, className, size, cancel, actions, visible, noHeader = false } = props
  const modalSize = {
    'modal-sm': size === 'sm',
    'modal-lg': size === 'lg',
    'modal-xl': size === 'xl',
  }

  let footElem = null
  if (cancel || actions) {
    footElem = (
      <div className="modal-footer">
        {cancel && <CancelButton text={cancel} />}
        {actions}
      </div>
    )
  }

  let headerElem = (
    <div className="modal-header">
      <CloseBtn />
      <h4 className="modal-title">{title}</h4>
    </div>
  )

  let extraElem = null
  if (!title && noHeader) {
    headerElem = null
    extraElem = <CloseBtn />
  }

  return (
    <div>
      {visible &&
        <div className={classNames('modal', 'fade', className)} id={id} tabIndex="-1" role="dialog">
          <div className={classNames('modal-dialog', modalSize)} role="document">
            <div className="modal-content">
              {headerElem}
              <div className="modal-body">
                {props.children}
                {extraElem}
              </div>
              {footElem}
            </div>
          </div>
        </div>}
    </div>
  )
}

export default Modal
