import React from 'react';
import Link from 'next/link'
import './menu-icon.scss'


const MenuIcon = () => {
  return (
    <div className="menu-icon">
      <div className="menu-icon__item"><Link href="/blog"><a><i className="icon iconfont icon-home" /></a></Link></div>
      <div className="menu-icon__item"><Link href="/blog/about"><a><i className="icon iconfont icon-person" /></a></Link></div>
    </div>
  )
}

export default MenuIcon