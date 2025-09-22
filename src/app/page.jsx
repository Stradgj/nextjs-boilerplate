import HomeBottom from './components/blocks/HomeBottom';
import HomeText from './components/blocks/HomeText';
import Header from './components/sections/Header';
import '@/app/css/home.css';
import '@/app/css/about.css';
import '@/app/css/works.css';
import '@/app/css/drops.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@/app/css/scroll.css';
import '@/app/css/loot.css';
import '@/app/css/slider.css';
import '@/app/css/cards.css';
import '@/app/css/waiting.css';
import '@/app/css/footer.css';
import Burger from './components/sections/MobileHeader';
import Button from './components/elements/Button';
import Card from './components/blocks/Card';
import SlideCard from './components/blocks/SlideCard';
import GradientCard from './components/blocks/GradientCard';
import Benefit from './components/blocks/Benefit';
import CardText from './components/blocks/CardText';
import SliderSection from './components/sections/Slider';
import FooterCard from './components/blocks/FooterCard';

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
        <div className="cards-grid cells">
          <div className="mob-cells phone-el">
            <h2 className="about_title bold">
              <span>Gamified</span> <span>Pre-Seasons</span> <span>Push</span>
            </h2>
            <div className="phone_container">
              <img className="phone-mob" src="/phone_mob.png"></img>
              <img className="phone" src="/phone.png"></img>
            </div>
            <p className="phone-text thin">
              Sports, Gaming, and Blockchain — Playing in the Same Bambosso League
            </p>
            <Button
              color="#1C76A4"
              text="Start"
              link="#"
              icon="/wings.svg"
              iconPosition="right"
            ></Button>
          </div>

          <Card position="01" title="Unique NFT Cards" img="/card_1_img.png" />
          <Card position="02" title="Access to exclusive offline events" img="/card_2_img.png" />
          <Card position="03" title="VIP workshop with pro footballers" img="/card_3_img.png" />
          <Card position="04" title="IRL merch giveaways" img="/card_4_img.png" />
          <div className="about-bg-text thin">
            <span>Pssst....</span>
            <span>and</span>
            <span>that’s</span>
          </div>
          <div className="about-bg-text thin">
            <span>just</span>
            <span>a</span>
            <span>beginning!</span>
          </div>
        </div>
      </section>
      <h1 className="works_title">
        <img src="/works_title.png" alt="how it works"></img>
      </h1>
      <section className="works-section container">
        <SlideCard
          img="/slide_card-1.png"
          title="Shape your hero, make your's legendary"
          position={1}
        />
        <SlideCard
          img="/slide_card-2.png"
          title="Gamified battles, fast-paced, strategic wins"
          position={2}
        />
        <SlideCard
          img="/slide_card-3.png"
          title="Boost your rank: earn cases, power-ups, and climb the leaderboard"
          position={3}
        />
        <SlideCard
          img="/slide_card-4.png"
          title="Support your club — earn points for victories"
          position={4}
        />
      </section>
      <section className="drops_section container">
        <h1 className="drops_title bold">Loot Drops While You Play!</h1>
        <div className="drops_text-right drops_text drops_text-mob">
          <div>
            <p className="bold">NFTs</p>
            <p className="bold">and</p>
            <p className="bold">loot cases</p>
          </div>
        </div>
        <div className="drops_text-left drops_text drops_text-mob">
          <div>
            <p className="bold">Open cases,</p>
            <p className="bold">collect NFTs</p>
            <p className="bold">win real prizes</p>

            <p className="thin">Every match is a new chance to score epic rewards!</p>
          </div>
        </div>
        <div className="drops_tiger-container">
          <img className="mob-tiger" src="/full-tiger.png"></img>
          <img className="pc-tiger" src="/full-tiger-big.png"></img>
        </div>
        <div className="drops_text-right drops_text drops_text-pc drops_text-pc-1">
          <div>
            <p className="bold">NFTs</p>
            <p className="bold">and</p>
          </div>
        </div>
        <div className="drops_text-right drops_text drops_text-pc drops_text-pc-2">
          <div>
            <p className="bold">Loot Cases</p>
          </div>
        </div>
        <div className="drops_text-left drops_text drops_text-pc drops_text-pc-3">
          <div>
            <p className="bold">Open cases,</p>
            <p className="bold">collect NFTs</p>
            <p className="bold">win real prizes</p>

            <p className="thin">Every match is a new chance to score epic rewards!</p>
          </div>
        </div>
        <div className="drops-cards">
          <GradientCard
            colX="#DCCDB3"
            colY="#441901"
            title="Standard Cases"
            text="Unlock cool game skins and upgrades"
            img="/white.png"
          />
          <GradientCard
            colX="#B05E01"
            colY="#441901"
            title="Premium Cases"
            text="Boost your avatar with rare items and power-ups"
            img="/orange_bambosso.png"
          />
          <GradientCard
            colX="#0071A9"
            colY="#110C10"
            title="Real-World Cases"
            text="Get NFTs, real merch, and chances to meet football stars!"
            img="/blue.png"
          />
        </div>
      </section>
      <section className="white-gradient">
        <div className="scroll-cards_section container">
          <div className="scroll-cards">
            <GradientCard
              colX="#DCCDB3"
              colY="#441901"
              title="Standard Cases"
              text="Unlock cool game skins and upgrades"
              img="/white.png"
            />
            <GradientCard
              colX="#B05E01"
              colY="#441901"
              title="Premium Cases"
              text="Boost your avatar with rare items and power-ups"
              img="/orange_bambosso.png"
            />
            <GradientCard
              colX="#0071A9"
              colY="#110C10"
              title="Real-World Cases"
              text="Get NFTs, real merch, and chances to meet football stars!"
              img="/blue.png"
            />
          </div>
        </div>
        <div className="loot-section container">
          <p className="loot-text bold">Choose your favourite club for the season</p>
          <p className="loot-text bold">Every action you take earns points for your club</p>
          <div className="loot-images">
            <div className="loot-image">
              <img src="/loot-1.png"></img>
            </div>
            <div className="loot-image">
              <img src="/loot-2.png"></img>
            </div>
            <div className="loot-image">
              <img src="/loot-3.png"></img>
            </div>
          </div>
          <h2 className="loot-title bold">
            <div>Loot Drops</div>
            <div className="space">Loot Drops</div>
            <div>While You</div>
            <div>Play</div>
          </h2>
          <p className="loot-text-thin thin">The winning club gets a massive donation pool</p>
          <p className="loot-text-thin thin">Fans earn exclusive rewards from the club</p>
        </div>
      </section>
      <section className="benefits-section container">
        <Benefit img="/run.svg" text="Access to club training sessions" />
        <Benefit img="/stadium.svg" text=" Stadium tours and behind-the-scenes experiences" />
        <Benefit img="/ball.svg" text="Meet & greet with footballers" />
        <Benefit img="/calendar.svg" text="Invitations to private events" />
      </section>
      <section className="black-orange">
        <h2 className="slider-title bold">
          Register early and join the exclusive draw for a chance to win:
        </h2>
        <div className="slider-subtitle">
          <span className="bold">Early</span>
          <span className="bold">Access</span>
          <span className="bold">Rewards</span>
          <p className="thin">
            The earlier you join, the closer you are to the game-changing prizes!
          </p>
        </div>
        <SliderSection />
        <div className="cards-section container">
          <h2 className="cards_title bold">The Journey Has Just Begun</h2>
          <div className="cards-container">
            <figure className="card_image-container">
              <div className="card-container">
                <img className="card-pc" src="/card_1.png" alt=""></img>
              </div>
            </figure>
            <figure className="card_image-container">
              <div className="card-container">
                <img className="card-pc" src="/card_2.png" alt=""></img>
              </div>
            </figure>
            <figure className="card_image-container">
              <div className="card-container">
                <img className="card-pc" src="/card_3.png" alt=""></img>
              </div>
            </figure>
            <figure className="card_image-container">
              <div className="card-container">
                <img className="card-pc" src="/card_4.png" alt=""></img>
              </div>
            </figure>
            <figure className="card_image-container">
              <div className="card-container">
                <img className="card-pc" src="/card_5.png" alt=""></img>
              </div>
            </figure>
          </div>
          <CardText
            num="1"
            isLeft={true}
            title="Launch Season"
            text="Testing, early marketing campaigns, and onboarding our first players"
          />
          <CardText
            num="2"
            isLeft={false}
            title="PvP Battles and AI Challenges"
            text="Real-time player vs player action, AI opponents, and ranking systems"
          />
          <CardText
            num="3"
            isLeft={true}
            title="Marketplace and Loot Cases"
            text="Fan Shop opens! Unlock NFTs, exclusive gear, and surprise loot drops"
          />
          <CardText
            num="4"
            isLeft={false}
            title="Expanding Into New Sports"
            text="Beyond football — get ready for new sports arenas and competitions!"
          />
          <CardText
            num="5"
            isLeft={true}
            title="The Secret Season"
            text="A mysterious, game-changing event that will shake the world of sports gaming forever"
          />
        </div>
        <div className="waiting_section">
          <h2 className="waiting_title bold">Your Club Is Waiting for You</h2>
          <div className="waiting_content">
            <p className="waiting_text thin">
              Join Bambosso — the place where your game changes everything!
            </p>
            <div className="waiting-buttons">
              <Button
                color="#67341E"
                text="Learn more"
                link="#"
                icon="/paw.svg"
                iconPosition="left"
              ></Button>
              <Button
                color="#1C76A4"
                text="Start"
                link="#"
                icon="/scar.svg"
                iconPosition="right"
              ></Button>
            </div>
          </div>
          <div className="animals_container">
            <img className="animals" src="/animals.png"></img>
            <img className="animals-mob" src="/animals-mob.png"></img>
          </div>
          <div className="footer-cards-block container">
            <FooterCard text="discord" logo="/discord.svg" />
            <FooterCard text="telegram" logo="/telegram.svg" />
            <FooterCard text="twitter" logo="/twitter.svg" />
          </div>
        </div>
      </section>
      <footer className="footer container">
        <ul className="footer-white-text">
          <li>
            <a href="#" className="thin underline">
              Early Birds
            </a>
          </li>
          <li>
            <a href="#" className="thin underline">
              Gameplay
            </a>
          </li>
          <li>
            <a href="#" className="thin underline">
              NFTs and Loot Cases
            </a>
          </li>
          <li>
            <a href="#" className="thin underline">
              Club System
            </a>
          </li>
          <li>
            <a href="#" className="thin underline">
              Roadmap
            </a>
          </li>
        </ul>
        <img src="/big_logo.svg"></img>
        <div className="footer-white-orange">
          <span className="bold mob-hide">Web3 Powered</span>
          <span className="bold">© 2025 Bambosso</span>
          <span className="bold pc-hide">All rights reserved</span>
          <span className="bold mob-hide">
            powered by <img src="/header-logo.svg"></img>
          </span>
        </div>
      </footer>
      <div className="footer-mob-text container">
        <span className="bold">Web3 Powered</span>
        <span className="bold">
          powered by <img src="/header-logo_mob.svg"></img>
        </span>
      </div>
    </div>
  );
}
