'use client';
import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';

export default function SliderSection() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);

  function useIsMobile(bp = 700) {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
      const mql = window.matchMedia(`(max-width: ${bp}px)`);
      const onChange = (e) => setIsMobile(e.matches);
      onChange(mql); // первичная установка
      mql.addEventListener('change', onChange);
      return () => mql.removeEventListener('change', onChange);
    }, [bp]);
    return isMobile;
  }

  const data = [
    { title: 'SPORT CHAMPIONS', img: '/Champion.png' },
    { title: 'UNIQUE NFTS', img: '/NFTs.png' },
    { title: 'PRIVATE OFFLINE EVENTS', img: '/Events.png' },
    { title: 'Exclusive Merchandise', img: '/Merchandise.png' },
    { title: 'Access to VIP Workshops', img: '/VIP.png' },
  ];

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  // Картинки
  const settingsImages = {
    className: 'center images-slider',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    centerPadding: '25%',
    speed: 500,
    arrows: false,
    asNavFor: nav2,
  };

  const isMobile = useIsMobile(700);

  const settingsTitles = React.useMemo(
    () =>
      isMobile
        ? {
            className: 'slider-titles',
            centerMode: true,
            infinite: true,
            slidesToShow: 1,
            centerPadding: '25%',
            swipeToSlide: true,
            focusOnSelect: true,
            arrows: false,
            asNavFor: nav1,
          }
        : {
            className: 'slider-titles',
            centerMode: true,
            infinite: true,
            slidesToShow: 3,
            centerPadding: '0',
            swipeToSlide: true,
            focusOnSelect: true,
            arrows: false,
            asNavFor: nav1,
          },
    [isMobile, nav1]
  );

  return (
    <div className="slider-section container">
      <div className="slider-container">
        <Slider ref={sliderRef1} {...settingsImages}>
          {data.map((slide, i) => (
            <div index={i} key={i}>
              <div className="slide-card">
                <img className="card-img" src={slide.img} alt={slide.title} />
                <img
                  className="card-img card-reflection"
                  src={slide.img}
                  alt=""
                  aria-hidden="true"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="titles-decor">
          {/* верхний декор */}
          <span className="decor-top" aria-hidden="true">
            <svg
              width="52"
              height="23"
              viewBox="0 0 52 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.0305 5.12132C4.14061 3.23143 5.47911 0 8.15182 0H20.9092C22.566 0 23.9092 1.34315 23.9092 3V15.7574C23.9092 18.4301 20.6778 19.7686 18.7879 17.8787L6.0305 5.12132Z"
                fill="#FFE9D9"
              />
              <path
                d="M45.9695 5.12132C47.8594 3.23143 46.5209 0 43.8482 0H31.0908C29.434 0 28.0908 1.34315 28.0908 3V15.7574C28.0908 18.4301 31.3222 19.7686 33.2121 17.8787L45.9695 5.12132Z"
                fill="#FFE9D9"
              />
            </svg>
          </span>

          {/* нижний декор */}
          <span className="decor-bottom" aria-hidden="true"></span>

          <Slider ref={sliderRef2} {...settingsTitles}>
            {data.map((slide, i) => (
              <div index={i} key={i}>
                <p className="bold slider-text-slide">{slide.title}</p>
              </div>
            ))}
          </Slider>

          {/* нижние линии (пунктир + сплошная под ним — если добавлял через ::after, оставь) */}
        </div>
      </div>
    </div>
  );
}
