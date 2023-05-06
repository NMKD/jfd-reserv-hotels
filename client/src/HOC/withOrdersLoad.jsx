import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, loadOrders } from "../store/orderReducer";
import { getAuth } from "../store/userReducer";
import SpinnerLoading from "../components/Common/SnippenLoading";
import { isLoadingStatusRooms } from "../store/roomsReducer";

const withOrdersLoad = (Component) => (props) => {
    const dispatch = useDispatch();
    const userId = useSelector(getAuth());
    const isLoading = useSelector(isLoadingStatusRooms());

    const orders = useSelector(getOrders());

    useEffect(() => {
        dispatch(loadOrders(userId));
    }, [isLoading]);

    return (
        <>
            {orders === null ? (
                <SpinnerLoading />
            ) : (
                <Component {...props} data={orders} />
            )}
        </>
    );
};

export default withOrdersLoad;
