import React from "react";
import PropTypes from "prop-types";
// Utils
import { renderDate } from "../../utils/renderDate";
import { formatPrice } from "../../utils/formatPrice";

const BodyCardRoom = ({ data }) => {
    return (
        <div className="min-w-0 flex-auto">
            <p className="text-md font-semibold leading-6 text-gray-900">
                Номер комнаты {data.numberRoom}
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                Цена {formatPrice(data.price)} за одни сутки
            </p>
            <div className="my-4">
                <h3 className="text-md font-semibold leading-6 text-gray-900 mb-2">
                    Даты бронирования
                </h3>
                {data.reserv.length > 0 ? (
                    <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm mb-5"
                    >
                        {data.reserv.map((item) => (
                            <li key={item.userId} className="text-gray-400">
                                <span className="text-gray-600">
                                    {renderDate(item.date.startDate)}
                                    <span className="mx-2">-</span>
                                    {renderDate(item.date.endDate)}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    "Номер не забронирован"
                )}
            </div>
        </div>
    );
};

BodyCardRoom.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default BodyCardRoom;
