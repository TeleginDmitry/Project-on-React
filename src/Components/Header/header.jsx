import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import MyButton from "../../UI/button/MyButton";
import { loginContext } from "../Context";
import './header.css'

const Header = ({ setModal }) => {
    const { login, setLogin } = useContext(loginContext)


    return (
        <div className="header__item">
            <div className="header__item_logo">
                <Link className="header__logo" to='/'>Ak<span className='header__logo_span'>U</span>ma</Link>
            </div>
            <ul className="header__list">
                <li>
                    <Link className="header__link" to='/posts'>Посты</Link>
                </li>
                <li>
                    <Link className="header__link" to='/about'>Обо мне</Link>
                </li>
            </ul>
            <div className="header__register">
                {login ? <div className="header__register_block"><p className="header__register_link">{login}</p> <MyButton onClick={() => setLogin('')}>Выйти</MyButton></div> : <a onClick={(e) => {
                    e.preventDefault()
                    setModal(true)
                }} className="header__register_link" href="">Зарегистрироваться</a>}
            </div>
        </div>
    )
}


export default Header