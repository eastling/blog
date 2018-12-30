import React from 'react';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import BlogLayout from '~/components/blog-layout'
import axios from '~/lib/axios'
import LeftMenu from '~/components/left-menu'

const CodeBlock = ({ value, language }) => {
  return (
    <Highlight innerHTML={true}>
      {`<pre><code class=${language}>${value}</code></pre>`}
    </Highlight>
  )
}

class Detail extends React.Component {
  static async getInitialProps({ query, req }) {
    const data = { id: query.id }

    const result = await axios({
      url: 'article/detail',
      method: 'post',
      data
    })
    return { result: result.data.data.article_detail };
  }

  render() {
    const { result } = this.props
    return (
      <BlogLayout>
        <div className="linxd-blog">
          <LeftMenu />
          <article className="page-article">
            <div className="page-article__inner">
              <header>
                <h1 className="page-article__title">{result.title}</h1>
              </header>
              <section className="page-article__content">
                <ReactMarkdown
                  source={result.content}
                  renderers={{
                    code: CodeBlock,
                  }}
                />
              </section>
            </div>
          </article>
        </div>
      </BlogLayout>
    )
  }
}


export default Detail