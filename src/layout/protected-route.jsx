

import { Navigate, useLocation } from 'react-router-dom';
import user from '../data/user.json';
function ProtectedRoute({ children }) {
    console.log(user);
    const { pathname } = useLocation();
    const { role } = user;
    return children;
    // if (pathname === '/jobs') {
    //     if(role==='candidate')
    //         return children
    //     else
    //         return <Navigate to="/"/>
    // } 
    // if (pathname === '/post-job') {
    //     if(role==='candidate')
    //         return children
    //     else
    //         return <Navigate to="/"/>
    // }
}

export default ProtectedRoute