import React from 'react';
import MyNavLink from '../MyNavLink/MyNavLink';
import LogoImg from '../../assets/images/logo.png';

const Navbar = () => {

    const links = <>
        <li className='font-semibold text-black'>
            <MyNavLink to="/">Home</MyNavLink>
        </li>
        <li className='font-semibold text-black'>
            <MyNavLink to="/apps">Apps</MyNavLink>
        </li>
        <li className='font-semibold text-black'>
            <MyNavLink to="/installation">Installation</MyNavLink>
        </li>
        <li className='font-semibold text-black'>
            <MyNavLink to="/chart">Chart</MyNavLink>
        </li>
    </>

    return (
        <div className='shadow-sm'>
            <div className="navbar max-w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
      </ul>
    </div>
    <div className='flex items-center gap-2'>
        <img className='w-10 h-10' src={LogoImg} alt="" />
        <h2 className="text-xl font-bold text-purple-500">HERO.IO</h2>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 space-x-4">
        {links}
    </ul>
  </div>
  <div className="navbar-end">
    <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-2.5 text-white font-semibold rounded-md'>Contribute</button>
  </div>
</div>
        </div>
    );
};

export default Navbar;