import HomeBottom from "./components/blocks/HomeBottom";
import HomeText from "./components/blocks/HomeText";
import Header from "./components/sections/Header";
import "@/app/css/home.css"
import "@/app/css/about.css"
import "@/app/css/works.css"
import "@/app/css/drops.css"
import "@/app/css/scroll.css"
import Burger from "./components/sections/MobileHeader";
import Button from "./components/elements/Button";
import Card from "./components/blocks/Card";
import SlideCard from "./components/blocks/SlideCard";

export default function Home() {
  return (
    <div>
      <section className="home_section container">
        <Header lang="en" />
        <Burger lang="en" />
        <HomeText lang="en" />
        <HomeBottom lang="en" />
        <img className="home_tiger-image" alt="tiger" src="/tiger.png"></img>
      </section>
      <section className="container gradient-section pc-cells">
        <div className="cards-grid">
          <div className="mob-cells phone-el">
            <h2 className="about_title bold"><span>Gamified</span> <span>Pre-Seasons</span> <span>Push</span></h2>
            <div className="phone_container">
              <img src="/phone_mob.png"></img>
            </div>
            <p className="phone-text thin">Sports, Gaming, and Blockchain — Playing in the Same Bambosso League</p>
            <Button color="#1C76A4" text="Start" link="#" icon="/wings.svg" iconPosition="right"></Button>
          </div>

        </div>
        <div className="cards">
          <Card position="01" title="Unique NFT Cards" img="/card_1_img.png" />
          <Card position="02" title="Access to exclusive offline events" img="/card_2_img.png" />
          <Card position="03" title="VIP workshop with pro footballers" img="/card_3_img.png" />
          <Card position="04" title="IRL merch giveaways" img="/card_4_img.png" />
        </div>
      </section>
      <h1 className="works_title">
        <img src="/works_title.png" alt="how it works"></img>
      </h1>
      <section className="works-section container">
        <SlideCard img="/slide_card-1.png" title="Shape your hero, make your's legendary" position={1} />
        <SlideCard img="/slide_card-2.png" title="Gamified battles, fast-paced, strategic wins" position={2} />
        <SlideCard img="/slide_card-3.png" title="Boost your rank: earn cases, power-ups, and climb the leaderboard" position={3} />
        <SlideCard img="/slide_card-4.png" title="Support your club — earn points for victories" position={4} />
      </section>
      <section className="drops_section container">
        <h1 className="drops_title bold">Loot Drops While You Play!</h1>
        <div className="drops_text-right drops_text">
          <div>
            <p className="bold">NFTs</p>
            <p className="bold">and</p>
            <p className="bold">loot cases</p>
          </div>
        </div>
        <div className="drops_text-left drops_text">
          <div>
            <p className="bold">Open cases,</p>
            <p className="bold">collect NFTs</p>
            <p className="bold">win real prizes</p>

            <p className="thin">Every match is a new chance to score epic rewards!</p>
          </div>
        </div>
        <div className="drops_tiger-container">
          <img src="/full-tiger.png"></img>
        </div>
      </section>
      <section className="scroll-cards_section container">

      </section>
    </div>
  );
} 
