import React from "react";
import PropTypes from "prop-types";

const AddElement = ({ children, onClick }) => {
    return (
        <div
            className="bg-slate-50 p-4 cursor-pointer sm:px-8 sm:pt-6 sm:pb-8 lg:p-4 xl:px-8 xl:pt-6 xl:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6"
            onClick={onClick}
        >
            <div className="flex">
                <div
                    to="new"
                    className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3"
                >
                    <svg
                        className="group-hover:text-blue-500 mb-1 text-slate-400"
                        width="20"
                        height="20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
                    </svg>
                    {children}
                </div>
            </div>
        </div>
    );
};

AddElement.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    onClick: PropTypes.func
};

export default AddElement;
