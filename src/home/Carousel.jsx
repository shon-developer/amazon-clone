import React from "react";
import Slider from "react-slick";
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";
import img4 from "../assets/img-4.jpg";
import img6 from "../assets/img-6.jpg";

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="h-[400px] w-[100vw]" src={img1} alt="img" />
      </div>
      <div>
        <img className="h-[400px] w-[100vw]" src={img2} alt="img" />
      </div>
      <div>
        <img className="h-[400px] w-[100vw]" src={img3} alt="img" />
      </div>
      <div>
        <img className="h-[400px] w-[100vw]" src={img4} alt="img" />
      </div>
      <div>
        <img className="h-[400px] w-[100vw]" src={img6} alt="img" />
      </div>
    </Slider>
  );
};

export default Carousel;
