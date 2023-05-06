import React, { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

const DropDown = ({ children, content }) => {
    const [drop, setDrop] = useState(false);
    const hanleDropDown = () => {
        setDrop((prev) => !prev);
    };
    return (
        <div className="relative text-left cursor-pointer">
            <button
                type="button"
                className="flex items-center align-middle w-full rounded-md text-sm font-medium  text-gray-700 hover:text-blue-500 focus:outline-none "
                onClick={hanleDropDown}
            >
                <span className="text-small text-left text-gray-600">
                    {content}
                </span>
                {drop ? (
                    <ChevronDownIcon
                        className="h-6 w-6 text-red-500 hover:text-violet-100"
                        aria-hidden="true"
                    />
                ) : (
                    <ChevronUpIcon
                        className="h-6 w-6 text-red-500 hover:text-violet-100"
                        aria-hidden="true"
                    />
                )}
            </button>

            {drop && children}
        </div>
    );
};

DropDown.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    content: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ])
};
export default DropDown;
