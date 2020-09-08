import React from "react";

const Header = () => (
    <header id="header">
        <div className="header__inner">
            <div className="header__left-part">
                <div className="header__logo">
                    <a href="#">
                        <svg
                            width="70"
                            height="70"
                            viewBox="0 0 70 70"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="70" height="70" fill="#262525" />
                        </svg>
                    </a>
                </div>
                <div className="header__logo-text">Первомайская</div>
            </div>

            <div className="header__middle-part header-menu">
                <ul className="header-menu__items-list">
                    <li className="header-menu__item">
                        <a className="header-menu__item-link" href="#">
                            О комплексе
                        </a>
                    </li>
                    <li className="header-menu__item">
                        <a className="header-menu__item-link" href="#">
                            Особенности
                        </a>
                    </li>
                    <li className="header-menu__item">
                        <a className="header-menu__item-link" href="#">
                            Пентхаусы
                        </a>
                    </li>
                    <li className="header-menu__item">
                        <a className="header-menu__item-link" href="#">
                            Выбрать квартиру
                        </a>
                    </li>
                </ul>
            </div>

            <div className="header__right-part">
                <div className="phone-block">
                    <span className="phone-block__text">8 888 888 88 88</span>
                </div>
                <div className="header-right__logo">
                    <svg
                        width="70"
                        height="70"
                        viewBox="0 0 70 70"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect width="70" height="70" fill="#262525" />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M21.998 47.5521L47.5556 21.995L49.005 23.4442L23.4466 49.0015L21.998 47.5521ZM33.9987 47.5521L47.5556 33.9956L49.005 35.4435L35.4474 49.0015L33.9987 47.5521ZM35.5569 21.995L21.998 35.5532L23.4466 37.0009L37.0042 23.4442L35.5569 21.995Z"
                            fill="#F0F0F0"
                        />
                    </svg>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
