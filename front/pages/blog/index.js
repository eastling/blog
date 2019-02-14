import React from 'react';
import LeftMenu from '~/components/left-menu'
import axios from '~/lib/axios'
import Link from 'next/link'
import BlogHead from '~/components/blog-head'

const Blog = ({ result }) => {
  const tech = (result && result.tech) ? result.tech : 0
  const essay = (result && result.essay) ? result.essay : 0
  const card = (result && result.card) ? result.card : 0

  const dashboardData = [{
    url: '/blog/tech',
    imgUrl: '/static/img/tech.png',
    imgTitle: '随便截取的图片',
    name: '技术',
    content: `「技术」是我记录WEB端开发的文章，目前主要在于前端，共有${tech}篇文章。`
  }, {
    url: '/blog/essay',
    imgUrl: '/static/img/essay_eb.jpg',
    imgTitle: 'E·B 怀特在写作',
    name: '随笔',
    content: `「随笔」是我记录除「技术」之外其他文章，主要是生活经历和思考，共有${essay}篇文章。`
  }, {
    url: '/blog/card',
    imgUrl: '/static/img/nbkf_card.jpg',
    imgTitle: '纳博科夫的卡片',
    name: '卡片',
    content: `「卡片」信息值得记录，却还不够形成文章。以技术细节为主。共有${card}张卡片。`
  }]


  return (
    <div className="blog-wrap">
      <BlogHead />
      <LeftMenu />
      <div className="blog-main">
        {dashboardData.map((d, i) => {
          return (
            <Link key={i} prefetch href={d.url}>
              <div className="blog-main__item">
                <div className="left-pic">
                  <img title={d.imgTitle} src={d.imgUrl} />
                </div>
                <div className="right-info">
                  <div className="right-info__title">
                    {d.name}
                  </div>
                  <div className="right-info__text">{d.content}</div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

Blog.getInitialProps = async () => {
  const res = await axios({
    url: 'category/count',
  })
  return { result: res.data.data }
}


export default Blog