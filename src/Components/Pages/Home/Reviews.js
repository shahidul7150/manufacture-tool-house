import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Reviews = () => {
  return (
    <div id='review' className="px-12 mt-12">
      <h2 className="text-2xl text-center font-bold mb-5">Customers Reviews</h2>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
          <h1>Name:Devid yang</h1>
          <p className="w-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
          <h1>Name:Devid yang</h1>
          <p className="w-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
          <h1>Name:Devid yang</h1>
          <p className="w-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
          <h1>Name:Devid yang</h1>
          <p className="w-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
          <h1>Name:Devid yang</h1>
          <p className="w-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.ibb.co/LN9Bx8N/icons8-feedback-64.png" alt="" />
          <h1>Name:Devid yang</h1>
          <p className="w-48">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </p>
          <div class="rating rating-xs">
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
              checked
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-5"
              class="mask mask-star-2 bg-orange-400"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
