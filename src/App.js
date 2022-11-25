import "./App.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";

import UserLogin from "./components/UserLogin";
import UserRegistration from "./components/UserRegistration";
import UserHome from "./components/UserHome";
import UserUploadedFiles from "./components/UserUploadedFiles";


function App() {
  return (
    <>
      <Routes>
        
        <Route path="/" element={<UserLogin />} />
        <Route path="/UserRegistration" element={<UserRegistration />} />
        <Route path="/UserHome" element={<UserHome />} />
        <Route path="/UserUploadedFiles" element={<UserUploadedFiles />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
