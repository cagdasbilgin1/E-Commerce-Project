import React, { useState } from 'react';
import ReactSlider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import heroImg from '../assets/images/hero-slider.jpg';

const Slider = ReactSlider.default ? ReactSlider.default : ReactSlider;

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
      className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white opacity-75 hover:opacity-100 transition"
      onClick={onClick}
    >
      <ChevronRight className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div 
      className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 z-20 cursor-pointer text-white opacity-75 hover:opacity-100 transition"
      onClick={onClick}
    >
      <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} />
    </div>
  );
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
    appendDots: dots => (
      <div
        style={{
          position: 'absolute',
          bottom: '30px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <ul className="flex items-center gap-1 m-0 p-0 list-none"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div 
        className={`w-12 h-1 md:w-16 md:h-1.5 transition-all cursor-pointer ${
          i === currentSlide ? 'bg-white opacity-100' : 'bg-white opacity-40'
        }`}
      ></div>
    ),
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#E74040]">
      <Slider {...settings}>
        <div className="w-full relative outline-none">
          <div className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] max-w-[1440px] mx-auto px-10">
            <div className="flex flex-col items-center justify-center text-center text-white py-24 md:py-32 w-full h-full relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">GROCERIES DELIVERY</h1>
              <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <button className="bg-[#23A6F0] text-white px-10 py-4 font-bold rounded hover:bg-blue-400 transition text-lg">
                Start Now
              </button>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={heroImg} alt="Groceries" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="w-full relative outline-none">
          <div className="flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] max-w-[1440px] mx-auto px-10">
            <div className="flex flex-col items-center justify-center text-center text-white py-24 md:py-32 w-full h-full relative z-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-3xl leading-tight">FRESH FOOD</h1>
              <p className="text-lg md:text-xl font-medium max-w-lg mb-8">
                Healthy and fresh food delivered to your door.
              </p>
              <button className="bg-[#23A6F0] text-white px-10 py-4 font-bold rounded hover:bg-blue-400 transition text-lg">
                Start Now
              </button>
            </div>
            <div className="absolute inset-0 z-0">
              <img src={heroImg} alt="Fresh Food" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
