import { useState, useContext, useRef, useEffect } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";

const ToggleLang = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const { changeLanguage } = useContext(ThemeContext);
    const menuRef = useRef(null);

    const language = localStorage.getItem("i18nextLng");
    const uppercasedLanguage = language ? language.toUpperCase() : '';

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
            <button className="lang_selector" onClick={toggleMenu}>
                {uppercasedLanguage}
            </button>
            {isMenuOpen && (
                <div className="lang_menu" >
                    <ul className="lang_menu_list">
                        <li className="lang_menu_list_item" onClick={() => changeLanguage("en")}>
                            <p>English</p>
                        </li>
                        <li className="lang_menu_list_item" onClick={() => changeLanguage("ru")}>
                            <p>Русский</p>
                        </li>
                        <li className="lang_menu_list_item" onClick={() => changeLanguage("ua")}>
                            <p>Українська</p>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ToggleLang;