import React from 'react';
import MiddlePanel from '../../components/MiddlePanel/MiddlePanel';
import RightBar from '../../components/RightBar/RightBar';

const page = () => {
  return (
    <div className='py-6 flex '>
      <MiddlePanel />
      <RightBar />
    </div>
  );
};

export default page;
