import React, {useState} from 'react';

import SignUp from './signIn'
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
                <a className={srcAboutPage.indexOf(window.location.pathname)!==-1 ? 'active' : 'disable'}  href={srcAboutPage}>О нас</a>
                <span></span>
                <a href="#">Условия</a>
                <span></span>
                <a className={srcFaqPage.indexOf(window.location.pathname)!==-1 ? 'active' : 'disable'} href={srcFaqPage}>Частые вопросы</a>
                <button>Войти</button>
            </div>
        </div>
        <nav>
            <a className={(window.location.pathname!='/' && srcAboutPage.indexOf(window.location.pathname)!==-1) ? 'active' : 'disable'} href={srcAboutPage}>О нас</a>
            <a href="#">Условия</a>
            <a className={(window.location.pathname!='/' && srcFaqPage.indexOf(window.location.pathname)!==-1) ? 'active' : 'disable'} href={srcFaqPage}>Частые вопросы</a>
        </nav>
        <button className="h-signin" onClick={()=> setShow(true)}>Войти</button>
        {showModal && <SignUp updateData={updateData}></SignUp>}
    </header>
    );
}

export default Header;
