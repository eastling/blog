import { Fragment } from 'react';
import Nav from './Nav';
import '~/static/_sass/minimal-mistakes.scss';
import Head from 'next/head'

export default ({ children }) => (
  <Fragment>
    <Head>
      <title>林向东网站</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link
        rel="stylesheet"
        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css"
      />
    </Head>
    <Nav />
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

