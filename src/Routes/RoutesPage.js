import Posts from '../pages/Posts'
import About from '../pages/About'
import Error from '../pages/Error'
import Home from '../pages/Home'


export const RoutesPage = [
    {path: '/posts', element: <Posts></Posts>},
    {path: '/about', element: <About></About>},
    {path: '/', element: <Home></Home>},
    {path: '*', element: <Error></Error>},
]