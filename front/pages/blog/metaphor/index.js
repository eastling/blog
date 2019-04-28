import React from 'react';
import BlogLayout from '~/components/metaphor-layout'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import 'antd/dist/antd.css'
import {
  Form, Input, Button, Radio, Select, Modal
} from 'antd';
import axios from '~/lib/axios'
const { TextArea } = Input;

const { Option } = Select;

class NormalLoginForm extends React.Component {

  state = {
    list: [],
    model: {}
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let queryArr = []

        Object.keys(values).forEach(key => {
          if (values[key] !== undefined) {
            queryArr.push(`${key}=${values[key]}`)
          }
        })
        let query = ''
        if (queryArr.length) {
          query = '?' + queryArr.join(',').replace(/,/g, '&')
        }
        const result = await axios.get(`/metaphor/getList${query}`);
        this.setState({
          list: result.data.data ? result.data.data : []
        })
      }
    });
  }

  handleOk() {
    this.setState({
      visible: false
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    return (
      <BlogLayout>
        <div className="zal-header">
          <h1>张爱玲隐喻</h1>
          <p>收录张爱玲作品中隐喻356例，提供知觉和语言两个角度进行搜索。</p>
        </div>
        <div className="zal-box">
          <div className="form-wrap">
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item
                label="隐喻"
              >
                {getFieldDecorator('content')(
                  <TextArea rows={4} autoComplete="off" />
                )}
              </Form.Item>
              <Form.Item
                label="所属作品名"
              >
                {getFieldDecorator('title')(
                  <Input autoComplete="off" />
                )}
              </Form.Item>
              <Form.Item
                label="作者"
              >
                {getFieldDecorator('author')(
                  <Input autoComplete="off" />
                )}
              </Form.Item>
              <Form.Item
                label="性状"
                hasFeedback
              >
                {getFieldDecorator('properties')(
                  <Select>
                    <Option value="shape">形状</Option>
                    <Option value="color">颜色</Option>
                    <Option value="sound">声音</Option>
                    <Option value="touch">触碰</Option>
                    <Option value="taste">味道</Option>
                    <Option value="move">移动</Option>
                    <Option value="others">其他</Option>
                  </Select>
                )}
              </Form.Item>
              {/* <Form.Item
                label="位置"
              >
                {getFieldDecorator('position')(
                  <Radio.Group>
                    <Radio value="0">本体</Radio>
                    <Radio value="1">喻体</Radio>
                  </Radio.Group>
                )}
              </Form.Item> */}
              <Form.Item
                label="范畴"
              >
                {getFieldDecorator('scope')(
                  <Radio.Group>
                    <Radio value="0">范畴外</Radio>
                    <Radio value="1">范畴内</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item
                label="隐喻类型"
              >
                {getFieldDecorator('type')(
                  <Radio.Group>
                    <Radio value="construct">结构</Radio>
                    <Radio value="position">方位</Radio>
                    <Radio value="object">实体</Radio>
                    <Radio value="docker">容器</Radio>
                  </Radio.Group>
                )}
              </Form.Item>
              <Form.Item className="login-form-button">
                <Button type="primary" htmlType="submit" >
                  搜索
                </Button>
              </Form.Item>
            </Form>
          </div>
          <ul className="content-list">
            {
              this.state.list.length ? this.state.list.map((item, index) =>
                <li
                  key={index}
                >
                  <span className="content-list__content" onClick={() => this.setState({ model: item, visible: true })}>{item.content}--《{item.title}》</span>
                  <CopyToClipboard text={item.content}>
                    <span className="btn-flat">[复制]</span>
                  </CopyToClipboard>
                </li>) :
                <div className="nodata-tip">这里是知识的荒漠~</div>
            }
          </ul>
        </div>
        <Modal
          title="隐喻详情"
          visible={this.state.visible}
          footer={null}
          // onOk={() => this.setState({ visible: false })}
          onCancel={() => this.setState({ visible: false })}
        >
          <p>本体：{this.state.model.subject}</p>
          <p>喻体：{this.state.model.metaphor}</p>
          <p>新范畴特征：{this.state.model.character}</p>
        </Modal>
      </BlogLayout>
    );
  }
}

const App = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default App;
