'use client'
import { useState } from "react";
import "../../css/mobHeader.css";
import Button from "../elements/Button";

export default function Burger({ lang }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
        const bodyEl = document.querySelector("body");
        if (isOpen) {
            bodyEl.classList.remove("no-scroll")
        } else {
            bodyEl.classList.add("no-scroll")
        }
    };

    return (
        <header className={`mob-header ${isOpen ? "open" : ""}`}>
            <div className="mob-header_logo-container">
                <img src="/small-logo.svg" alt="Logo" />
            </div>
            <div className="mob-header_buttons">
                <div className="mob-lang-switcher">
                    <div className="mob-languages">
                        <div className="mob-lang">
                            <a href={lang === "en" ? "/ua" : "/en"} className="bold" >
                                {lang === "en" ? "EN" : "UA"}
                            </a>
                        </div>

                    </div>
                    <div className="language-arrow">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.00042 3.78077L8.30028 0.480957L9.24308 1.42376L5.00042 5.66644L0.757812 1.42376L1.70062 0.480957L5.00042 3.78077Z" fill="#FFE9D9" />
                        </svg>
                    </div>
                </div>
                <div
                    className={`burger-button ${isOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                    <div className="burger-line"></div>
                </div>
            </div>
            <div className="burger-menu">
                <nav className="burger-menu_navigation">
                    <ul className="burger-menu_navigation-list">
                        <li className="burger-menu_navigation-list_item thin underline">
                            <a href="#">{lang === "en" ? "Early Birds" : "ранні доступи"}</a>
                        </li>
                        <li className="burger-menu_navigation-list_item thin underline">
                            <a href="#">{lang === "en" ? "Gameplay" : "геймплей"}</a>
                        </li>
                        <li className="burger-menu_navigation-list_item thin underline">
                            <a href="#">{lang === "en" ? " NFTs and Loot Cases" : "NFT"}</a>
                        </li>
                        <li className="burger-menu_navigation-list_item thin underline">
                            <a href="#">{lang === "en" ? "Club System" : "клубна система"}</a>
                        </li>
                        <li className="burger-menu_navigation-list_item thin underline">
                            <a href="#">{lang === "en" ? "Roadmap" : "План дій"}</a>
                        </li>
                    </ul>
                </nav>
                <div className="burger-button_container">
                    <Button color="#1C76A4" text={lang === "en" ? "Start" : "Почати гру"} link="#" icon="/wings.svg" iconPosition="right"></Button>
                </div>
                <h2 className="burger-title bold" >BAMBOSSO</h2>
                <img className="burger-image" src="/burger-animals.png"></img>
            </div>
        </header>
    );
}
