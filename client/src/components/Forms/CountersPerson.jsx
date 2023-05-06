import React from "react";
import PropTypes from "prop-types";
import UserIconPlus from "../Common/UserIconPlus";
import UserIconMinus from "../Common/UserIconMinus";

const CountersPerson = ({ handleInc, handleDec, content, counter }) => {
    return (
        <div className="flex items-center content-center justify-between mb-5">
            <div>{content}</div>
            <div className="flex items-center content-center justify-between">
                <button onClick={() => handleInc(content)}>
                    <UserIconPlus />
                </button>
                <div
                    type="text"
                    className="p-1 mx-1 text-center border-red-400 w-8 h-8 rounded-full shadow"
                >
                    {counter}
                </div>
                <button onClick={() => handleDec(content)}>
                    <UserIconMinus />
                </button>
            </div>
        </div>
    );
};

CountersPerson.propTypes = {
    handleInc: PropTypes.func,
    handleDec: PropTypes.func,
    counter: PropTypes.number,
    content: PropTypes.string
};

export default CountersPerson;
