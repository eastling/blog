import React from 'react';
import BlogLayout from '~/components/blog-layout'
import LeftMenu from '~/components/left-menu'
import ReactMarkdown from 'react-markdown'
// import Highlight from 'react-highlight'
import axios from '~/lib/axios'

// const CodeBlock = ({ value, language }) => {
//   return (
//     <Highlight innerHTML={true}>
//       {`<pre><code class=${language}>${value}</code></pre>`}
//     </Highlight>
//   )
// }

class CardPage extends React.Component {

  state = {
    showModal: false,
    model: {}
  }

  static async getInitialProps() {

    const res = await axios({
      url: 'article/list',
      method: 'post',
      data: { category: 'card' }
    })
    const result = res.data.data ? res.data.data.article_list : []
    return { result };
  }

  render() {
    const { result } = this.props
    return (
      <BlogLayout>
        <div>
          <LeftMenu />
          <div className="card-page">
            <div className="card-page__tip">
              <div className="card-page__tip__label">卡片说明：</div>
              <div>1.这里是我技术卡片存放处</div>
              <div>2.每张卡片是一个知识点，值得记录却还不够形成文章</div>
              <div>3.卡片是未来文章的素材，要满足：内容要够小，只回答一个问题；要写明参考来源，便于回溯和扩展</div>
            </div>
            <div className="card-list">
              {result.map((item, i) => {
                return (
                  <div key={i} className="card-item" onClick={() => {
                    this.setState({ showModal: true, model: item })
                  }}>
                    <div className="card-item__title">
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </div>
            {this.state.showModal && <div className="card-overlay">
              <div className="card-model">
                <div className="card-model__close-box"><i className="icon iconfont icon-close" onClick={() => this.setState({ showModal: false })} /></div>
                <div className="card-model__header">
                  <span>{this.state.model.title}</span>
                </div>
                <div className="card-model__content">
                  <ReactMarkdown
                    source={this.state.model.content}
                    // renderers={{
                    //   code: CodeBlock,
                    // }}
                  />
                </div>
              </div>
            </div>}
          </div>
        </div>
      </BlogLayout >
    )
  }
}

export default CardPage