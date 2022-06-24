import React from "react";
import cl from './MyInput.module.css'

const MyInput = ({ placeholder, type, ...props }) => {
    return (
        <input {...props} className={cl.input} type={type} placeholder={placeholder}></input>
    )
}

export default MyInput