import React from "react";
import Datepicker from "react-tailwindcss-datepicker";
import PropTypes from "prop-types";

const DateSelectionField = ({ content, value, onChange }) => {
    const handleValueChange = (newValue) => {
        onChange({ name: "reserv", value: newValue });
    };
    return (
        <div className="cursor-pointer">
            <div className="flex items-center align-middle w-full rounded-md text-sm font-medium hover:bg-opacity-30 text-gray-700 hover:text-blue-500 focus:outline-none ">
                <span className="block text-left text-small text-gray-600">
                    {content}
                </span>
                <Datepicker
                    primaryColor={"rose"}
                    value={value}
                    onChange={handleValueChange}
                    showShortcuts={true}
                />
            </div>
        </div>
    );
};

DateSelectionField.propTypes = {
    content: PropTypes.string,
    value: PropTypes.object,
    onChange: PropTypes.func
};

export default DateSelectionField;
