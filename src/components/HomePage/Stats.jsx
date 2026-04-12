import React from 'react';

const Stats = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
            <div className='max-w-11/12 py-20 px-10 mx-auto space-y-10'>
                <h2 className='text-5xl font-bold text-white text-center'>Trusted by Millions, Built for You</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-center'>
                    <div className='space-y-4'>
                        <p className='text-white'>Total Downloads</p>
                        <h3 className='font-extrabold text-6xl text-white'>29.6M</h3>
                        <p className='text-white'>21% more than last month</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-white'>Total Reviews</p>
                        <h3 className='font-extrabold text-6xl text-white'>906K</h3>
                        <p className='text-white'>46% more than last month</p>
                    </div>
                    <div className='space-y-4'>
                        <p className='text-white'>Active Apps</p>
                        <h3 className='font-extrabold text-6xl text-white'>132+</h3>
                        <p className='text-white'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;