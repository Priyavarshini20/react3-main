import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../redux/features/toast/alertSlice";

const Alert = () => {

    const alerts = useSelector(state => state.alerts);
    const dispatch = useDispatch();

    return (
        <div className="fixed top-4 right-4 space-y-4 z-50">
            {alerts.map((alert) => (
                <div key={alert.id} className={`px-4 py-2 rounded shadow-lg text-white ${alert.type === "success" ? "bg-indigo-500" : "bg-red-500"} flex justify-between items-center`}>
                    <span>{alert.message}</span>
                    <button
                        onClick={() => dispatch(removeAlert(alert.id))}
                        className="text-white ml-4"
                    >
                        x
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Alert;