import React from "react";
import PropTypes from "prop-types";

const TitleRoom = ({ title }) => {
    return (
        <div className="px-2 my-5 sm:px-0">
            <h3 className="text-base font-semibold leading-7 text-gray-900">
                {title}
            </h3>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                Отель {title} предоставляет комфортабельные номера.
            </p>
        </div>
    );
};

TitleRoom.propTypes = {
    title: PropTypes.string
};
export default TitleRoom;
