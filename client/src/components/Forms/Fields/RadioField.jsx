import React from "react";
import PropTypes from "prop-types";
import { Switch } from "@headlessui/react";

const RadioField = ({ name, onChange, value, content }) => {
    const handleChange = () => {
        onChange({ name, value: !value });
    };

    return (
        <div className="flex justify-between align-middle">
            <p className="pr-3">{content}</p>
            <Switch
                checked={value}
                name={name}
                onChange={handleChange}
                className={`${value ? "bg-sky-900" : "bg-sky-700"}
          relative inline-flex h-[32px] w-[54px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 mb-5`}
            >
                <span
                    aria-hidden="true"
                    className={`${value ? "translate-x-6" : "translate-x-0"}
            pointer-events-none inline-block h-[28px] w-[28px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </div>
    );
};

RadioField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    onChange: PropTypes.func,
    content: PropTypes.string
};

export default RadioField;
