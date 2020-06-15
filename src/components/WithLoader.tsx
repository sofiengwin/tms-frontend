import React, { useState } from 'react';
import Spinner from './ui/Spinner';

type LoadingState = 'loading' | 'loaded' | 'error';

const WithLoader = (Component: any) => {
  
  return function HOC(props: Dict<any>) {
    const [loading, setLoading] = useState<LoadingState>('loading');

    return (
      <>
        {loading === 'loading' && <Spinner /> }
        <Component {...props} setLoading={setLoading} />
      </>
    );
  }
}

export default WithLoader