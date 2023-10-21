import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReactNotification = ({ title, body }) => {
  toast.info(<Display />);
  function Display() {
    return (
      <div>
        <h4 className="text-danger">{title}</h4>
        <p className="text-danger">{body}</p>
      </div>
    );
  }
  return <ToastContainer />;
};

export default ReactNotification;
