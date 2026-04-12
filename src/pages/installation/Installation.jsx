import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContextApi';
import { FaDownload, FaStar } from 'react-icons/fa';

const Installation = () => {

    const {installApp, setInstallApp} = useContext(AppContext);

    const handleUninstallBtn = (app) => {
        const filterApps = installApp.filter(iApp => iApp.id != app.id);
        setInstallApp(filterApps);
    }


    return (
        <div className='bg-[#f5f5f5]'>
            <div className='max-w-11/12 mx-auto py-20 space-y-10'>
                <div className='text-center space-y-5'>
                    <h3 className='text-5xl font-bold text-[#001931]'>Your Installed Apps</h3>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className='space-y-5'>
                    {
                        installApp.map(app => <div key={app.id} className='bg-white p-5 flex justify-between items-center rounded-lg'>
                            <div className='flex items-center gap-4'>
                                <img className='h-20 w-auto rounded-md' src={app.image} alt="" />
                                <div>
                                    <h4 className='text-xl font-medium text-[#001931]'>{app.title}</h4>
                                    <div className='flex items-center gap-4'>
                                        <p className='text-[#00D390] flex items-center gap-1'><FaDownload></FaDownload>{app.downloads}</p>
                                        <p className='text-[#00D390] flex items-center gap-1'><FaStar></FaStar>{app.ratingAvg}</p>
                                        <p className='text-[#00D390]'>{app.size}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleUninstallBtn(app)} className='btn btn-success text-white font-medium'>Uninstall</button>
                        </div>)
                    }
                </div>              
            </div>
        </div>
    );
};

export default Installation;