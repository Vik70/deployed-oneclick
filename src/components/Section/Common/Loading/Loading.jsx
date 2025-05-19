
"use client"
import React from 'react';

const Loading = ({ isLoading }) => {
  return (
    isLoading && (
      <div id="preloader">
        <div id="loading-center">
          <div className="loader">
            <div className="loader-outter"></div>
            <div className="loader-inner"></div>
          </div>
        </div>
      </div>
    )
  );
};

export default Loading;

