import React from 'react';
import Link from 'next/link'
import './blog.scss'
import '~/static/index.scss'
import BlogHeader from '~/components/blog-header'
import '~/static/scss/index.scss'
// import BlogLayout from '~/components/blog-layout'



const Blog = ({ result }) => {
  return (
    <div className="blog-wrap">
      <div className="blog-main">
        <BlogHeader />
        <div className="blog-main__content">
          <ul className="blog-main__list">
            
          </ul>
        </div>
      </div>
    </div>
  )
}



export default Blog