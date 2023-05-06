import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Components
import App from "./App";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import Orders from "./pages/Orders";
import Login from "./pages/Login.jsx";
import Info from "./pages/Info";
import Landlord from "./pages/Landlord";
import { ROUTER_PATH } from "./constans";
import Room from "./pages/Room";

const router = createBrowserRouter([
    {
        path: ROUTER_PATH.root,
        element: <App />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: ROUTER_PATH.orders,
                element: <Orders />
            },
            {
                path: ROUTER_PATH.login,
                element: <Login />
            },
            {
                path: `${ROUTER_PATH.info}:id`,
                element: <Info />
            },
            {
                path: `${ROUTER_PATH.room}:id`,
                element: <Room />
            },
            {
                path: `${ROUTER_PATH.admin}:uid`,
                element: <Landlord />
            }
        ]
    }
]);

export default router;
