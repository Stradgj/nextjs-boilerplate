'use client';

import { useState } from "react";
import "@/app/css/button.css";

export default function Button({ text, color, icon, link, iconPosition }) {
    const [isHover, setIsHover] = useState(false);

    const style = {
        boxShadow: isHover
            ? `0 0 0 3px ${color}`
            : "none",
        transition: "box-shadow 0.2s ease",
        flexDirection: iconPosition === "right" ? "row" : "row-reverse"
    };
    const iconStyle = {
        backgroundColor: color,
        margin: iconPosition === "right" ? "0 0 0 auto" : "0 auto 0 0"
    }

    return (
        <a
            className="custom_button thin"
            href={link}
            style={style}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <span>{text}</span>
            <div style={iconStyle} className="button-icon_container">
                <img src={icon} />
            </div>
        </a>
    );
}
