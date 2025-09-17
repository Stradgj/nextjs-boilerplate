import '@/app/css/footer-card.css';
export default function FooterCard({ text, logo }) {
  return (
    <a href="#" className="footer-card">
      <div className="footer-card_logo">
        <img src={logo} alt={text} />
      </div>
      <div className="footer-card_arrow">
        <img src="/arrow.svg"></img>
      </div>
      <div className="footer-card_text bold">{text}</div>
    </a>
  );
}
