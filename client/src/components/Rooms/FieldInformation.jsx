/* eslint-disable indent */
import React from "react";
import PropTypes from "prop-types";

const FieldInformation = ({ name, description }) => {
    const getDescription = () => {
        return typeof description === "boolean" && description === true
            ? "Да"
            : typeof description === "boolean" && description === false
            ? "Нет"
            : description;
    };
    return (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
                {name}
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {getDescription()}
            </dd>
        </div>
    );
};

FieldInformation.propTypes = {
    name: PropTypes.string,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.number
    ])
};

export default FieldInformation;
