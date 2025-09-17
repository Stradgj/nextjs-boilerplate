import '@/app/css/gradient-card.css';

export default function GradientCard({ colX, colY, title, text, img }) {
  return (
    <article
      style={{ background: `radial-gradient(circle, ${colX} 0%, ${colY} 100%)` }}
      className="gradient-card"
    >
      <h3
        className="bold"
        style={{
          background: `linear-gradient(to left, ${colX} 0%, #FFFFFF 100%)`,
        }}
      >
        {title}
      </h3>
      <p className="thin">{text}</p>
      <img src={img}></img>
    </article>
  );
}
