import React from "react";
import PropTypes from "prop-types";
const TextField = ({ label, type, name, value, onChange, error }) => {
    const handleChangeData = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return type === "checkbox"
            ? "border-red-300 text-red-500 focus:ring-red-200 h-5 w-5 rounded-full shadow"
            : "p-2 block w-full rounded-lg border-slate-500 focus:ring-indigo-600  " +
                  (error ? "border-rose-500 focus:ring-red-500" : "");
    };
    return (
        <div className="mb-6">
            <label htmlFor={name} className="block mb-2 text-sm font-medium">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleChangeData}
                required
                className={getInputClasses()}
            />
            {error && (
                <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">{error}</span>
                </p>
            )}
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default TextField;
