import React from 'react';
import errImg from '../../assets/error-404.png'
import { Link } from 'react-router';
const Error = () => {
  return (
    <div className="bg-[#F5F5F5] p-1 h-[100vh]">
      <div className="space-y-5 mt-9">
        <div className="flex justify-center">
          <img src={errImg} alt="" />
        </div>
        <div className="text-center">
          <h2 className="text-[#001931] text-[48px] font-bold">
            Oops, page not found!
          </h2>
          <p className="text-[#627382] text-xl">
            The page you are looking for is not available.
          </p>
          <Link
            to="/"
            className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-3"
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;