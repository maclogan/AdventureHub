import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


export const PrivateRoute = () => {
    const {user, isLoading, loginWithRedirect} = useAuth0()
    if (!isLoading && !user) {
        loginWithRedirect()
    } 
    return <Outlet />
}

export default PrivateRoute