import { Navigate, Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const LayoutWrapper = () => {

    return (
        <>
            <Navbar
                user={null}
            />
            <div className="container">
                <Outlet />
            </div>
        </>
    )
}

export default LayoutWrapper;