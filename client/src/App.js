import React from "react";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/layouts/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import withCurrentUser from "./HOC/withCurrentUser";

const ComponentWithAuth = withCurrentUser(Navbar);

function App() {
    return (
        <>
            <ComponentWithAuth />
            <Outlet />
            <ToastContainer />
        </>
    );
}

export default App;
