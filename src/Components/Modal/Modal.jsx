import React from "react";
import { useContext } from "react";
import { useState } from "react";
import MyButton from '../../UI/button/MyButton'
import MyInput from '../../UI/input/MyInput'
import { loginContext } from "../Context";
import './MyModal.css'

const Modal = ({setModal, modal}) => {
    const {login, setLogin} = useContext(loginContext)
    const [inputValue, setInputValue] = useState()

    const classes = ['wrapper']
    if (modal) {
        classes.push('wrapper__active')
    } 

    const nameLogin = (e) => {
        e.preventDefault()
        setLogin(inputValue)
        setModal(false)
    }

    return (
        <div onClick={(e) => {
            if (!e.target.closest('.modal')) {
                setModal(false)
            }
        }} className={classes.join(' ')}>
            <div onSubmit={(e) => nameLogin(e)} className="modal">
                <form className="form" action="">
                    <div className="form__block-close"><p onClick={() => setModal(false)} className="form__close">X</p></div>
                    <div className="form__inputs">
                        <MyInput onChange={(e) => setInputValue(e.target.value)} placeholder='Введите логин'></MyInput>
                        <MyInput placeholder='Введите пароль'></MyInput>
                    </div>
                    <div className="form__btns">
                        <MyButton>Войти</MyButton>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default Modal