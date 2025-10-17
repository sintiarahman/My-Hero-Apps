import React from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from './AppCard';

const AppCards = () => {
  const { apps } = useApps()
  const app=apps.slice(0,8)
  return (
    <div className="bg-[#F5F5F5] p-1">
      <div className="max-w-11/12 mx-auto mt-[80px]">
        <div className="text-center">
          <h2 className="text-[#001931] text-[48px] font-bold">
            Trending Apps
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-12">
          {app.map(card => (
            <AppCard key={card.id} card={card}></AppCard>
          ))}
        </div>
       
      </div>
    </div>
  );
};

export default AppCards;