import React from 'react';
import { Routes, Route } from 'react-router';
import { Navigate } from 'react-router-dom';
import cookie from 'cookie';
import Listings from './containers/Listings';
import LoginPage from './components/LoginPage';
import Details from './containers/Details';
import AddBiz from './containers/AddBiz';

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie);
    return cookies['loggedIn'] ? true : false;
}

const ProtectedRoute = (props) => {
    const { component: Component, ...rest } = props;

    return (
      checkAuth() === true ? ( <Component {...rest} /> ) : ( <Navigate to="/LoginPage" /> )
    );
}

const Router = () => {
    return (
        <Routes>
            <Route path="/Listings" element={<Listings/>} />
            <Route path="/LoginPage" element={<LoginPage/>} />
            <Route path="/Details/:id" element={<Details/>} />
            <Route path="/AddBiz" element={<ProtectedRoute component={ AddBiz }/>} />
        </Routes>
    );
};

export default Router;