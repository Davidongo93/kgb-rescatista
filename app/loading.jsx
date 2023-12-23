"use client"
import React from 'react';
import { Audio } from 'react-loader-spinner';
import '../node_modules/react-loader-spinner/dist/esm/loader/BallTriangle';
import './loading.module.css';

const LoadingPage = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
<p>Componente visible cuando el contenido No puede ser cargado.</p>
      </div>
    </div>
  );
};

export default LoadingPage;
