import { Fragment } from 'react';
import '~/static/scss/index.scss';
import './index.scss'


export default ({ children }) => (
  <Fragment>
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

