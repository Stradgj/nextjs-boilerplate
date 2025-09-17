import "../../css/header.css"
import Button from "../elements/Button"
export default function Header({ lang }) {
    return (
        <header className="header">
            <div className="header_image-container">
                <img className="header_image" src="/main-logo.svg"></img>
            </div>
            <nav className="header_navigation-container">
                <ul className="header_navigation-list">
                    <li className="header_navigation-list_item thin">
                        <a className="underline" href="#">{lang === "en" ? "Early Birds" : "ранні доступи"}</a>
                    </li>
                    <li className="header_navigation-list_item thin">
                        <a className="underline" href="#">{lang === "en" ? "Gameplay" : "геймплей"}</a>
                    </li>
                    <li className="header_navigation-list_item thin">
                        <a className="underline" href="#">{lang === "en" ? " NFTs and Loot Cases" : "NFT"}</a>
                    </li>
                    <li className="header_navigation-list_item thin">
                        <a className="underline" href="#">{lang === "en" ? "Club System" : "клубна система"}</a>
                    </li>
                    <li className="header_navigation-list_item thin">
                        <a className="underline" href="#">{lang === "en" ? "Roadmap" : "План дій"}</a>
                    </li>
                </ul>
            </nav>
            <div className="header_buttons_container">
                <a href="#" className="language_switcher">
                    <div className="language-switcher_container">
                        <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.90332 18.4165H10.6637C10.9173 23.0475 12.4064 27.3492 14.8071 30.9979C8.48256 30.0151 3.54193 24.8486 2.90332 18.4165ZM2.90332 15.5832C3.54193 9.15121 8.48256 3.98474 14.8071 3.00194C12.4064 6.65062 10.9173 10.9524 10.6637 15.5832H2.90332ZM31.0968 15.5832H23.3363C23.0827 10.9524 21.5937 6.65062 19.193 3.00194C25.5175 3.98474 30.4582 9.15121 31.0968 15.5832ZM31.0968 18.4165C30.4582 24.8486 25.5175 30.0151 19.193 30.9979C21.5937 27.3492 23.0827 23.0475 23.3363 18.4165H31.0968ZM13.5019 18.4165H20.4981C20.255 22.359 19.0041 26.0287 17 29.1713C14.9958 26.0287 13.745 22.359 13.5019 18.4165ZM13.5019 15.5832C13.745 11.6409 14.9958 7.97118 17 4.82858C19.0041 7.97118 20.255 11.6409 20.4981 15.5832H13.5019Z" fill="#FFD59A" />
                        </svg>
                        <div className="language_switcher_text thin">{lang === "en" ? "en" : "ua"}</div>
                    </div>
                </a>
                <Button color="#1C76A4" text={lang === "en" ? "Start" : "Почати гру"} link="#" icon="/wings.svg" iconPosition="right"></Button>
            </div>
        </header >
    )
}