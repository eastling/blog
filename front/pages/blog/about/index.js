import React from 'react';
import BlogLayout from '~/components/blog-layout'
import Link from 'next/link'
import LeftMenu from '~/components/left-menu'

const About = ({ result }) => {
  return (
    <BlogLayout>
      <LeftMenu />
      <div className="about-page">
        <div className="about-item">
          <div className="about-item__title">关于我</div>
          <div className="about-item__content">
            我叫林向东，是一名转行的程序员。在成为程序员之前，我摆过地摊，发过传单，甚至养过猪。最后一份非程序员工作是手工艺人，摆地摊卖手工艺品。后来自学成为程序员--前端工程师。到现在（2018）已工作三年有余，目前供职于360前端团队--奇舞团。
          </div>
        </div>
        <div className="about-item">
          <div className="about-item__title">关于内容</div>
          <div className="about-item__content">
            <p>
              此博客是由我纯手工打造而成：后端「node+thinkjs」，管理端「react+antd」，前端「nextjs」。
              博客源码：<Link href="https://github.com/eastling/blog"><a target="_blank">https://github.com/eastling/blog</a></Link>
            </p>
            <p>
              版权声明: 「署名-非商业性使用-禁止演绎 3.0 国际」
              <Link href="https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"><a target="_blank">CC BY-NC-ND 3.0</a></Link>
            </p>
            <p>若非特殊说明，此博客文章皆为原创</p>
          </div>
        </div>
        <div className="about-item">
          <div className="about-item__title">联系我</div>
          <div className="about-item__content">
            <div>Github: <Link href="https://github.com/eastling"><a target="_blank">eastling</a></Link></div>
            <div>Email: <Link href="mailto: donaldlxd@gmail.com"><a>donaldlxd@gmail.com</a></Link></div>
          </div>
        </div>
      </div>
    </BlogLayout >
  )
}



export default About