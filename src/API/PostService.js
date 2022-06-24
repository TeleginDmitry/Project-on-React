import axios from 'axios'

export const PostService = async (limit, page) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
    return response
}