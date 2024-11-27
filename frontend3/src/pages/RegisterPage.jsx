import { useDispatch, useSelector } from "react-redux";
import { selectName, selectEmail, selectPassword } from "../redux/features/auth/registerSlice";
import { setName, setEmail, setPassword } from "../redux/features/auth/registerSlice";
import { useNavigate } from "react-router-dom";
import authServices from "../services/authServices";
import showAlert from "../utils/showAlert";
// if you are using useState
// import { useState } from "react";

const RegisterPage = () => {

    // if you are using useState
    // const [name, setName] = useState("");
    const name = useSelector(selectName);
    const email = useSelector(selectEmail);
    const password = useSelector(selectPassword);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await authServices.register({
                name,
                email,
                password
            });

            if (response.status === 201) {
                showAlert(response.data.message);

                // clear form
                dispatch(setName(""));
                // if you are using useState
                // setName("");
                dispatch(setEmail(""));
                dispatch(setPassword(""));

                setTimeout(() => {
                    navigate("/login");
                }, 500);
            }
        } catch (error) {
            showAlert(error.response.data.message, "error");
        }
    }

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold text-center">Register</h1>

            <form className="mt-8 space-y-6 max-w-sm mx-auto"
                onSubmit={handleRegister}
            >
                <input type="text" name="name" id="name" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Name"
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                />

                <input type="email" name="email" id="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email"
                    value={email}
                    onChange={(e) => dispatch(setEmail(e.target.value))}
                />

                <input type="password" name="password" id="password" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password"
                    value={password}
                    onChange={(e) => dispatch(setPassword(e.target.value))}
                />

                <input type="submit" value="Register" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
            </form>
        </div>
    )
}

export default RegisterPage