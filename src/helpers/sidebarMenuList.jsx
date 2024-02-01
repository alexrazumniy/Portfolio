import home from "./../assets/icons/home.svg";
import phone from "./../assets/icons/phone.svg";
import portfolio from "./../assets/icons/portfolio.svg";
import man from "./../assets/icons/man.svg";

const sidebar_menu = [
  {
    id: 1,
    text: "Home",
    img: home,
    link: "/",
  },
  {
    id: 2,
    text: "Contacts",
    img: phone,
    link: "/projects",
  },
  {
    id: 3,
    text: "Portfolio",
    img: portfolio,
    link: "/about_me",
  },
  {
    id: 4,
    text: "About Me",
    img: man,
    link: "https://alexrazumniy.github.io/Task-Manager/",
  },
];

export { sidebar_menu };
