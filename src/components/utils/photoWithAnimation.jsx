import { useEffect, useState } from "react";
import my_photo from "../../assets/my_photo.jpg";

const MyPhotoWithAnimation = () => {
    const [animationClass, setAnimationClass] = useState("");

    useEffect(() => {
        // Класс для апуска анимации после монтирования компонента
        setAnimationClass('animate');
    }, []);

    return (
        <div className={`image_container ${animationClass}`}>
            <img src={my_photo} alt="my_photo" />
        </div>
    );
};

export default MyPhotoWithAnimation;