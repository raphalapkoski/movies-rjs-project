import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Details from './pages/Details';

export default function Router() {
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/details/:id' element={<Details/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );
}