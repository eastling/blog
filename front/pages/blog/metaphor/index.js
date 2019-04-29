import React from 'react';
import MetaphorLayout from '~/components/metaphor-layout'
import { CopyToClipboard } from 'react-copy-to-clipboard';
// import 'antd/dist/antd.css'
import {
  Form,
  Input, Button, Radio, Select, Modal
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
      wrapperCol: { span: 18 },
    };
    return (
      <MetaphorLayout>
        <div className="zal-header">
          <h1>隐喻黑客</h1>
          <p><a target="__blank" href="https://github.com/eastling/blog">github地址</a></p>
          <p>隐喻黑客收录张爱玲作品中隐喻365例，提供知觉和语言两个角度进行搜索。<span onClick={() => this.setState({ showSearchTipModal: true })} className="search-tip">搜索说明</span></p>
        </div>
        <div className="zal-box">
          <div className="form-wrap">
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="login-form">
              <Form.Item
                label="隐喻关键词句"
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
                  <Select dropdownStyle={{ fontSize: '12px' }}>
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
          onCancel={() => this.setState({ visible: false })}
        >
          <p>本体：{this.state.model.subject}</p>
          <p>喻体：{this.state.model.metaphor}</p>
          <p>新范畴特征：{this.state.model.character}</p>
        </Modal>
        <Modal
          title="搜索指南"
          visible={this.state.showSearchTipModal}
          footer={null}
          onCancel={() => this.setState({ showSearchTipModal: false })}
        >
          <p>1.限定性搜索，即输入的搜索条件越多，范围越小；直接点击「搜索按钮」获得全部例句，无关条件不填即可。</p>
          <p>2.「隐喻关键词句」指句子内容的包含匹配。比如填入“太阳”，将匹配出所有含有“太阳”两字的句子。</p>
          <p>3.点击句子本身可获得“本体”、“喻体”、“新范畴”三个特性。</p>
          <p>4.点击「复制」即复制该例句，可ctrl+v使用。</p>
        </Modal>
      </MetaphorLayout>
    );
  }
}

const App = Form.create({ name: 'normal_login' })(NormalLoginForm);


export default App;

// export default NormalLoginForm
