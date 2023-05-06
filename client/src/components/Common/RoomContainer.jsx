import React from "react";
import PropTypes from "prop-types";

const RoomContainer = ({ children }) => {
    return (
        <div className="bg-white my-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-20">
                {children}
            </div>
        </div>
    );
};

RoomContainer.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default RoomContainer;
