import React from 'react';
import BlogLayout from '~/components/blog-layout'
// import '~/_sass/minimal-mistakes.scss'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import codeRenderer from './code-renderer';
const dev = process.env.NODE_ENV !== 'production'
console.log(335, dev)
const url_prefix = dev ? 'http://api.linxd.cc/' : 'http://api.linxiangdong.com/'


class Detail extends React.Component {
  static async getInitialProps({ query, req }) {
    const data = { id: query.id }



    const result = await axios({
      url: `${url_prefix}article/detail`,
      method: 'post',
      data
    })
    console.log(222, result)
    return { result: result.data.data.article_detail };
  }

  // componentDidMount() {
  //   // When the page is server-rendered,
  //   // we override the value in the client cache
  //   if (this.props.isServerRendered) {
  //     overrideCache('http://api.linxd.cc/article/detail', this.props.result);
  //   }
  // }

  render() {
    const { result } = this.props
    if (!result) return null
    return (
      <BlogLayout>
        <div className="linxd-blog">
          <article className="page" itemScope="" itemType="http://schema.org/CreativeWork">
            <div className="page__inner-wrap">


            </div>
            <section className="page__content" itemProp="text">
              {/* <ReactMarkdown source={result.content} /> */}
              <ReactMarkdown
                source={result.content}
                escapeHtml
                renderers={{
                  CodeBlock: codeRenderer,
                  Code: codeRenderer
                }}
              />
            </section>
          </article>
        </div>
      </BlogLayout>
    )
  }
}




export default Detail