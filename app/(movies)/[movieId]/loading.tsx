'use client';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <ClipLoader color="#0000FD" size={60} />
    </div>
  );
};

export default Loading;
