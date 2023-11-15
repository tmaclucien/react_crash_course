import React from 'react';
import spinner from './spinner.gif';

const Loading = () => {
  return (
    <img
      src={spinner}
      alt='loading...'
      style={{ width: '180px', margin: 'auto', display: 'block' }}
    />
  );
};

export default Loading;
