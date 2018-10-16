import React from 'react';
import BlogLayout from '~/components/blog-layout'
// import '~/_sass/minimal-mistakes.scss'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import codeRenderer from './code-renderer';
// import cachedFetch, { overrideCache } from '~/lib/cached-json-fetch';



class Detail extends React.Component {
  static async getInitialProps({ query, req }) {
    const data = { id: query.id }
    console.log(35, data)
    // const res = await cachedFetch('http://api.linxd.cc/article/detail', {
    //   method: 'post',
    //   data
    // });



    // if (res) {
    //   console.log(7668, res)
    //   const isServerRendered = !!req;
    //   return { result: res.data.article_detail, isServerRendered };
    // } else {
    //   return { result: {}, isServerRendered }
    // }


    const result = await axios({
      url: 'http://api.linxd.cc/article/detail',
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