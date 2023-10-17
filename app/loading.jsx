"use client"
import React from 'react';
     

import { Audio } from 'react-loader-spinner';
import '../node_modules/react-loader-spinner/dist/esm/loader/BallTriangle';
import './loading.module.css';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
<Audio
  height="80"
  width="80"
  radius="9"
  color="green"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
      </div>
    </div>
  );
};

export default LoadingPage;
