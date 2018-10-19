import React from 'react';
import BlogLayout from '~/components/blog-layout'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
const dev = process.env.NODE_ENV !== 'production'
const url_prefix = dev ? 'http://api.linxd.cc/' : 'http://api.linxiangdong.com/'
import Highlight from 'react-highlight'

// const RHighlight = () => (
//   <Highlight />
// )

const CodeBlock = ({ value }) => {
  console.log(452, value)
  return (
    <Highlight innerHTML={true} language="javascript">
      {`<pre><code class="javascript">${value}</code></pre>`}
    </Highlight>
  )
}

class Detail extends React.Component {
  static async getInitialProps({ query, req }) {
    const data = { id: query.id }



    const result = await axios({
      url: `${url_prefix}article/detail`,
      method: 'post',
      data
    })
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

    const value = result.content

    return (
      <BlogLayout>
        <div className="linxd-blog">
          <article className="page" itemScope="" itemType="http://schema.org/CreativeWork">
            <div className="page__inner-wrap">


            </div>
            <section className="page__content" itemProp="text">
              <ReactMarkdown
                source={value}
                renderers={{
                  code: CodeBlock,
                }}
              />

              {/* <Highlight innerHTML={true}>
                {'content'}
              </Highlight> */}
              {/* <ReactMarkdown
                source={result.content}
                escapeHtml
              /> */}
            </section>
          </article>
        </div>
      </BlogLayout>
    )
  }
}




export default Detail