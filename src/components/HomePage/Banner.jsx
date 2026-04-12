import React from "react";
import BannerImg from '../../assets/images/hero.png'

const Banner = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <div className="max-w-11/12 mx-auto pt-20 space-y-10">
        <div className="text-center">
          <h1 className="text-7xl font-bold text-[#001931]">We Build <br /><span className="text-purple-500">Productive</span> Apps</h1>
          <p className="text-xl text-[#627382] pt-5 pb-10">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
          <div className="flex gap-3 justify-center">
            <button className="px-6 py-3 rounded-md font-semibold text-xl text-[#001931] border border-[#D2D2D2]">Google Play</button>
            <button className="px-6 py-3 rounded-md font-semibold text-xl text-[#001931] border border-[#D2D2D2]">App Store</button>
          </div>
        </div>
        <img className="mx-auto" src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
