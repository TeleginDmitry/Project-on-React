import {Route, Routes} from 'react-router-dom'
import { RoutesPage } from '../Routes/RoutesPage'


function AppRouter () {
    return (
        <div>
            <Routes>
                {RoutesPage.map((el, index) => {
                    return <Route key={index} path={el.path} element={el.element}></Route>
                })}
            </Routes>
        </div>
    )
}



export default AppRouter