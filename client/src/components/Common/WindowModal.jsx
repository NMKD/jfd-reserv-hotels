import React from "react";
import PropTypes from "prop-types";

const WindowModal = ({ children, isOpen }) => {
    const getClasses = () => {
        const addClass = isOpen ? "hidden" : "none";
        return (
            "fixed inset-0 bg-gray-600 bg-opacity-50  pt-10 overflow-y-auto h-full w-full " +
            addClass
        );
    };
    return (
        <div className={getClasses()}>
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                <div className="mt-3 mb-2">{children}</div>
            </div>
        </div>
    );
};

WindowModal.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    isOpen: PropTypes.bool
};

export default WindowModal;
