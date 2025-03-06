import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const toastConfig = {
    position: toast.POSITION?.TOP_RIGHT || "top-right",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
};

export const toastInfo = (message) => {
    toast.info(message, { ...toastConfig });
};

export const toastSuccess = (message) => {
    toast.success(message, { ...toastConfig });
};

export const toastWarning = (message) => {
    toast.warn(message, { ...toastConfig });
};

export const toastError = (message) => {
    toast.error(message, { ...toastConfig });
};
