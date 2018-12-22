import React from 'react';
import BlogLayout from '~/components/blog-layout'

const Blog = () => {
  return (
    <BlogLayout>
      <div className="main">
        <div className="main-block">
          <h1>技术</h1>
          <div className="main-block__desc"><a href="/blog/tech">技术</a>记录我web开发的技术细节，主要在前端</div>
          <ul className="main-block__list">
            <li className="main-block__item"><a href="javascript:void(0)">从手工艺人到程序员</a></li>
          </ul>
        </div>
        <div className="main-block">
          <h1>随想</h1>
          <div className="main-block__desc"><a href="/blog/essay">随想</a>记录我生活思考</div>
          <ul className="main-block__list">
            <li className="main-block__item"><a href="javascript:void(0)">从手工艺人到程序员</a></li>
          </ul>
        </div>
      </div>
    </BlogLayout>
  )
}

export default Blog