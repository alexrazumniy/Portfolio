import { useState, useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import earth_globe from "../assets/icons/earth_globe.svg"

const ToggleLang = () => {
    const { changeLanguage } = useContext(ThemeContext);
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <div>
            <img onClick={toggleMenu} src={earth_globe} alt="globe" />

            {isMenuOpen && (

                <ul className="lang_selector">
                    <button className="lang_en_button" onClick={() => changeLanguage("en")}>EN</button>
                    <button className="lang_ru_button" onClick={() => changeLanguage("ru")}>RU</button>
                </ul>
            )}

        </div>
    );
};

export default ToggleLang;