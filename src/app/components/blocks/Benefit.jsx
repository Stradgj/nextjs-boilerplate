export default function Benefit({ text, img }) {
  return (
    <article className="benefit-block">
      <div className="benefit-icon">
        <img src={img}></img>
      </div>
      <h3 className="benefit-title bold">{text}</h3>
    </article>
  );
}
