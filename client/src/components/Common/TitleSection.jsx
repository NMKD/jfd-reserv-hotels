import React from "react";
import PropTypes from "prop-types";

const TitleSection = ({ children }) => {
    return (
        <h2 className="text-4xl text-center font-bold tracking-tight text-gray-900 my-5">
            {children}
        </h2>
    );
};

TitleSection.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default TitleSection;
