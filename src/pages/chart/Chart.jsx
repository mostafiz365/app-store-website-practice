import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { AppContext } from '../../context/AppContextApi';
import { useLoaderData } from 'react-router';

const Chart = () => {

    const allApps = useLoaderData();
    const {installApp} = useContext(AppContext);

    const unInstallAppLength = allApps.length - installApp.length;

    const data = [
  { name: 'Install App', value: installApp.length, fill: '#0088FE' },
  { name: 'Uninstall App', value: unInstallAppLength, fill: '#FF8042' },
];
    return (
        <div className='space-y-5 py-12'>
            <div className='text-center space-y-5'>
                    <h3 className='text-5xl font-bold text-[#001931]'>Installed & Uninstalled App Chart</h3>
                    <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>
            <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1, margin: 'auto' }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
      <Legend></Legend>
      <Tooltip></Tooltip>
    </PieChart>
        </div>
    );
};

export default Chart;