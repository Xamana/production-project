import { Counter } from './components/Counter';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MainPageAsunc } from './pages/MainPage/MainPage.asunc';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { Suspense, useContext, useState } from 'react';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';




const App = () => {
    const {theme, toogleTheme} = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toogleTheme}>Toogle Theme</button>

            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsunc />}></Route>
                    <Route path={'/about'} element={<AboutPageAsync />}></Route>
                </Routes>
            </Suspense>
            <Counter></Counter>
        </div>
    );
}

export default App;
