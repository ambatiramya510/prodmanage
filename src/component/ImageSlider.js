import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import './ImageSlider.css';

const images = [
  'elect.jpg',
  'Banner.jpg',
  'rest.jpg', 
  
  'f.jpg' ,
  'womens.jpg'
];

const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      sliderRef.current.slickPrev();
    } else if (event.key === 'ArrowRight') {
      sliderRef.current.slickNext();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="slider-container">
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
