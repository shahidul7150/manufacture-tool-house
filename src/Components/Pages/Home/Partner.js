import React, { Component } from "react";
import Slider from "react-slick";
import './Partner.css';
export default class Partner extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      speed: 10000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div className="pb-20  hidden lg:block">
        <h2 className="text-center text-2xl font-bold  pb-5">Our Partner</h2>
        <div>
            <hr className="hr-design"/>
        </div>
        <Slider {...settings}>
          <div>
           <img src="https://i.ibb.co/bKR6vkh/1.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/74gPzLL/2.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/TrRXB19/3.png" alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/wB8XKVD/4.png" alt="" />
          </div>
          <div>
            <img src="https://i.ibb.co/gMQ6p62/5.png" alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/qBbzD5n/6.png" alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/8m13ZW4/7.png" alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/MM67tzt/8.png" alt="" />
          </div>
          <div>
          <img src="https://i.ibb.co/pbr1pff/9.jpg" alt="https://i.ibb.co/pbr1pff/9.jpg" />
          </div>
          <div>
          <img src="https://i.ibb.co/Cm7KTL0/10.jpg"  alt=''/>
          </div>
        </Slider>
        <div>
            <hr className="hr-design"/>
        </div>
      </div>
    );
  }
}