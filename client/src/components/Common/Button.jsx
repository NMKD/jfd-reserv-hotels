import React from "react";
import PropTypes from "prop-types";

const Button = ({ type, content, color, onClick }) => {
    const colors = {
        indigo: "bg-indigo-600",
        fuchsia: "bg-fuchsia-500",
        sky: "bg-sky-500",
        red: "bg-red-600"
    };
    const getClasses = () => {
        const currentResult = Object.keys(colors).find(
            (item) => item === color
        );
        return (
            "rounded-md py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-white hover:bg-fuchsia-600 " +
            colors[currentResult]
        );
    };

    const handleClick = () => {
        if (type === "submit") return;
        onClick();
    };

    return (
        <button type={type} className={getClasses()} onClick={handleClick}>
            {content}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    content: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
};

export default Button;
