import React from "react";

const NavPanel = () => (
    <div className="left-menu">
        <nav>
            <div className="left-menu__sections">
                <ul>
                    <li className="active" data-order="1">
                        <a href="#"> Архитектура</a>
                    </li>
                    <li data-order="2">
                        <a href="#"> Благоустройство</a>
                    </li>
                    <li data-order="3">
                        <a href="#"> Безопасность</a>
                    </li>
                    <li data-order="4">
                        <a href="#"> Инженерия</a>
                    </li>
                    <li data-order="5">
                        <a href="#"> Инфраструктура</a>
                    </li>
                    <li data-order="6">
                        <a href="#"> Транспортная доступность</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);

export default NavPanel;
