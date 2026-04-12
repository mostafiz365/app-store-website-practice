import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AppContext } from '../../context/AppContextApi';

const AppDetails = () => {
    const apps = useLoaderData();
    const {id} = useParams();

    const selectedApp = apps.find(app => app.id == id);

    const {handleInstallBtn} = useContext(AppContext);

    return (
        <div>
            <div className='max-w-10/12 mx-auto py-20 flex gap-7'>
                <div className='bg-[#D9D9D9] p-4 rounded-md'>
                <img className='h-64 w-auto mx-auto rounded-md' src={selectedApp.image} alt="" />
                </div>
                <div className='space-y-5'>
                    <h3 className='font-bold text-4xl text-black'>{selectedApp.title}</h3>
                    <div className='border-b border-[#13131330]'>
                        <p className='pb-3'>Developed by <span>{selectedApp.companyName}</span></p>
                    </div>
                    
                    <div className='flex gap-6 items-center text-2xl'>
                        <p>{selectedApp.downloads}</p>
                        <p>{selectedApp.ratingAvg}</p>
                        <p>{selectedApp.reviews}</p>
                    </div>
                    <button onClick={() => handleInstallBtn(selectedApp)} className="font-semibold text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-4 py-3 rounded-lg flex items-center gap-2.5">Install Now</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;