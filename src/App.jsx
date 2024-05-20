import { DefaultTemplate } from "./components/DefaultTemplate";
import { RouterMain } from "./routes/RouterMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/index.scss";

const App = () => {
  return (
    <>
      <DefaultTemplate>
        <RouterMain />
      </DefaultTemplate>
      <ToastContainer autoClose={1 * 1000} theme="dark"/>
    </>
  );
};

export default App;
