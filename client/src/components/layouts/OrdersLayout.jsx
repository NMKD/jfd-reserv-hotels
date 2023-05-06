import React from "react";
import OrdersList from "../Orders/OrdersList";
import withOrdersLoad from "../../HOC/withOrdersLoad";

const ComponentOrders = withOrdersLoad(OrdersList);

const OrdersLayout = () => {
    return (
        <>
            <ComponentOrders />
        </>
    );
};

export default OrdersLayout;
