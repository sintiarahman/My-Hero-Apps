import React from 'react';
import notfound from '../../assets/App-Error.png'
import { Link } from 'react-router';
const AppNotFound = () => {
  return (
    <div>
      <div className="space-y-5 mt-9">
        <div className="flex justify-center">
          <img src={notfound} alt="" />
        </div>
        <div className="text-center">
          <h2 className="text-[#001931] text-[48px] font-bold">
            OPPS!! APP NOT FOUND
          </h2>
          <p className="text-[#627382] text-xl">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <a
            href="/apps"
            className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-3"
          >
            Show All Apps
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;