import React from 'react';
import BlogLayout from '~/components/blog-layout'
import axios from '~/lib/axios'
import Link from 'next/link'
import BlogHeader from '~/components/blog-header'
import './index.scss'

const Tech = ({ result }) => {
  return (
    <BlogLayout>
      <div id="main" role="main">
        <BlogHeader />
        <div className="archive">
          {result.map((r, i) => {
            return (
              <div className="list__item" key={i}>
                <article className="archive__item">
                  <ul >
                    <li className="archive__item-title">
                      <Link href={{ pathname: '/blog/essay/detail', query: { name: `${r.url_name}`, id: `${r.id}` } }}>
                        <a>{r.title}</a>
                      </Link>
                    </li>
                    {/* <p className="page__meta"><i className="far fa-clock" aria-hidden="true"></i>{r.title}</p> */}
                  </ul>
                </article>
              </div>
            )
          })}
        </div>
      </div>
    </BlogLayout >
  )
}

Tech.getInitialProps = async () => {
  const res = await axios({
    url: 'article/list',
  })
  return { result: res.data.data.article_list }

}

export default Tech