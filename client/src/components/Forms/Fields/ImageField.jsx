import React from "react";
import PropTypes from "prop-types";

const ImageField = ({ name, type, onChange }) => {
    const handleChange = ({ target }) => {
        onChange({ name, value: target.files });
    };
    return (
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
            <label
                htmlFor={name}
                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
            >
                <span>Загрузить фотографию</span>
                <input
                    name={name}
                    type={type}
                    onChange={handleChange}
                    className="sr-only"
                    accept="image/png, image/jpeg, image/jpg"
                    id="image"
                    multiple
                />
            </label>
        </div>
    );
};

ImageField.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string
};

export default ImageField;
