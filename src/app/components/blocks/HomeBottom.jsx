import Button from "../elements/Button";

export default function HomeBottom({ lang }) {
    return (
        <div className="home_bottom-section">
            <div className="home_bottom-text_container">
                <p className="thin">{lang === "en" ? "The Bridge Between Fans and Pro Sport, New Era of Fan Support, Web3 Gamification, and Talent Discovery" : "прямий звʼязок між фанами та спортом: нова ера підтримки, Web3-гейміфікація та відкриття талантів"}</p>
                <p className="thin">{lang === "en" ? "You’re not just a fan. You’re a game-changer. Shape the season with your actions" : "Ти не просто фанат. Ти змінюєш правила гри. впливай на сезон своїми діями"}</p>
            </div>
            <div className="home_bottom-buttons_container">
                <Button link="#" icon="/paw.svg" text={lang === "en" ? "Learn More" : "більше інфо"} color="#67341E" iconPosition="left" />
                <Button link="#" icon="/scar.svg" text={lang === "en" ? "Start" : "Почати гру"} color="#1C76A4" iconPosition="right" />
            </div>
        </div >
    )
}