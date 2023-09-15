import * as React from 'react';
import Spinner from 'react-bootstrap/Spinner';

import './style.scss'

export const LoadingIndicator = () => (
  <div className='loading-wrapper'>
    <Spinner />
  </div>
);