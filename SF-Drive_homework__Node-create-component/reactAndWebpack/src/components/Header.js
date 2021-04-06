import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import SignUp from './signIn';
import logo from '../img/Logo.svg';

function Header() {
    const updateData = (value) => {
        setShow(value)
        console.log(value)
    }
    const [showModal, setShow] = useState(false);
    let srcAboutPage = '../About';
    let srcFaqPage = '../Faq'
    return (
        <header className="flex">
        <a href="#"><img className="h-logo" src={logo} alt="SkillDrive" /></a>
        <div className="h-menu hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>
            <div className="menu_box">
                <NavLink to={srcAboutPage} activeClassName='active'>О нас</NavLink>
                <span></span>
                <a href="#">Условия</a>
                <span></span>
                <NavLink to={srcFaqPage} activeClassName='active'>Частые вопросы</NavLink>
                <button>Войти</button>
            </div>
        </div>
        <nav>
            <NavLink to={srcAboutPage} activeClassName='active'>О нас</NavLink>
            <a href="#">Условия</a>
            <NavLink to={srcFaqPage} activeClassName='active'>Частые вопросы</NavLink>
        </nav>
        <button className="h-signin" onClick={()=> setShow(true)}>Войти</button>
        {showModal && <SignUp updateData={updateData}></SignUp>}
    </header>
    );
}

export default Header;
