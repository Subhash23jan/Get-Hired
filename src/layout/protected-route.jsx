import PropTypes from 'prop-types';
import { Navigate, useLocation, useParams } from 'react-router-dom';
import user from '../data/user.json';

function ProtectedRoute({ children }) {
    const { pathname } = useLocation();
    const { role } = user;
    const { id } = useParams();

    console.log(user); 
    console.log(role); 

    if (pathname.startsWith('/job/') && id) {
        if (role === "candidate") { // Use strict equality (===)
            return children;
        } else {
            return <Navigate to="/" replace />;
        }
    }

    return children;
}

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
