import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../../ui/AppCard';

const TrendingApps = () => {

    const apps = useLoaderData();
    console.log(apps);

    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-11/12 mx-auto py-20 space-y-10'>
                <div className='text-center space-y-5'>
                    <h3 className='text-5xl font-bold text-[#001931]'>Trending Apps</h3>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        apps.slice(0,9).map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
                <div className='flex justify-center'>
                    <Link to={'/apps'}>
                        <button className="font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-8 py-4 rounded-lg flex items-center gap-2.5">Show All</button>
                    </Link>
                </div>
                
            </div>
        </div>
    );
};

export default TrendingApps;