import React from "react";
import PropTypes from "prop-types";

const RateIconStar = ({ rate }) => {
    return (
        <>
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    className="mr-1 stroke-current dark:stroke-indigo-500"
                >
                    <path
                        d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <span>{rate}</span>
            </dd>
        </>
    );
};

RateIconStar.propTypes = {
    rate: PropTypes.number
};

export default RateIconStar;
