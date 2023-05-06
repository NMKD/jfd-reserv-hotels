import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { CreditCardIcon } from "@heroicons/react/20/solid";

// Components
import Carousel from "../Common/Carousel";
import IconsCard from "./IconsCard";
import Button from "../Common/Button";
// Const ROUTES
import { ROUTER_PATH } from "../../constans";
// Utils
import { formatPrice } from "../../utils/formatPrice";

const Room = ({ data }) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`${ROUTER_PATH.info}${id}`);
    };
    return (
        <div>
            <div>
                <h1 className="mb-2 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">
                    Номер комнаты - {data.numberRoom}
                </h1>
            </div>
            <div>
                <Carousel>
                    {data.img.map((item, i) => (
                        <img
                            key={i + "-img"}
                            src={item}
                            alt={data.hotelId.name + data._id}
                            className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                            loading="lazy"
                        />
                    ))}
                </Carousel>
            </div>

            <IconsCard
                town={data.hotelId.town}
                street={data.hotelId.adress}
                rate={data.hotelId.rate}
            />
            <div className="text-md mt-2">
                <div className="flex items-center justify-start">
                    <CreditCardIcon className="w-5 h-5 text-red-500" />
                    <span className="ml-2"> {formatPrice(data.price)}</span>
                </div>
            </div>
            <div className="mt-4">
                <Button
                    type="button"
                    content="Забронировать"
                    color="indigo"
                    onClick={() => handleClick(data._id)}
                />
            </div>
        </div>
    );
};

Room.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default Room;
