import React from 'react';
import logo from '../assets/logo.png'

const Spiner = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-356px)]">
        <h1 className="text-6xl flex font-bold text-gray-600">
          L <img src={logo} className="w-20 animate-spin" alt="" />
          OADING...
        </h1>
      </div>
    </div>
  );
};

export default Spiner;