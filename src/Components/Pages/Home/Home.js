import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import NowAvailable from './NowAvailable';
import Reviews from './Reviews';
import ToolsSection from './ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <ToolsSection />
            <NowAvailable/>
            <BusinessSummary />
            <Reviews />
            <NewsLetter/>
        </div>
    );
};

export default Home;