import React from 'react';
import GlobalMap from './GlobalMap';
import HeroAbout from './HeroAbout';
import OurMission from './OurMission';
import Quality from './Quality';

const AboutUs = () => {
    return (
        <div>
           <HeroAbout/>
           <GlobalMap/>
           <OurMission/>
           <Quality/>
        </div>
    );
};

export default AboutUs;