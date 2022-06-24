import React, { useState } from "react";
import MyInput from "../input/MyInput";
import cl from './Select.module.css'

const Select = ({ optionDefault, options, filter, setFilter }) => {


    return (
        <div>
            <select value={optionDefault} onChange={(e) => setFilter({...filter, sort: e.target.value})} className={cl.select}>
                <option disabled>{optionDefault}</option>
                {options.map((option, index) => {
                    return <option key={index} value={option.value}>{option.name}</option>
                })}
            </select>
            <MyInput value={filter.query} onChange={(e) => setFilter({...filter, query: e.target.value})} placeholder='Найти пост'></MyInput>
        </div>
    )
}


export default Select