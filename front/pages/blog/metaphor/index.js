import React from 'react';
import MetaphorLayout from '~/components/metaphor-layout'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Form, FormItem } from '~/components/Form/Form'
import { Input, Select } from '~/components/Form/Input'
import { RadioGroup, RadioButton } from '~/components/Form/Radio'
import { SubmitButton } from '~/components/Form/Button'
import axios from '~/lib/axios'


class NormalLoginForm extends React.Component {

  state = {
    list: [],
    model: {},
    content: '',
    title: '',
    author: '',
    properties: '',
    scope: '',
    type: '',
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { content, title, author, properties, scope, type } = this.state;
    const values = { content, title, author, properties, scope, type };
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

  clear = () => {
    this.setState({
      list: [],
      model: {},
      content: '',
      title: '',
      author: '',
      properties: '',
      scope: '',
      type: '',
    })
  }

  render() {
    return (
      <MetaphorLayout>
        <div className="zal-header">
          <h1>隐喻黑客</h1>
          {/* <p><a target="__blank" href="https://github.com/eastling/blog">github地址</a></p> */}
          <p>隐喻黑客收录张爱玲作品中隐喻365例，提供<a className="github-link" target="__blank" href="https://github.com/eastling/blog">知觉和语言</a>两个角度进行搜索。<span onClick={() => this.setState({ showSearchTipModal: true })} className="search-tip">搜索说明</span></p>
        </div>
        <div className="zal-box">
          <div className="form-wrap">
            <Form onSubmit={this.handleSubmit} className="login-form">
              <FormItem label="隐喻关键词句" cols={[2, 5]}>
                <textarea name="content" value={this.state.content} onChange={(e) => this.setState({ content: e.target.value })} />
              </FormItem>
              <FormItem label="所属作品名" cols={[2, 5]}>
                <Input name="title" value={this.state.title} onChange={(e) => this.setState({ title: e.target.value })} />
              </FormItem>
              <FormItem label="作者" cols={[2, 5]}>
                <Input name="author" value={this.state.author} onChange={(e) => this.setState({ author: e.target.value })} />
              </FormItem>
              <FormItem label="性状" cols={[2, 1]} mustfill="1">
                <Select className="loan-type-select" name="properties" value={this.state.properties} onChange={(e) => this.setState({ properties: e.target.value })}>
                  <option value="">无</option>
                  <option value="shape">形状</option>
                  <option value="color">颜色</option>
                  <option value="sound">声音</option>
                  <option value="touch">触碰</option>
                  <option value="taste">味道</option>
                  <option value="move">移动</option>
                  <option value="others">其他</option>
                </Select>
              </FormItem>
              <FormItem label="范畴" cols={[0, 5]} >
                <RadioGroup name="scope" value={this.state.scope} onChange={(e) => this.setState({ scope: e.target.value })}>
                  <RadioButton value="0" checked={this.state.scope === '0'} text="范畴间" />
                  <RadioButton value="1" checked={this.state.scope === '1'} text="范畴内" />
                </RadioGroup>
              </FormItem>
              <FormItem label="隐喻类型" cols={[0, 5]} >
                <RadioGroup name="type" value={this.state.type} onChange={(e) => this.setState({ type: e.target.value })}>
                  <RadioButton checked={this.state.type === 'construct'} text="结构" value="construct" />
                  <RadioButton checked={this.state.type === 'position'} text="方位" value="position" />
                  <RadioButton checked={this.state.type === 'object'} text="实体" value="object" />
                  <RadioButton checked={this.state.type === 'docker'} text="容器" value="docker" />
                </RadioGroup>
              </FormItem>
              <FormItem cols={[2, 9]}>
                <SubmitButton value="搜索" />
                <span className="clear-btn" onClick={this.clear}>清空</span>
              </FormItem>
            </Form>
          </div>
          <ul className="content-list">
            {
              this.state.list.length ? this.state.list.map((item, index) =>
                <li
                  key={index}
                >
                  <span className="content-list__content" onClick={() => this.setState({ model: item, showDetailModal: true })}>{item.content}--《{item.title}》</span>
                  <CopyToClipboard text={item.content}>
                    <span className="btn-flat">[复制]</span>
                  </CopyToClipboard>
                </li>) :
                <div className="nodata-tip">这里是知识的荒漠~</div>
            }
          </ul>
        </div>
        {this.state.showDetailModal && <div className="metaphor-overlay">
          <div className="metaphor-model">
            <div className="metaphor-model__header">隐喻详情</div>
            <div className="metaphor-model__close-box"><i className="icon iconfont icon-close" onClick={() => this.setState({ showDetailModal: false })} /></div>
            <div className="metaphor-model__content">
              <p>本体：{this.state.model.subject}</p>
              <p>喻体：{this.state.model.metaphor}</p>
              <p>新范畴特征：{this.state.model.character}</p>
            </div>
          </div>
        </div>}
        {this.state.showSearchTipModal && <div className="metaphor-overlay">
          <div className="metaphor-model">
            <div className="metaphor-model__header">搜索指南</div>
            <div className="metaphor-model__close-box"><i className="icon iconfont icon-close" onClick={() => this.setState({ showSearchTipModal: false })} /></div>
            <div className="metaphor-model__content">
              <p>1.限定性搜索，即输入的搜索条件越多，范围越小；直接点击「搜索按钮」获得全部例句，无关条件不填即可。</p>
              <p>2.「隐喻关键词句」指句子内容的包含匹配。比如填入“太阳”，将匹配出所有含有“太阳”两字的句子。</p>
              <p>3.点击句子本身可获得“本体”、“喻体”、“新范畴”三个特性。</p>
              <p>4.点击「复制」即复制该例句，可ctrl+v使用。</p>
            </div>
          </div>
        </div>}
      </MetaphorLayout>
    );
  }
}

// const App = Form.create({ name: 'normal_login' })(NormalLoginForm);


// export default App;

export default NormalLoginForm
