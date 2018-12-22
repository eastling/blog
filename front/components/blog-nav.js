import React from 'react';
import Link from 'next/link'
import './blog-nav.scss'

const navData = [{
  name: '技术',
  url: '/blog/tech'
}, {
  name: '随笔',
  url: '/blog/essay'
}, {
  name: '归档',
  url: '/blog/summary'
}, {
  name: '关于',
  url: '/blog/about'
}]


const BlogNav = () => {
  return (
    <header className="blog-header">
      <section className="blog-header__title">
        <a href="/blog">林向东的博客</a>
      </section>
      <nav className="blog-header__nav">
        {navData.map((n, i) => <div key={i} className="blog-header__item"><Link href={n.url}><a>{n.name}</a></Link></div>)}
      </nav>
    </header>
  )
}

export default BlogNav