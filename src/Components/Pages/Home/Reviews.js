import React, { useEffect, useState } from 'react';
import Slider from "react-slick";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://obscure-harbor-94819.herokuapp.com/review')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);




  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <div id="review" className="px-12 mt-12">
      <h2 className="text-2xl text-center font-bold mb-5">Customers Reviews</h2>

      <Slider {...settings}>
      {reviews.map((review,index) => (


<div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
  <div class="flex justify-center md:justify-center -mt-16">
    <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src={review.img}/>
  </div>
  <div>

    <p class="mt-2 text-center text-gray-600">{review.description}</p>
  </div>
  <div class="flex justify-end mt-4">
    <a href="#" class="text-xl font-medium text-indigo-500">{review.name}</a>
  </div>
</div>


          // <div>
          //   <img width="200px" height="150px" src={review.img} alt="" />
          //   <h1>{review.name}</h1>
          //   <p className="w-48">
          //   {review.description}
          //   </p>
          // </div>
        ))}     </Slider>







{/*     
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {reviews.map((review,index) => (
          <SwiperSlide key={index}>
            <img width="200px" height="150px" src={review.img} alt="" />
            <h1>{review.name}</h1>
            <p className="w-48">
            {review.description}
            </p>
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
                
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper> */}
    </div>
  );
};

export default Reviews;
