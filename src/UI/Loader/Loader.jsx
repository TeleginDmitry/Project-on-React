import React from "react";
import cl from './Loader.module.css'

const Loader = () => {
    return (
        <div className={cl.rotate_block}>
            <div className={cl.circle}>Загрузка</div>
        </div>
    )
}

export default Loader