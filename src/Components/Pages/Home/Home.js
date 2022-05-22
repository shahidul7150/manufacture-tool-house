import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ToolsSection from './ToolsSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <ToolsSection />
            <BusinessSummary/>
        </div>
    );
};

export default Home;