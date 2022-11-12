import React from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function MyRoutes(){
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Main/>} />
                <Route exact path='/repositorio/:repositorio' element={<Repositorio/>} />
            </Routes>
        </BrowserRouter>
    );
}