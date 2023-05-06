import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "../../styles/carousel.css";

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [length, setLength] = useState(children.length);

    useEffect(() => {
        setLength(children.length);
    }, [children]);

    const next = () => {
        if (currentIndex === length - 1) {
            setCurrentIndex(0);
        }
        if (currentIndex < length - 1) {
            setCurrentIndex((prevState) => prevState + 1);
        }
    };

    const prev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(length - 1);
        }
        if (currentIndex > 0) {
            setCurrentIndex((prevState) => prevState - 1);
        }
    };
    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
                <button className="left-arrow" onClick={prev}>
                    &lt;
                </button>
                <div className="carousel-content-wrapper">
                    <div
                        style={{
                            transform: `translateX(-${currentIndex * 100}%)`
                        }}
                        className="carousel-content"
                    >
                        {children}
                    </div>
                </div>
                <button className="right-arrow" onClick={next}>
                    &gt;
                </button>
            </div>
        </div>
    );
};

Carousel.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default Carousel;
