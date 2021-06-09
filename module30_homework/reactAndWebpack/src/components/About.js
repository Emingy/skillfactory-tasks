import React from 'react';

import aboutPicture from '../img/undraw_team_spirit_hrr4 1.svg';
import contactRectangle from '../img/Rectangle 24.svg';
import ivanIvanov from "../img/team/IvanIvanov.png";
import alexeySmirnov from "../img/team/AlexeySmirnov.png";
import denisYartsev from "../img/team/DenisYartsev.png";
import nikolayMorozov from "../img/team/NikolayMorozov.png";
import irinaDeeva from "../img/team/IrinaDeeva.png";
import mariyaStrelkova from "../img/team/MariyaStrelkova.png";

function About() {
    return (
        <main>
        <section className="m-about">
            <img className="m-about-picture" src={aboutPicture} alt="О нас" />
            <h1>О нас</h1>
            <p>Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
        </section>
        <section className="m-contact">
            <h2>Контакты</h2>
            <div className="flex m-contact-data">
                <div className="m-contact-data-email">
                    <p className="m-contact-data-email__head">Электронная почта</p>
                    <p className="m-contact-data-email__email"><a href="mailto:drive@skillfactory.com">drive@skillfactory.com</a></p>
                </div>
                <img className="m-contact-data-rectangle" src={contactRectangle} />
                <div className="m-contact-data-number">
                    <p className="m-contact-data-number__head">Телефон</p>
                    <p className="m-contact-data-number__number"><a href="tel:+79121234567">+7 912 123-45-67</a></p>
                </div>
            </div>
        </section>
        <section className="m-team">
            <h2>Команда</h2>
            <div className="m-team-humans-group">
                <div className="m-team-humans-group-human__one">
                    <img className="human-image" src={ivanIvanov} alt="Иван Иванов"/>
                    <p className="human-name">Иван Иванов</p>
                    <p className="human-position">СЕО</p>
                </div>
                <div className="m-team-humans-group-human__two">
                    <img className="human-image" src={alexeySmirnov} alt="Алексей Смирнов"/>
                    <p className="human-name">Алексей Смирнов</p>
                    <p className="human-position">Frontend-разработчик</p>
                </div>
                <div className="m-team-humans-group-human__three">
                    <img className="human-image" src={denisYartsev} alt="Денис Ярцев"/>
                    <p className="human-name">Денис Ярцев</p>
                    <p className="human-position">Backend-разработчик</p>
                </div>
                <div className="m-team-humans-group-human__four">
                    <img className="human-image" src={nikolayMorozov} alt="Николай Морозов"/>
                    <p className="human-name">Николай Морозов</p>
                    <p className="human-position">Дизайнер</p>
                </div>
                <div className="m-team-humans-group-human__five">
                    <img className="human-image" src={irinaDeeva} alt="Ирина Деева"/>
                    <p className="human-name">Ирина Деева</p>
                    <p className="human-position">Копирайтер</p>
                </div>
                <div className="m-team-humans-group-human__six">
                    <img className="human-image" src={mariyaStrelkova} alt="Мария Стрелкова"/>
                    <p className="human-name">Мария Стрелкова</p>
                    <p className="human-position">SMM</p>
                </div>
            </div>
        </section>
    </main>
    );
}

export default About;
