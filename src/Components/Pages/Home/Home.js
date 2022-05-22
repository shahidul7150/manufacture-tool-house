import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import ToolsSection from './ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <ToolsSection />
            <BusinessSummary />
            <Reviews/>
        </div>
    );
};

export default Home;