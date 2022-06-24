import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useHover } from "../hooks/lesson/useHover";
import { useInput } from "../hooks/lesson/useInput";
import { useScroll } from "../hooks/lesson/useScroll";

const Home = () => {
    const value = useInput('')
    const ref = useRef()
    const isHover = useHover(ref)

    const [todos, setTodos] = useState([])
    const [page, setPage] = useState(1)
    const limit = 20
    const [loading, setLoading] = useState()
    async function fetchTodos(page, limit) {
        setLoading(true)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/?_limit=${limit}&_page=${page}`)
        setLoading(false)
        setTodos([...todos, ...response.data])
        setPage(page + 1)
        console.log(page);
    }
    const parentRef = useRef()
    const childRef = useRef()
    const intersected = useScroll(parentRef, childRef,loading, page,  () => fetchTodos(page, limit))
   
    
    return (
        <div>
            <div>
                <input {...value} type="text"/>
            </div>
            <div  ref={ref} style={{width: 300, height: 300, background: isHover ? 'green' : 'blue'}}></div>

            <div ref={parentRef}>
                {todos.map((todo, index) => {
                   return <div key={index} style={{padding: 30, border: '2px solid #000'}}>{todo.id} {todo.title}</div>
                })}
                <div ref={childRef} style={{height: 20, background: 'green'}}></div>
            </div>
        </div>
    )
}


export default Home