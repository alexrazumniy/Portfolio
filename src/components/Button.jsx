import { useContext } from "react";
import { ThemeContext } from "./context/ThemeProvider.jsx";

const Button = () => {
    const { t } = useContext(ThemeContext);
    
    return (
        <div>
            <a href="/src/assets/CV_Rozumniy_Oleksii_Frontend.pdf" download="CV_Rozumniy_Oleksii_Frontend.pdf" className="button">
                {t("Download CV")}
            </a>
        </div>
    )
}

export default Button
