import React, { useEffect, useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import { GoStarFill } from 'react-icons/go';
 import { ToastContainer, toast } from 'react-toastify';
import useApps from '../../Hooks/useApps';
import Spiner from '../../Components/Spiner';
const Install = () => {
  const [app, setApp] = useState([])
  const [sort, setSort] = useState('')
  const{loading}=useApps()
  useEffect(() => {
    let installedApp = JSON.parse(localStorage.getItem('installedApp')) || [];
    setApp(installedApp);
  },[])
  const handleRemove = (id) => {
    const unintall = app.filter(ap => ap.id !== id)
    const remove = app.find(ap => ap.id === id)
    setApp(unintall)
    localStorage.setItem('installedApp', JSON.stringify(unintall));
    toast(`${remove.title} uninstalled from your device`)
  }
  
  const sortHandle=()=> {
    if (sort === 'price-asc') {
     return[...app].sort((a,b)=>a.size-b.size)
    }
    if (sort === 'price-dsc') {
     return[...app].sort((b,a)=>a.size-b.size)
    }
    else {
      return app;
    }
  } 
  if(loading)return <Spiner/>
  return (
    <div className="bg-[#F5F5F5] p-1 pb-24">
      <div className="max-w-11/12 mx-auto mt-[80px]">
        <div className="text-center">
          <h2 className="text-[#001931] text-[48px] font-bold">
            Your Installed Apps
          </h2>
          <p className="text-[#627382] text-xl">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>

        <div className="mt-10 flex justify-between items-center flex-col md:flex-row">
          <h2 className="text-[#001931] text-[24px] font-bold">
            ({sortHandle().length}) Apps Found
          </h2>
          <div>
            <select
              className="btn"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="none">Sort by Size</option>
              <option value="price-asc">Low - High</option>
              <option value="price-dsc">High - Low</option>
            </select>
          </div>
        </div>
        {sortHandle().map(ap => (
          <div
            className="flex justify-between items-center bg-white p-2 rounded-[8px] my-4 md:flex-row flex-col"
            key={ap.id}
          >
            <div className="flex gap-6 items-center">
              <img src={ap.image} alt="" className="w-20" />
              <div>
                <h2 className="text-[#001931] text-[20px] font-medium">
                  {ap.title}
                </h2>
                <div className="flex gap-5 items-center">
                  <p className="flex gap-2 text-[#00D390]">
                    {' '}
                    <FaDownload /> {ap.downloads}{' '}
                  </p>
                  <p className="flex gap-2 text-[#FF8811] items-center">
                    {' '}
                    <GoStarFill /> {ap.ratingAvg}
                  </p>
                  <p>{ap.size} MB</p>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={() => handleRemove(ap.id)}
                className=" btn bg-[#00D390] text-white text-[18px]"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Install;