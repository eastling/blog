import React from 'react'
import Book from './book'
import BlogHead from '~/components/blog-head'

const Entry = () => {
  return (
    <div className="linxd-website">
      <BlogHead />
      <div className="linxd-entry">
        <Book />
      </div>
    </div>
  )
}

export default Entry


