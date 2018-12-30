import { Fragment } from 'react';

export default ({ children }) => (
  <Fragment>
    <div className='content-container'>
      {children}
    </div>
  </Fragment>
);

