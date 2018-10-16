import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

import { Form, Icon, Input, Button, Checkbox, Table, Radio, Select, Modal } from 'antd';

import { observer, inject } from 'mobx-react'

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

class NormalLoginForm extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      // console.log(11, values)
      // console.log(22, this.state)
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem {...formItemLayout} label="名称">
          {getFieldDecorator('name', {
            rules: [{ required: true, message: 'Please input your title!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} />
          )}
        </FormItem>

        <FormItem {...formItemLayout} >
          <Button type="primary" htmlType="submit" className="login-form-button">
            提交
          </Button>
        </FormItem>
      </Form>
    );
  }
}


@inject('categoryStore')
@observer class Add extends React.Component {

  render() {
    const { getFieldDecorator, getFieldsValue } = this.props.form;
    const { categoryStore } = this.props
    return (
      <Modal
        title="添加分类"
        visible={categoryStore.showAddModal}
        // onOk={categoryStore.addData}
        onOk={() => categoryStore.addData(getFieldsValue())}
        onCancel={() => categoryStore.setShowAddModal(false)}
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