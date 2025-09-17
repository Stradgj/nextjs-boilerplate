'use client';
import { useRef, useEffect, useState } from 'react';
import '../../css/card.css';

export default function Card({ img, position, title }) {
  const isEven = position % 2 === 0;
  const animationClass = isEven ? 'slide-in-left' : 'slide-in-right';

  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // чуть-чуть карточки видно — уже запускаем
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
    };
  }, []);

  return (
    <article ref={cardRef} className={`card ${visible ? animationClass : ''}`}>
      <div className="card_number bold">{position}</div>
      <div className="card-image_container">
        <img src={img} />
      </div>
      <h3 className="card-title bold">{title}</h3>
    </article>
  );
}
