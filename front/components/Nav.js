import React from 'react';
import Link from 'next/link'
// import './nav.scss'

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




const Nav = () => {
  return (
    <div className="masthead">
      <div className="masthead__inner-wrap">
        <div className="masthead__menu">
          <nav id="site-nav" className="greedy-nav">
            <a className="site-title" href="/blog">迷宫</a>
            <ul className="visible-links">
              {navData.map((n, i) => <li key={i} className="masthead__menu-item"><Link href={n.url}><a>{n.name}</a></Link></li>)}
            </ul>
            <button className="greedy-nav__toggle hidden" type="button">
              <span className="visually-hidden">Toggle Menu</span>
              <div className="navicon"></div>
            </button>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Nav