import React, { useState } from "react";
import MyButton from "../../UI/button/MyButton";
import MyInput from "../../UI/input/MyInput";




const CreatePost = ({ createPost, id }) => {
    const [post, setPost] = useState({
        title: "",
        body: "",
    });

    const addNewPost = (e) => {
        e.preventDefault()
        if (post.body.length > 0 && post.title.length > 0) {
            const newPost = {
                id: id + 1, ...post
            }
            createPost(newPost)
            setPost({ title: "", body: "" })
        }
        
    };


    return (
        <form className="form" onSubmit={(e) => addNewPost(e)} action="">
            <MyInput placeholder='Введите название поста' value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })}></MyInput>
            <MyInput placeholder='Введите описание поста' value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })}></MyInput>
            <MyButton>Создать</MyButton>
        </form>
    )
}


export default CreatePost