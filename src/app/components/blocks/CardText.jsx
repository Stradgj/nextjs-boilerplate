export default function CardText({ num, title, text, isLeft }) {
  return (
    <div className={`card-text_block ${isLeft && 'left'}`}>
      <article>
        <div className="card-text_icon">
          <span>S{num}</span>
        </div>
        <h3 className="card-text_title bold">{title}</h3>
        <p className="card-text_p thin">{text}</p>
      </article>
    </div>
  );
}
