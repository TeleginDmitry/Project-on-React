import React from "react";
import MyButton from "../UI/button/MyButton";

const PostsItem = ({ id, title, body, remove }) => {

    return (

        <div className="post__item">
            <div className="post__content">
                <div className="post__title">{id}.{title}</div>
                <div className="post__body">{body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => remove(id)}>Удалить</MyButton>
            </div>
        </div>
    )
}


export default PostsItem