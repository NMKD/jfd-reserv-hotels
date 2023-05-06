import React from "react";
import PropTypes from "prop-types";

const Avatar = ({ srcAvatar }) => {
    return (
        <img
            className="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={srcAvatar}
            alt=""
        />
    );
};

Avatar.propTypes = {
    srcAvatar: PropTypes.string
};

export default Avatar;
