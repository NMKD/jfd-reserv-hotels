import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATH } from "../constans";

// Store
import {
    getAuth,
    getCurrentUser,
    getStatusLoadingUser,
    loadCurrentUser,
    signOut
} from "../store/userReducer";
import { isLoadingOrders, loadOrders } from "../store/orderReducer";
import { loadHotel } from "../store/hotelReducer";

// Components
import SnippenLoading from "../components/Common/SnippenLoading";
import { loadingRooms } from "../store/roomsReducer";

const withCurrentUser = (Component) => (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userId = useSelector(getAuth());
    const user = useSelector(getCurrentUser());
    const isLoading = useSelector(getStatusLoadingUser());
    const loadingOrders = useSelector(isLoadingOrders());

    const handleLogout = () => {
        dispatch(signOut());
        navigate(`${ROUTER_PATH.root}`);
    };

    useEffect(() => {
        dispatch(loadCurrentUser());
        dispatch(loadingRooms());
        if (userId) {
            dispatch(loadOrders(userId));
            dispatch(loadHotel(userId));
        }
    }, [userId]);

    if (loadingOrders) {
        <SnippenLoading />;
    }
    return (
        <>
            {!isLoading && (
                <Component
                    {...props}
                    userId={userId}
                    user={user}
                    logOut={handleLogout}
                />
            )}
        </>
    );
};

export default withCurrentUser;
