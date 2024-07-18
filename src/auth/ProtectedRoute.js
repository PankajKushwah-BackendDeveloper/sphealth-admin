import { Navigate } from "react-router-dom";
import { getLocalStorageData } from "../common/commonFunction";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
    const token = getLocalStorageData("authToken");
    return token ? children : <Navigate to="/login" replace />; // Redirect to login
};

export default PrivateRoute;