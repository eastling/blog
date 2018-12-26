import React from 'react';
import BlogLayout from '~/components/blog-layout'
import Link from 'next/link'
import BlogHeader from '~/components/blog-header'
import ReactMarkdown from 'react-markdown'
import Highlight from 'react-highlight'
import axios from '~/lib/axios'

import './index.scss'

const CodeBlock = ({ value, language }) => {
  return (
    <Highlight innerHTML={true}>
      {`<pre><code class=${language}>${value}</code></pre>`}
    </Highlight>
  )
}

class CardPage extends React.Component {

  state = {
    showModal: false
  }

  render() {
    return (
      <BlogLayout>
        <BlogHeader />
        <div className="card-page">
          <div className="card-page__tip">
            <p>卡片说明：</p>
            <div>技术卡片</div>
          </div>
          <div className="card-list">
            <div className="card-item" onClick={() => this.setState({ showModal: true })}>
              <div className="card-item__title">
                javascript继承
              </div>
            </div>
            <div className="card-item">
              <div className="card-item__title">
                javascript继承
              </div>
            </div>
            <div className="card-item">
              <div className="card-item__title">
                javascript继承
              </div>
            </div>
          </div>
          {this.state.showModal && <div className="card-model">
            <div className="card-model__header">
              <span onClick={() => this.setState({ showModal: false })}>xxxxx</span>
              <i className="icon iconfont icon-close"  />
            </div>
            <div className="card-model__content">
              nnnnnnnn
              {/* <ReactMarkdown
                source={result.content}
                renderers={{
                  code: CodeBlock,
                }}
              /> */}
            </div>
          </div>}
        </div>
      </BlogLayout >
    )
  }
}


// const CardPage = ({ result }) => {
//   return (
//     <BlogLayout>
//       <BlogHeader />
//       <div className="card-page">
//         <div className="card-page__tip">
//           <p>卡片说明：</p>
//           <div>技术卡片</div>
//         </div>
//         <div className="card-list">
//           <div className="card-item" onClick={() => alert(1)}>
//             <div className="card-item__title">
//               javascript继承
//             </div>
//           </div>
//           <div className="card-item">
//             <div className="card-item__title">
//               javascript继承
//             </div>
//           </div>
//           <div className="card-item">
//             <div className="card-item__title">
//               javascript继承
//             </div>
//           </div>
//         </div>
//         <div className="card-model">
//           <div className="card-model__header">
//             <span>xxxxx</span>
//             <i className="icon iconfont icon-close" />
//           </div>
//           <div className="card-model__content">
//             {/* <ReactMarkdown
//               source={result.content}
//               renderers={{
//                 code: CodeBlock,
//               }}
//             /> */}
//           </div>
//         </div>
//       </div>
//     </BlogLayout >
//   )
// }

// CardPage.getInitialProps = async () => {
//   const res = await axios({
//     url: 'article/list',
//   })
//   return { result: res.data.data.article_list }

// }



export default CardPage