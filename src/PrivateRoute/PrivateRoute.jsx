import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <progress className="progress progress-warning w-56">Loading !!</progress>
    }

    if(user){
        return children;
    }

    return <Navigate to="/signIn" state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;