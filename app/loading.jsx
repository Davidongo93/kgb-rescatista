import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import './loading.module.css';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <Loader
          type="ThreeDots"
          color="#FFA500" // Color naranja
          height={100}
          width={100}
        />
      </div>
    </div>
  );
};

export default LoadingPage;
