import React from "react";
import PropTypes from "prop-types";
// Utils
import { renderDate } from "../../utils/renderDate";

const OrderDate = ({ start, end }) => {
    return (
        <p className="my-2 text-base text-neutral-600 dark:text-neutral-200">
            <span className="mr-1">Дата заезда:</span>
            {renderDate(start)}
            <span className="mx-2">-</span>
            <span className="mr-1">Дата выезда:</span>
            {renderDate(end)}
        </p>
    );
};
OrderDate.propTypes = {
    start: PropTypes.string,
    end: PropTypes.string
};
export default OrderDate;
