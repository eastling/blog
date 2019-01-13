import React from 'react';
import BlogLayout from '~/components/blog-layout'
import axios from '~/lib/axios'
import LeftMenu from '~/components/left-menu'
import Link from 'next/link'

const Tech = ({ result }) => {
  console.log(86, result)
  return (
    <BlogLayout>
      <div>
        <LeftMenu />
        <div className="blog-list">
          <div className="blog-list__inner">
            {result.map((r, i) => {
              return (
                <div className="blog-list__item" key={i}>
                  <Link href={{ pathname: '/blog/tech/detail', query: { name: `${r.url_name}`, id: `${r.id}` } }}>
                    <a>{r.title}</a>
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </BlogLayout >
  )
}

Tech.getInitialProps = async () => {
  const res = await axios({
    url: 'article/list',
    method: 'post',
    data: { category: 'tech' }
  })
  const result = res.data.data ? res.data.data.article_list : []
  return { result }

}

export default Tech