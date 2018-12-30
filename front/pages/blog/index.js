import React from 'react';
import DashboardItem from '~/components/dashboard-item'
import LeftMenu from '~/components/left-menu'
import axios from '~/lib/axios'
import Link from 'next/link'

const Blog = ({ result }) => {
  const dashboardData = [{
    url: '/blog/tech',
    imgUrl: '/static/img/tech.png',
    imgTitle: '随便截取的图片',
    name: '技术',
    content: '「技术」是我记录WEB端开发的文章，目前主要在于前端，共有xx篇文章。'
  }, {
    url: '/blog/essay',
    imgUrl: '/static/img/essay_eb.jpg',
    imgTitle: 'E·B 怀特在写作',
    name: '随笔',
    content: '「随笔」是我记录除「技术」之外其他文章，主要是生活经历和思考，共有xx篇文章。'
  }, {
    url: '/blog/card',
    imgUrl: '/static/img/nbkf_card.jpg',
    imgTitle: '纳博科夫的卡片',
    name: '卡片',
    content: '「卡片」是我记录信息的第一步，这些信息值得记录，却还不够形成文章。以技术细节为主。共有xx张卡片。'
  }]


  return (
    <div className="blog-wrap">
      <LeftMenu />
      <div className="blog-main">
        {dashboardData.map((d, i) => {
          return (
            <Link key={i} href={d.url}>
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
      <style jsx>{`
        .blog-main {
          width: 800px;
          margin: 50px auto;
        }
      `}</style>
    </div>
  )
}

Blog.getInitialProps = async () => {
  const res = await axios({
    url: 'category/count',
  })
  return { result: res.data.data.article_list }
}


export default Blog