import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../../Hooks/useApps';
import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import review from '../../assets/icon-review.png'
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import AppNotFound from '../../Components/AppCards/AppNotFound';
  import { ToastContainer, toast } from 'react-toastify';
import Spiner from '../../Components/Spiner';

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading } = useApps();
  const [isInstall, setIsInstall] = useState(false);
       const appFind = apps.find(app => app.id === parseInt(id));

  useEffect(() => {
    if (!appFind) return;
    let installedApp = JSON.parse(localStorage.getItem('installedApp')) || []
    if (!Array.isArray(installedApp)) installedApp = [];
    if (installedApp.some(app=>app.id===parseInt(id))) {
      setIsInstall(true);
    }
  }, [appFind])
 


   if (loading) return <Spiner/>;
   if (!appFind) return <AppNotFound />;
   const {
     title,
     ratings,
     downloads,
     reviews,
     ratingAvg,
     size,
     description,
     companyName,
     image,
  } = appFind;
  
  
  const handleInstall = () => {
    setIsInstall(true);
    toast(`✅ Yahoo ✨ !! ${title} Installed Successfully`);
    let installedApp = JSON.parse(localStorage.getItem('installedApp')) || [];
    if (!Array.isArray(installedApp)) installedApp = [];
    if (!installedApp.some(app => app.id === appFind.id)) {
      installedApp.push(appFind);
      localStorage.setItem('installedApp', JSON.stringify(installedApp));
    }
  };
    const ratingData = [...ratings].reverse().map(r => ({
      name: r.name,
      count: r.count,
    }));
 
  return (
    <div className="bg-[#F5F5F5] p-1">
      <div className="max-w-11/12 mx-auto">
        <div className="grid md:grid-cols-11 gap-8 py-10 border-b-2 border-gray-400 pb-10">
          <div className="md:col-span-3">
            <img src={image} alt="" className="w-72" />
          </div>
          <div className="space-y-5 md:col-span-8">
            <div className="space-y-3 border-b-2 border-gray-400 pb-3.5">
              <h2 className="text-[#001931] font-bold text-4xl">{title}</h2>
              <h3 className="font-semibold text-[20px] bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                <span className="text-[#627382]">Developed by</span>{' '}
                {companyName}
              </h3>
            </div>
            <button
              onClick={handleInstall}
              disabled={isInstall}
              className="md:hidden btn bg-[#00D390] text-white text-[18px]"
            >
              {isInstall ? 'Installed' : `Install Now (${size} MB)`}
            </button>
            <div className="flex flex-col md:flex-row  gap-14">
              <div>
                <img src={download} alt="" />
                <p className="text-[#001931]">Downloads</p>
                <h2 className="text-[#001931] text-[40px] font-extrabold">
                  {downloads}
                </h2>
              </div>
              <div>
                <img src={rating} alt="" />
                <p className="text-[#001931]">Average Ratings</p>
                <h2 className="text-[#001931] text-[40px] font-extrabold">
                  {ratingAvg}
                </h2>
              </div>
              <div>
                <img src={review} alt="" />
                <p className="text-[#001931]">Total Reviews</p>
                <h2 className="text-[#001931] text-[40px] font-extrabold">
                  {reviews} K
                </h2>
              </div>
            </div>
            <button
              onClick={handleInstall}
              disabled={isInstall}
              className="hidden md:flex btn bg-[#00D390]  text-white text-[18px]"
            >
              {isInstall ? 'Installed' : `Install Now (${size} MB)`}
            </button>
          </div>
        </div>

        <div className="py-6 ">
          <b className="text-[#001931] text-[20px]">Ratings</b>
          <ResponsiveContainer width="100%" height={300} className="mt-4">
            <BarChart
              layout="vertical"
              width={150}
              height={20}
              data={ratingData}
            >
              <XAxis type="number" dataKey="count"></XAxis>
              <YAxis type="category" dataKey="name"></YAxis>
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6">
          <b className="text-[#001931] text-[20px]">Description</b>
          <p className="text-[#627382] mt-3.5 pb-7">{description}</p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AppDetails;
