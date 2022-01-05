import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const [loggedInUser,setloggedInUser] = useContext ( UserContext );

    if(!loggedInUser.email)
    {
        return <Navigate to="/loginAndResister" state={{ from: location }} replace />;
    }
    return children;
};

export default PrivateRoute;