import { useEffect, useState } from "react";
import my_photo from "./../assets/my_photo.jpg";

const MyPhotoWithAnimation = () => {
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        // Класс для запуска анимации после монтирования компонента
        setAnimationClass("animate_photo");
    }, []);

    return (
        <div className={`photo_container ${animationClass}`}>
            <img src={my_photo} alt="my_photo" />
        </div>
    );
};

export default MyPhotoWithAnimation;