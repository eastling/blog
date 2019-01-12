import { Fragment } from 'react';
import BlogHead from '~/components/blog-head'

export default ({ children }) => (
  <Fragment>
    <BlogHead />
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

