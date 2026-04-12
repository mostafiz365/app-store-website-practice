import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../../ui/AppCard';

const Apps = () => {
    const allApps = useLoaderData();
    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-11/12 mx-auto py-20 space-y-10'>
                <div className='text-center space-y-5'>
                    <h3 className='text-5xl font-bold text-[#001931]'>Our All Applications</h3>
                    <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                    {
                        allApps.map(app => <AppCard key={app.id} app={app}></AppCard>)
                    }
                </div>
                
            </div>
        </div>
    );
};

export default Apps;