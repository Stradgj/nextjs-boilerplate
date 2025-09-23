import HomeBottom from '@/app/components/blocks/HomeBottom';
import HomeText from '@/app/components/blocks/HomeText';
import Header from '@/app/components/sections/Header';
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
import Burger from '@/app/components/sections/MobileHeader';
import Button from '@/app/components/elements/Button';
import Card from '@/app/components/blocks/Card';
import SlideCard from '@/app/components/blocks/SlideCard';
import GradientCard from '@/app/components/blocks/GradientCard';
import Benefit from '@/app/components/blocks/Benefit';
import CardText from '@/app/components/blocks/CardText';
import SliderSection from '@/app/components/sections/Slider';
import FooterCard from '@/app/components/blocks/FooterCard';

export default function Home() {
  return (
    <div>
      <section className="home_section container">
        <Header lang="ua" />
        <Burger lang="ua" />
        <HomeText lang="ua" />
        <HomeBottom lang="ua" />
        <img className="home_tiger-image" alt="tiger" src="/tiger.png"></img>
      </section>
      <section className="container gradient-section pc-cells" id="early-birds">
        <div className="cards-grid cells">
          <div className="mob-cells phone-el">
            <h2 className="about_title bold">
              <span>Гейміфікована</span> <span>передсезонна</span> <span>підготовка</span>
            </h2>
            <div className="phone_container">
              <img className="phone-mob" src="/phone_mob.png"></img>
              <img className="phone" src="/phone.png"></img>
            </div>
            <p className="phone-text thin">
              Спорт, ігри та блокчейн - грають в одній лізі Бамбоссо
            </p>
            <Button
              color="#1C76A4"
              text="Почати гру"
              link="#"
              icon="/wings.svg"
              iconPosition="right"
            ></Button>
          </div>

          <Card position="01" title="Унікальні NFT-картки" img="/card_1_img.png" />
          <Card position="02" title="Доступ до ексклюзивних офлайн-подій" img="/card_2_img.png" />
          <Card
            position="03"
            title="VIP майстер-клас з професійними футболістами"
            img="/card_3_img.png"
          />
          <Card position="04" title="Розіграші сувенірів IRL" img="/card_4_img.png" />
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
        <img src="/works_title_ua.png" alt="how it works"></img>
      </h1>
      <section className="works-section container" id="works">
        <SlideCard
          img="/slide_card-1.png"
          title="Створіть свого героя, зробіть його легендарним"
          position={1}
        />
        <SlideCard
          img="/slide_card-2.png"
          title="Гейміфіковані битви, швидкий темп, стратегічні перемоги"
          position={2}
        />
        <SlideCard
          img="/slide_card-3.png"
          title="Підвищуйте свій рейтинг: заробляйте кейси, бонуси та очолюйте таблицю лідерів"
          position={3}
        />
        <SlideCard
          img="/slide_card-4.png"
          title="Підтримайте свій клуб - заробляйте бали за перемоги"
          position={4}
        />
        <SlideCard
          img="/slide_card-5.png"
          title='зустріньтесь зі своїми спортивними героями та опануйте роль "скаута"'
          position={5}
        />
      </section>
      <section className="drops_section container" id="drops">
        <h1 className="drops_title bold">Під час гри падає лут!</h1>
        <div className="drops_text-right drops_text drops_text-mob">
          <div>
            <p className="bold">NFT</p>
            <p className="bold">та</p>
            <p className="bold">подарунки</p>
          </div>
        </div>
        <div className="drops_text-left drops_text drops_text-mob">
          <div>
            <p className="bold">Відкривайте кейси,</p>
            <p className="bold">збирайте NFT,</p>
            <p className="bold">вигравайте реальні призи</p>

            <p className="thin">Кожен матч - це новий шанс заробити епічні нагороди!</p>
          </div>
        </div>
        <div className="drops_tiger-container">
          <img className="mob-tiger" src="/full-tiger.png"></img>
          <img className="pc-tiger" src="/full-tiger-big.png"></img>
        </div>
        <div className="drops_text-right drops_text drops_text-pc drops_text-pc-1">
          <div>
            <p className="bold">NFT</p>
            <p className="bold">та</p>
          </div>
        </div>
        <div className="drops_text-right drops_text drops_text-pc drops_text-pc-2">
          <div>
            <p className="bold">подарунки</p>
          </div>
        </div>
        <div className="drops_text-left drops_text drops_text-pc drops_text-pc-3">
          <div>
            <p className="bold">Відкривайте кейси,</p>
            <p className="bold">збирайте NFT,</p>
            <p className="bold">вигравайте реальні призи</p>

            <p className="thin">Кожен матч - це новий шанс заробити епічні нагороди!</p>
          </div>
        </div>
        <div className="drops-cards">
          <GradientCard
            colX="#DCCDB3"
            colY="#441901"
            title="стандартні кейси"
            text="Розблокуйте круті ігрові скіни та оновлення"
            img="/white.png"
          />
          <GradientCard
            colX="#B05E01"
            colY="#441901"
            title="преміальні кейси"
            text="Покращуйте свій аватар рідкісними предметами та бонусами"
            img="/orange_bambosso.png"
          />
          <GradientCard
            colX="#0071A9"
            colY="#110C10"
            title="фізичні кейси"
            text="Отримайте NFT, справжній мерч та шанс зустрітися з футбольними зірками!"
            img="/blue.png"
          />
        </div>
      </section>
      <section className="white-gradient" id="loot">
        <div className="scroll-cards_section container">
          <div className="scroll-cards">
            <GradientCard
              colX="#DCCDB3"
              colY="#441901"
              title="стандартні кейси"
              text="Розблокуйте круті ігрові скіни та оновлення"
              img="/white.png"
            />
            <GradientCard
              colX="#B05E01"
              colY="#441901"
              title="преміальні кейси"
              text="Покращуйте свій аватар рідкісними предметами та бонусами"
              img="/orange_bambosso.png"
            />
            <GradientCard
              colX="#0071A9"
              colY="#110C10"
              title="фізичні кейси"
              text="Отримайте NFT, справжній мерч та шанс зустрітися з футбольними зірками!"
              img="/blue.png"
            />
          </div>
        </div>
        <div className="loot-section container">
          <p className="loot-text bold">Оберіть свій улюблений клуб на сезон</p>
          <p className="loot-text bold">Кожна ваша дія приносить бали для вашого клубу</p>
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
            <div>грайте</div>
            <div className="space">грайте</div>
            <div>та отримуйте</div>
            <div>призи</div>
          </h2>
          <p className="loot-text-thin thin">Клуб-переможець отримує фонд пожертвувань</p>
          <p className="loot-text-thin thin">
            Вболівальники отримують ексклюзивні винагороди від клубу
          </p>
        </div>
      </section>
      <section className="benefits-section container">
        <Benefit img="/run.svg" text="Доступ до клубних тренувань" />
        <Benefit img="/stadium.svg" text="Екскурсії по стадіону та за лаштунками" />
        <Benefit img="/ball.svg" text="Зустріч з футболістами" />
        <Benefit img="/calendar.svg" text="Запрошення на приватні заходи" />
      </section>
      <section className="black-orange">
        <h2 className="slider-title bold">Реєструйтесь завчасно — беріть участь у розіграші</h2>
        <div className="slider-subtitle">
          <span className="bold">нагороди</span>
          <span className="bold">за ранній</span>
          <span className="bold">доступ</span>
          <p className="thin">
            чим раніше доєднаєтесь, тим ближче станете до призів, котрі змінюють правила гри!
          </p>
        </div>
        <SliderSection lang="ua" />
        <div className="cards-section container" id="roadmap">
          <h2 className="cards_title bold">Подорож тільки починається</h2>
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
            title="Сезон запуску"
            text="Тестування, ранні маркетингові кампанії та залучення перших гравців"
          />
          <CardText
            num="2"
            isLeft={false}
            title="PvP-битви та завдання зі шІ"
            text="Гравець проти гравця в реальному часі, ШІ-супротивники та рейтингові системи"
          />
          <CardText
            num="3"
            isLeft={true}
            title="Справи про маркетплейс та лут кейси"
            text="Фан-крамницю відкрито! Розблокуйте NFT, ексклюзивні спорядження та несподіваний лут"
          />
          <CardText
            num="4"
            isLeft={false}
            title="Експансія в нові види спорту"
            text="За межами футболу - готуйтеся до нових спортивних  арен та змагань!"
          />
          <CardText
            num="5"
            isLeft={true}
            title="Таємний сезон"
            text="Загадкова, переломна подія, яка назавжди змінить світ спортивних ігор"
          />
        </div>
        <div className="waiting_section">
          <h2 className="waiting_title bold">Ваш клуб чекає на вас</h2>
          <div className="waiting_content">
            <p className="waiting_text thin">
              Приєднуйтесь до Bambosso - місця, де ваша гра змінює все!
            </p>
            <div className="waiting-buttons">
              <Button
                color="#67341E"
                text="більше інфо"
                link="#"
                icon="/paw.svg"
                iconPosition="left"
              ></Button>
              <Button
                color="#1C76A4"
                text="почати гру"
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
            <a href="#early-birds" className="thin underline">
              ранній доступ
            </a>
          </li>
          <li>
            <a href="#works" className="thin underline">
              геймплей
            </a>
          </li>
          <li>
            <a href="#drops" className="thin underline">
              NFT та подарунки
            </a>
          </li>
          <li>
            <a href="#loot" className="thin underline">
              клубна система
            </a>
          </li>
          <li>
            <a href="#roadmap" className="thin underline">
              план дій
            </a>
          </li>
        </ul>
        <img src="/big_logo.svg"></img>
        <div className="footer-white-orange">
          <span className="bold mob-hide">на базі web3</span>
          <span className="bold">© 2025 Bambosso</span>
          <span className="bold pc-hide">All rights reserved</span>
          <span className="bold mob-hide">
            за підтримки <img src="/header-logo.svg"></img>
          </span>
        </div>
      </footer>
      <div className="footer-mob-text container">
        <span className="bold">на базі web3</span>
        <span className="bold">
          за підтримки <img src="/header-logo_mob.svg"></img>
        </span>
      </div>
    </div>
  );
}
