import React from 'react';
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import BlogLayout from '~/components/blog-layout'
import axios from '~/lib/axios'


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
          <article className="page" itemScope="" itemType="http://schema.org/CreativeWork">
            <div className="page__inner-wrap">
              <header>
                <h1 className="page__title" itemProp="headline">{result.title}</h1>
              </header>
              <section className="page__content" itemProp="text">
                <ReactMarkdown
                  source={result.content}
                  renderers={{
                    code: CodeBlock,
                  }}
                />
              </section>
            </div>
          </article>
          <div className="page-button">
            <div className="prev-button"><a>ddd</a></div>
            <div className="next-button"><a>ccc</a></div>
          </div>
        </div>
      </BlogLayout>
    )
  }
}


export default Detail