import React, { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HelloToast() {
  const notify = () =>
    toast("❤️ Hello Sir / Madam, Wellcome to my CV. ❤️", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  useEffect(() => {
    notify();
  }, []);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}
export default HelloToast;
