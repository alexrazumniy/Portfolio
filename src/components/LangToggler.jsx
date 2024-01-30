import { useState, useContext, useRef, useEffect } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";
import flag_en from "../assets/icons/flag-en.svg";
import flag_ua from "../assets/icons/flag-ua.svg";
import flag_ru from "../assets/icons/flag-ru.svg";

const ToggleLang = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { changeLanguage } = useContext(ThemeContext);
    const menuRef = useRef(null);

    const language = localStorage.getItem("i18nextLng");
    // const uppercasedLanguage = language ? language.toUpperCase() : '';

    const languages = {
        en: { label: "English", flag: flag_en },
        ua: { label: "Українська", flag: flag_ua },
        ru: { label: "Русский", flag: flag_ru },
    };

    const menuLanguages = Object.keys(languages).filter((lang) => lang !== language);

    const toggleMenu = () => {
        setMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    }

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div ref={menuRef}>
            <button className="lang_toggler" onClick={toggleMenu}>
                {languages[language] && <img src={languages[language].flag} alt={`flag_${language}`} />}
            </button>
            {isMenuOpen && (
                <div className="lang_menu">
                    <ul className="lang_menu_list">
                        {menuLanguages.map((lang) => (
                            <li key={lang} className="lang_menu_list_item" onClick={() => changeLanguage(lang)}>
                                <img src={languages[lang].flag} alt={`flag_${lang}`} />
                                <p>{languages[lang].label}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleLang;