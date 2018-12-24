import React from 'react';
import MenuIcon from '~/components/menu-icon'
import axios from '~/lib/axios'
import Link from 'next/link'
import '~/static/dark.scss'
import '~/static/scss/index.scss';
import './blog.scss'
import '~/static/index.scss'
// import BlogLayout from '~/components/blog-layout'

const Blog = ({ result }) => {
  return (
    <div className="blog-wrap">
      <div className="blog-main">
        <div className="blog-main__header">AMAZE</div>
        <div className="blog-main__content">
          <ul className="blog-main__list">
            {result.map((item, key) => (
              <li className="blog-main__item" key={key}>
                <Link href={`/blog/tech/detail?id=${item.id}`}>
                  <a>{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <MenuIcon />
    </div>
  )
}

Blog.getInitialProps = async () => {
  const res = await axios({
    url: 'article/list',
  })
  return { result: res.data.data.article_list }

}

export default Blog