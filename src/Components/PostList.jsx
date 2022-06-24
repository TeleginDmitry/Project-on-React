import React from "react";
import { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostsItem from "../Components/PostItem";



const PostsList = ({posts, remove, title}) => {
    if (!posts.length) {
        return (
            <div style={{fontSize:'20px', marginTop:'20px'}}>Постов не существует!</div>
        )
    }
    
    return (
        <div>
            <h1>{title}</h1>
            
            <TransitionGroup>
                {posts.map((post, index) => 
                <CSSTransition key={post.id} timeout={500} classNames="post"> 
                    <PostsItem remove={remove} id={post.id} title={post.title} body={post.body}></PostsItem>
                </CSSTransition>)}
            </TransitionGroup>
            
        </div>
    )
}


export default PostsList