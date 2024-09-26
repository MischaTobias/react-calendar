import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export const useSwalManager = () => {
  const showErrorMessage = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  return {
    showErrorMessage,
  };
};
