import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CreditCardIcon } from "@heroicons/react/20/solid";
// Components
import IconsCard from "../Rooms/IconsCard";
import OrderDate from "./OrderDate";
import Button from "../Common/Button";
// Store
import { removeReserv } from "../../store/roomsReducer";
// Utils
import { formatPrice } from "../../utils/formatPrice";

const OrderBody = ({ body }) => {
    const dispatch = useDispatch();
    const handleRemove = (id) => {
        dispatch(removeReserv(id));
    };
    return (
        <div className="flex flex-col justify-start p-6">
            <h5 className="text-2xl font-medium leading-tight">
                Отель - {body.hotelId?.name}
            </h5>
            <div className="my-2">
                <IconsCard
                    town={body.hotelId.town}
                    street={body.hotelId.adress}
                    rate={body.hotelId.rate}
                />
            </div>
            <div className="flex items-center justify-start">
                <CreditCardIcon className="w-5 h-5 text-red-500" />
                <span className="ml-3 my-2">{formatPrice(body.price)}</span>
            </div>
            <OrderDate
                start={body.reserv?.date.startDate}
                end={body.reserv?.date.endDate}
            />
            <div className="felx items-center mt-4">
                <Button
                    type="button"
                    content="Отменить"
                    color="red"
                    onClick={() => handleRemove(body._id)}
                />
            </div>
        </div>
    );
};
OrderBody.propTypes = {
    body: PropTypes.object
};
export default OrderBody;
