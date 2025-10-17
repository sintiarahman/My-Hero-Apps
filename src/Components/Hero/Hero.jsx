import React from 'react';
import app from '../../assets/app.png'
import play from '../../assets/play.png'
import hero from '../../assets/hero.png'
import { Link } from 'react-router';
const Hero = () => {
  return (
    <>
      <div className="bg-[#F5F5F5] p-1">
        <div className="max-w-11/12 mx-auto">
          <div className="text-center space-y-5 mt-10">
            <div>
              <h2 className="text-[#001931] font-bold text-[55px]">We Build</h2>
              <h2 className="text-[#001931] font-bold text-[55px] -mt-3">
                <span className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text font-bold text-transparent">
                  Productive
                </span>{' '}
                Apps
              </h2>
            </div>
            <p className="text-[#627382] text-[20px]">
              At HERO.IO, we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting.Our goal is to turn your
              ideas into digital experiences that truly make an impact.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                className="flex items-center gap-2"
                to="https://play.google.com/store/games?hl=en&pli=1"
                target="blank"
              >
                <span className="btn">
                  {' '}
                  <img src={play} className="w-6" alt="" />{' '}
                  <span className="font-semibold text-[20px]">Google Play</span>
                </span>
              </Link>
              <Link
                className="flex items-center gap-2"
                to="https://www.apple.com/app-store/"
                target="blank"
              >
                <span className="btn">
                  {' '}
                  <img src={app} className="w-6" alt="" />{' '}
                  <span className="font-semibold text-[20px]">App Store</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <img src={hero} alt="" />
        </div>
      </div>

      <div className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-10 -mt-1">
        <h2 className="text-5xl font-bold text-white text-center">
          Trusted by Millions, Built for You
        </h2>
        <div className="grid md:grid-cols-3 mt-12 md:-space-x-12 text-center space-y-7 md:space-y-0">
          <div className="space-y-3">
            <p className="text-white">Total Downloads</p>
            <h2 className="font-extrabold text-6xl text-white">29.6M</h2>
            <p className="text-white">21% more than last month</p>
          </div>
          <div className="space-y-3">
            <p className="text-white">Total Reviews</p>
            <h2 className="font-extrabold text-6xl text-white">906K</h2>
            <p className="text-white">46% more than last month</p>
          </div>
          <div className="space-y-3">
            <p className="text-white">Active Apps</p>
            <h2 className="font-extrabold text-6xl text-white">132+</h2>
            <p className="text-white">31 more will Launch</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;