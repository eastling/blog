import React from 'react';
import Link from 'next/link'
import './index.scss'

const data = [{
  url: '/blog/tech',
  name: 'tech'
}, {
  url: '/blog/essay',
  name: 'essay'
}, {
  url: '/blog/card',
  name: 'card'
}, {
  url: '/blog/about',
  name: 'about'
}]

const BlogNav = () => {
  return (
    <div className="blog-header">
      <i className="icon iconfont icon-xianrenzhang" />
      <ul className="blog-header__list">
        {data.map((d, i) => (
          <li key={i} className="blog-header__item">
            <Link href={d.url}><a>{d.name}</a></Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BlogNav