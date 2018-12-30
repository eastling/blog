import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Book from './book'

const Entry = () => {
  return (
    <div className="linxd-website">
      <Head>
        <title>林向东blog</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key="viewport" />
      </Head>
      <div className="linxd-entry">
        <Book />
      </div>
    </div>
  )
}

export default Entry


