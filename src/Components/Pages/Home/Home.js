import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import NewsLetter from './NewsLetter';
import Reviews from './Reviews';
import ToolsSection from './ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <ToolsSection  />
            <BusinessSummary />
            <Reviews />
            <NewsLetter/>
        </div>
    );
};

export default Home;