export default function HomeText({ lang }) {
    return (
        <div className="home-text">
            <div className="home-text_top thin">
                <span>ready</span>
                <span>own</span>
                <span>an</span>
                <span>piece</span>
                <span>of</span>
                <span>the</span>
                <span>exclusive</span>
                <span>bambosso</span>
                <span>legend</span>
            </div>
            <div className="home_title-container">
                <img src="/hero-title.png" alt="BAMBOSSO"></img>
            </div>
            <div className="mobile-home-info">
                <p className="mobile-home-text thin">{lang === "en" ? "The Bridge Between Fans and Pro Sport, New Era of Fan Support, Web3 Gamification, and Talent Discovery" : "прямий звʼязок між фанами та спортом: нова ера підтримки, Web3-гейміфікація та відкриття талантів"}</p>
                <h1 className="mobile-home-title bold">BAMBOSSO</h1>
                <p className="mobile-home-text thin">{lang === "en" ? "You’re not just a fan. You’re a game-changer. Shape the season with your actions" : "Ти не просто фанат. Ти змінюєш правила гри. впливай на сезон своїми діями"}</p>
            </div>
        </div>
    )
}