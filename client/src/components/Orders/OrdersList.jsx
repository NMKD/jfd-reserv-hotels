import React from "react";
import PropTypes from "prop-types";
// Components
import Carousel from "../Common/Carousel";
import TitleSection from "../Common/TitleSection";
import OrderBody from "./OrderBody";

const OrdersList = ({ data }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="my-10">
                <TitleSection>Мои заказы</TitleSection>
            </div>
            {data.map((item) => (
                <div
                    key={item._id}
                    className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 sm:max-w-xl mb-10"
                >
                    <Carousel>
                        {item.img.map((img, i) => (
                            <img
                                key={i + "-img"}
                                src={img}
                                alt={item.hotelId?.name}
                                className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
                                loading="lazy"
                            />
                        ))}
                    </Carousel>

                    <OrderBody body={item} />
                </div>
            ))}
        </div>
    );
};

OrdersList.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default OrdersList;
