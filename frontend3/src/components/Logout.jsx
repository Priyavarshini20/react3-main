import { useEffect } from "react";
import authServices from "../services/authServices";
import { useNavigate } from "react-router-dom";
import showAlert from "../utils/showAlert";

const Logout = () => {

    const navigate = useNavigate();

    // perform the logout
    useEffect(() => {
        authServices.logout()
            .then((response) => {
                showAlert(response.data.message);

                setTimeout(() => {
                    navigate("/login", { replace: true });
                    window.location.reload();
                }, 500);
            })
            .catch(error => {
                showAlert(error.response.data.message, "error");
            })
    });

    return (
        <div>Logging out...</div>
    )
}

export default Logout;