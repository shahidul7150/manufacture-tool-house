import React from 'react';

const BusinessSummary = () => {
    return (
        <div id='reputation' className='text-center my-12 bg-base-200 py-10'>
            <h2 className='text-2xl text-primary font-bold'>Business Summary</h2>
            <p className='text-secondary mb-8'>Our Business Summary is the Achievement of our Services.You can get a service from <span className='text-xl font-bold text-success'>TOOLS HOUSE</span> </p>
    <div className="stats stats-vertical lg:stats-horizontal shadow ">
  
    <div className="stat  ">
      <div className="stat-figure text-secondary">
       <img width="48px"  src="https://i.ibb.co/djJJwSV/revenue.png" alt="" />
      </div>
      <div className="stat-title">Annual Revenue</div>
      <div className="stat-value">150M</div>
      <div className="stat-desc">Jan 1st - Dec 31st</div>
    </div>
    
    <div className="stat">
      <div className="stat-figure text-secondary">
       <img width="48px" src="https://i.ibb.co/fFwvNTn/icons8-clients-64.png" alt="" />
      </div>
      <div className="stat-title">Satisfying Clients</div>
      <div className="stat-value">55k</div>
      <div className="stat-desc">↗︎ 400 (22%)</div>
    </div>
    
    <div className="stat">
      <div className="stat-figure text-secondary">
        <img width="48px" src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
      </div>
      <div className="stat-title">Complete feedback</div>
      <div className="stat-value">50k</div>
      <div className="stat-desc">↘︎ 90 (14%)</div>
    </div>
    </div>
  </div>
  );
};

export default BusinessSummary;
