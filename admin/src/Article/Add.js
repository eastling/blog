import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import ReactMarkdown from 'react-markdown'
import Editor from './Editor'

import { Form, Icon, Input, Button, Radio, Select } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

@inject('articleStore')
@observer class Add extends React.Component {

  state = {
    value: ''
  }

  componentWillMount() {
    const { articleStore } = this.props
    articleStore.getCategoryList()
    articleStore.getTagList()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { articleStore } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      values.content = this.state.value
      articleStore.addData(values)
    });
  }

  changeValue(value) {
    this.setState({
      value
    })
  }

  render() {
    const { articleStore } = this.props
    const { category_list, tag_list } = articleStore
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem {...formItemLayout} label="标题">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input your title!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="标题" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="路径">
            {getFieldDecorator('url_name', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="路径" />
            )}
          </FormItem>
          <FormItem {...formItemLayout} label="是否公开">
            {getFieldDecorator('is_open')(
              <RadioGroup>
                <Radio value="1">是</Radio>
                <Radio value="0">否</Radio>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="分类"
            hasFeedback
          >
            {getFieldDecorator('category_id', {
              rules: [
                { required: true, message: 'Please select your country!' },
              ],
            })(
              <Select placeholder="category">
                {category_list.map((cate, i) => <Option value={cate.id} key={i}>{cate.name}</Option>)}
              </Select>
            )}
          </FormItem>

          <FormItem
            {...formItemLayout}
            label="标签"
          >
            {getFieldDecorator('tag', {
              rules: [
                { type: 'array' },
              ],
            })(
              <Select mode="multiple" placeholder="tag">
                {tag_list.map((t, i) => <Option value={t.id} key={i}>{t.name}</Option>)}
              </Select>
            )}
          </FormItem>
          <FormItem {...formItemLayout} >
            <Button type="primary" htmlType="submit" className="login-form-button">
              确认文章
          </Button>
          </FormItem>
        </Form>
        <Editor value={this.state.value} changeValue={(value) => this.changeValue(value)} />
        <ReactMarkdown source={this.state.value} />
      </div>
    )
  }
}

const AddForm = Form.create()(Add);

export default AddForm