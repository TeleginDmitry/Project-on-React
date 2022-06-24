import React, { useRef } from "react";
import { useState } from "react";
import PostsList from "../Components/PostList";
import MyButton from "../UI/button/MyButton";
import CreatePost from "../Components/CreatePost/CreatePost";
import { useEffect } from "react";
import { PostService } from "../API/PostService";
import Loader from "../UI/Loader/Loader";
import { usePostFetch } from "../hooks/usePostFetch";
import Select from "../UI/Select/Select";
import { usePosts, useSorterPosts } from "../hooks/useSortedPost";
import { usePageCount } from "../hooks/usePageCount";
import { useObserver } from "../hooks/useObserver";




const Posts = () => {
    const [posts, setPosts] = useState([])





    const [limitPage, setLimitPage] = useState({limit: 10, page: 1})
    const [totalCount, setTotalCount] = useState(0)
    
    const childRef = useRef()

    const [fetchPosts, isPostsLoading, postError] = usePostFetch(async() => {
        const response = await PostService(limitPage.limit, limitPage.page)
        setPosts([...posts, ...response.data])
        setTotalCount(response.headers['x-total-count'])
    })
    
    const observer = useObserver(childRef, limitPage, setLimitPage, totalCount,  isPostsLoading, () => fetchPosts)
    useEffect(() => fetchPosts,[])

    
    
    
    


    const [filter, setFilter] = useState({ sort: '', query: '' })
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
   
    function removePost(id) {
        setPosts(posts.filter(el => el.id !== id))
    }
    function createPost(newPost) {
        setPosts([...posts, newPost])
    }
    
    
   
    return (
        <div className="post">
            <div>
                <CreatePost id={posts.length} createPost={createPost}></CreatePost>
                <Select filter={filter} setFilter={setFilter} optionDefault='Сортировать' options={[
                    {name: 'По имени', value: 'title'},
                    {name: 'По описанию', value: 'body'}
                ]}></Select>
                {postError && <h1>Произошла ошибка {postError}</h1>}
                {isPostsLoading ? <Loader></Loader> : <PostsList title='Посты' remove={removePost} posts={sortedAndSearchedPosts}></PostsList>}
                <div ref={childRef} style={{height: 20, background: 'green'}}></div>
            </div>
        </div>
    )
}


export default Posts