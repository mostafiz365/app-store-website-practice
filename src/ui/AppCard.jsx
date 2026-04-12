import React from 'react';
import { FaDownload, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    return (
        <Link to={`/apps/${app.id}`}>
        <div className='bg-white p-4 rounded-md space-y-4'>
                <div className='bg-[#D9D9D9] p-4 rounded-md'>
                <img className='h-64 w-auto mx-auto rounded-md' src={app.image} alt="" />
                </div>
                <h4 className='text-xl font-medium text-[#001931]'>{app.title}</h4>
                <div className='flex justify-between'>
                    <span className='bg-[#F1F5E8] text-[#00D390] font-medium flex gap-1 items-center px-2.5 py-2 rounded-md'><FaDownload /> {app.downloads}</span>
                    <span className='bg-[#FFF0E1] text-[#FF8811] font-medium flex gap-1 items-center px-2.5 py-2 rounded-md'><FaStar/> {app.ratingAvg}</span>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;