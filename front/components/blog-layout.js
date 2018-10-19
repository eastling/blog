import { Fragment } from 'react';
import Nav from './Nav';
import '~/static/_sass/minimal-mistakes.scss';
import '~/static/dark.scss'
import Head from 'next/head'

export default ({ children }) => (
  <Fragment>
    <Head>
      <title>blog</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      {/* <link rel="stylesheet" href="/front/node_modules/highlight.js/styles/dark.css"></link> */}
    </Head>
    <Nav />
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

