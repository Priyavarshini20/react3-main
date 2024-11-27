import { Navigate, Outlet, useLoaderData } from "react-router-dom";

const AuthWrapper = () => {
    const user = useLoaderData();

    if (!user) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
}

export default AuthWrapper;