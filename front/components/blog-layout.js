import { Fragment } from 'react';
import BlogNav from './blog-nav';
// import '~/static/dark.scss'
import '~/static/scss/index.scss';
import './blog-layout.scss'
import Head from 'next/head'

export default ({ children }) => (
  <Fragment>
    {/* <Head>
      <title>xxx</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' key="viewport" />
    </Head> */}
    {/* <BlogNav /> */}
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

