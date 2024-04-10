import React from 'react';
import { Routes, Route, Navigate } from 'react-router';
import cookie from 'cookie';

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
            <Route path="/AdminView" element={<ProtectedRoute component={ AdminView }/>} />
            <Route path="/LoginPage" element={<LoginPage/>} />
            <Route path="/Details/:id" element={<Details/>} />
            <Route path="/AddBiz" element={<ProtectedRoute component={ AddBiz }/>} />
        </Routes>
    );
};

export default Router;