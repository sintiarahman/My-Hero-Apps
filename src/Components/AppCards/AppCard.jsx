import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({ card }) => {
  const{image,title,downloads,ratingAvg,id}=card
  return (
    <div>
      <Link to={`/appdetails/${id}`}>
        <div className="card bg-base-100 p-3 h-[340px] shadow-sm hover:-mt-2 transition ease-in-out">
          <figure className='bg-white w-[100%] h-[380px]'>
            <img src={image} className="w-full object-contain" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <div className="card-actions flex justify-between">
              <div className="bg-[#F1F5E8] text-[#00D390] p-2 rounded-[4px] flex items-center gap-2">
                <FaDownload />
                {downloads}
              </div>
              <div className="bg-[#FFF0E1] text-[#FF8811] p-2 rounded-[4px] flex items-center gap-2">
                <FaStar />
                {ratingAvg}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AppCard;