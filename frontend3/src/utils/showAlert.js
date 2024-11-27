import store from '../redux/app/store';
import { addAlert, removeAlert } from '../redux/features/toast/alertSlice';

const showAlert = (message, type = 'success') => {
    const id = Date.now(); // unique id for the alert

    store.dispatch(
        addAlert({
            id,
            message,
            type
        })
    );

    // auto remove the alert after 5 seconds
    setTimeout(() => {
        store.dispatch(removeAlert(id));
    }, 5000);
}

export default showAlert;