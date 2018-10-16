import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import { Form, Icon, Input, Modal } from 'antd';

import { observer, inject } from 'mobx-react'

const FormItem = Form.Item;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};



@inject('tagStore')
@observer class Add extends React.Component {

  render() {
    const { getFieldDecorator, getFieldsValue } = this.props.form;
    const { tagStore } = this.props
    return (
      <Modal
        title="添加标签"
        visible={tagStore.showAddModal}
        // onOk={tagStore.addData}
        onOk={() => tagStore.addData(getFieldsValue())}
        onCancel={() => tagStore.setShowAddModal(false)}
      >
        <Form className="login-form">
          <FormItem {...formItemLayout} label="名称">
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

const AddForm = Form.create()(Add);

export default AddForm