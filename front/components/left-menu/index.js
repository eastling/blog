import React, { Component } from 'react'
import Link from 'next/link'

const leftTopData = [{
  url: '/blog/tech',
  icon: 'icon-code',
  name: '技术'
}, {
  url: '/blog/essay',
  icon: 'icon-book',
  name: '随笔'
}, {
  url: '/blog/card',
  icon: 'icon-card',
  name: '卡片'
}]


const leftBottomData = [{
  url: '/',
  icon: 'icon-home',
  name: '首页'
}, {
  url: '/blog',
  icon: 'icon-dashboard',
  name: '主页'
}, {
  url: '/blog/about',
  icon: 'icon-about',
  name: '关于'
}]


const LeftMenu = () => {
  return (
    <div className="left-menu">
      <div className="left-menu__top">
        {leftTopData.map((d, i) => {
          return (
            <Link prefetch key={i} href={d.url}>
              <div className="left-menu__icon-box">
                <span className="icon-pic"><i className={`icon iconfont ${d.icon}`} /></span>
                <span className="icon-text">{d.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
      <div className="left-menu__bottom">
        {leftBottomData.map((d, i) => {
          return (
            <Link prefetch key={i} href={d.url}>
              <div className="left-menu__icon-box">
                <span className="icon-pic"><i className={`icon iconfont ${d.icon}`} /></span>
                <span className="icon-text">{d.name}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default LeftMenu