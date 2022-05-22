import React, { useEffect, useState } from 'react';
import Tool from './Tool';

const ToolsSection = () => {
    const [tools, setTools] = useState([]);
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setTools(data));
    },[])
    return (
        <div>
            <h1 className='text-center text-2xl font-bold pb-10 '>Our Tools </h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 px-12 gap-12'>
            {
                tools.map(tool => <Tool key={tool._id} tool={tool}></Tool>)
            }
            </div>
        </div>
    );
};

export default ToolsSection;