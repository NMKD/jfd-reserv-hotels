import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Paginate = ({ itemsCount, pageSize, onPageChange, currentPage }) => {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);

    const getClasses = (page) => {
        const currentResult =
            page === currentPage ? "bg-red-500" : "bg-gray-200";
        return (
            "rounded-md px-4 py-2 transition duration-300 hover:bg-indigo-400 " +
            currentResult
        );
    };

    return (
        <div className="my-5">
            <div className="flex select-none space-x-1 text-gray-700">
                {pages.map((page) => (
                    <a
                        key={page}
                        onClick={() => {
                            onPageChange(page);
                        }}
                        className={getClasses()}
                    >
                        {page}
                    </a>
                ))}
            </div>
        </div>
    );
};

Paginate.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Paginate;
