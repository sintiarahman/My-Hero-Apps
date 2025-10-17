import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AppCards from '../../Components/AppCards/AppCards';
import useApps from '../../Hooks/useApps';
import Spiner from '../../Components/Spiner';
import { Link } from 'react-router';


const Home = () => {
  const{loading}=useApps()
  return (
    <div className="bg-[#F5F5F5] p-1">
      {loading ? (
        <Spiner />
      ) : (
        <>
          <Hero></Hero>
          <AppCards></AppCards>
          <div className="flex justify-center -mt-2 pb-6">
            <Link
              to="/apps"
              className="btn  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"
            >
              Show All
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;