import { Bounce, toast } from "react-toastify";

const successToast = (msg: string) => {
  toast.success(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

const failToast = (msg: string) => {
  toast.error(msg, {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: "colored",
    transition: Bounce,
  });
};

export {successToast, failToast}
