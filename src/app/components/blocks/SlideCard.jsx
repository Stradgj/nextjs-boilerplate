import '../../css/slide-card.css';

export default function SlideCard({ img, position, title }) {
  const top = position * 40 + (position - 1) * 10;
  return (
    <article className="slide_card" style={{ top: `${top}px` }}>
      <h3 className="slide_card-title bold">{title}</h3>
      <div className="slide_card_number">{`[ 0${position} ]`}</div>
      <div className="slide_card-image_container">
        <img src={img} />
      </div>
    </article>
  );
}
