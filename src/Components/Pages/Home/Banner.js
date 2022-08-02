import { Carousel } from '3d-react-carousal';
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const navigate=useNavigate()
  let slides = [
    <img  src="https://i.ibb.co/g3WRm7b/hero-banner.jpg" alt="1" />,
    <img  src="https://i.ibb.co/m0vGDxw/hero-banner2.jpg" alt="2" />  ,
    <img  src="https://i.ibb.co/g3Ffnr6/hero-banner3.jpg" alt="3" />  ,
    ];
    return (

  
  <div className=' bg-gradient-to-r from-cyan-500 to-blue-500 py-16 mb-20 ' >
    
    <Carousel  slides={slides} autoplay={true} interval={10000}/>
  </div>
    

      

// -------------------------------------------------------------
      //   <div id='banner' className="hero min-h-screen bg-base-100">
      //   <div className="hero-content flex-col lg:flex-row-reverse">
      //     <img src="https://i.ibb.co/R0tkMQT/tools.jpg" className="max-w-sm " alt=''/>
      //     <div>
      //       <h1 className="text-5xl font-bold">Make Your Work Accurately Like <br />as a  Professional!</h1>
      //       <p className="py-6">Tools make your working experience is more than effective when you use manual technology.So do not miss this chance make your working skill for your portfolio. </p>
      //       <button onClick={()=>navigate('/dashboard')} className="btn btn-primary">store here</button>
      //     </div>
      //   </div>
      // </div>
    );
};

export default Banner;