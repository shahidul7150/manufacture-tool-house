import React from 'react';
import { useNavigate } from "react-router-dom";
import image from "../../../assets/hero-bg.png";
const HeroAbout = () => {
    const navigate=useNavigate()
    return (
        // <div className='w-full' style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"contain" }}>
        //     <h1 className='text-3xl'>Hello </h1>
        // </div>

<div>
        <div class="hero h-96" style={{ backgroundImage:`url(${image})`,backgroundRepeat:"no-repeat",backgroundSize:"cover" }}>
  <div class="hero-overlay "></div>
  <div class="hero-content text-center text-neutral-content">
    <div class="max-w-md">
        <h2 className='text-lg my-3'>About Us</h2>
      <h1 class="mb-5 text-5xl font-bold">TOOLS HOUSE</h1>
      <p class="mb-5">

        
      </p>
      <button onClick={()=>navigate('/')} class="btn btn-sm btn-primary">Check Our Collections</button>
    </div>
  </div>
</div>

<div className='grid lg:grid-cols-2 gap-10 items-center p-12'>
    <div >

    <div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        class="block w-full"
        alt="Wild Landscape"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        class="block w-full"
        alt="Camera"
      />
    </div>
    <div class="carousel-item float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        class="block w-full"
        alt="Exotic Fruits"
      />
    </div>
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

    </div>
    <p><small>Tools House, the global tool brand from the house of shahid LTd., is a world-renowned high-quality In house Tools manufacturing company in India. It’s an ISO 9001:2015 certified company Headquartered in Gurugram, Haryana INDIA. We are a leading supplier of ever-increasing “range” of high-quality tools used in a variety of markets and applications throughout the world. Enterprise is serving the market for last 40 years.

We are fortunate to win the trust of millions of users worldwide with an incessant zeal for innovation, upgradation, new technology applications and quality-quotient enhancement. Throughout the years, we have seen many changes and tailored our business model to accommodate them. One thing that hasn’t changed is our commitment to the quality tools manufacturing which has become the unmatched USP. Our continued focus on expertise and service are the foundation of our success. Our products are known for consistent, quality manufacturing and  performance that outlasts competitors. Ozar’s strong Manufacturing Program is well supported by implemented 5S and lean management system. An overall ecosystem is well complemented by aggressive, modern marketing techniques</small></p>
</div>
</div>
    );
};

export default HeroAbout;