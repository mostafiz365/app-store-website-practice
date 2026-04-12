import React from 'react';
import Banner from '../../components/HomePage/Banner';
import Stats from '../../components/HomePage/Stats';
import TrendingApps from '../../components/HomePage/TrendingApps';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Stats></Stats>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Home;