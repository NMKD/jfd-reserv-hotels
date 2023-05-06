import React from "react";
import ScreenWidthWrapper from "./ScreenWidthWrapper";
import useHeightReacher from "../../../hooks/useHeightReacher";
import PropTypes from "prop-types";
const NavBarWrapper = ({ children }) => {
    const offsetBlurHeight = 40;
    const { isReached } = useHeightReacher(offsetBlurHeight);
    return (
        <div
            className={
                "sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 shadow-md " +
                (!isReached
                    ? "bg-white/95 supports-backdrop-blur:bg-white/65"
                    : "bg-white supports-backdrop-blur:bg-white/95")
            }
        >
            <ScreenWidthWrapper>
                <div className="py-4 px-4">
                    <div className="relative flex items-center">{children}</div>
                </div>
            </ScreenWidthWrapper>
        </div>
    );
};

NavBarWrapper.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NavBarWrapper;
