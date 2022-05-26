import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://obscure-harbor-94819.herokuapp.com/review')
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div id="review" className="px-12 mt-12">
      <h2 className="text-2xl text-center font-bold mb-5">Customers Reviews</h2>

    
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
      </Swiper>
    </div>
  );
};

export default Reviews;
