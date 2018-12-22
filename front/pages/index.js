import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import './index.scss'

const Entry = () => {
  return (
    <div className="linxd-website">
      <Head>
        <title>林向东网站</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' key="viewport" />
      </Head>
      <div className="linxd-entry">
        <div className="linxd-entry-card">
          <Link href="/blog">
            <a>
              <div className="entry-card__info">书房</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default Entry


