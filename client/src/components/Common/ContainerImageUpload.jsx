import React from "react";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import IconPhoto from "./IconPhoto";

const ContainerImageUpload = ({ children, upload }) => {
    const renderImage = () =>
        upload !== null ? (
            <div className="flex flex-wrap flex-row">
                {upload.map((item, i) => (
                    <Avatar key={item + i} srcAvatar={item} />
                ))}
            </div>
        ) : (
            <IconPhoto />
        );
    return (
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 py-5">
            <div className="text-center">
                {renderImage()}

                {children}

                <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG up to 10MB
                </p>
            </div>
        </div>
    );
};

ContainerImageUpload.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    upload: PropTypes.array
};

export default ContainerImageUpload;
