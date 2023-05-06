import React from "react";
import PropTypes from "prop-types";
import Divider from "../../Common/Divider";

const ChekboxField = ({ label, type, name, value, onChange, divider }) => {
    const handleChange = () => {
        onChange({ name, value: !value });
    };
    const getInputClasses = () =>
        type === "checkbox"
            ? "border-red-300 text-red-500 focus:ring-red-200 h-5 w-5 rounded-full shadow"
            : "";

    return (
        <>
            {divider && <Divider />}
            <div className="mb-5 flex align-center justify-between">
                <label
                    htmlFor={name}
                    className="block mb-2 text-sm font-medium"
                >
                    {label}
                </label>
                <input
                    type={type}
                    id={name}
                    name={name}
                    checked={value}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
            </div>
        </>
    );
};

ChekboxField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.bool,
    checked: PropTypes.bool,
    onChange: PropTypes.func,
    type: PropTypes.string,
    divider: PropTypes.bool
};

export default ChekboxField;
