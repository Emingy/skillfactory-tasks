import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import SignIn from './signIn';
import logo from '../img/Logo.svg';

function Header() {
    const [buttonDisable, setDisabled] = useState(true);
    const updateData = (value) => {
        setShow(value)
    }
    const [showModal, setShow] = useState(false);
    const updateDataRec = (value) => {
        setShowRec(value)
    }
    const [showModalRec, setShowRec] = useState(false);    
    const updateDataSuc = (value) => {
        setShowSuc(value)
    }
    const [showSuc, setShowSuc] = useState(false);
    let srcAboutPage = '../About';
    let srcFaqPage = '../Faq';

    function close(){
        window.scrollTo(0,0)
        let checkbox = document.getElementById('menu__toggle')
        checkbox.checked = false;
    }
    return (
        <header className="flex">
        <a href="#"><img className="h-logo" src={logo} alt="SkillDrive" /></a>
        <div className="h-menu hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label className="menu__btn" for="menu__toggle">
                <span></span>
            </label>
            <div className="menu_box">
                <NavLink to={srcAboutPage} activeClassName='active' onClick={close}>О нас</NavLink>
                <span></span>
                <a href="#">Условия</a>
                <span></span>
                <NavLink to={srcFaqPage} activeClassName='active' onClick={close}>Частые вопросы</NavLink>
                <button>Войти</button>
            </div>
        </div>
        <nav>
            <NavLink to={srcAboutPage} activeClassName='active'>О нас</NavLink>
            <a href="#">Условия</a>
            <NavLink to={srcFaqPage} activeClassName='active'>Частые вопросы</NavLink>
        </nav>
        <button className="h-signin" onClick={()=> setShow(true)}>Войти</button>
        {showModal && <SignIn updateData={updateData} updateDataRec={updateDataRec} showModalRec={showModalRec} setShowSuc={setShowSuc} showSuc={showSuc} buttonDisable={buttonDisable} setDisabled={setDisabled}></SignIn>}
    </header>
    );
}

export default Header;
