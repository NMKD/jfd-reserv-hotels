import React from "react";
import PropTypes from "prop-types";

const NavBarLinkList = ({ children }) => {
    return (
        <div className="relative items-center ml-auto">
            <nav className="text-sm leading-6 font-semibold text-slate-700">
                <ul className="flex  items-center space-x-4">{children}</ul>
            </nav>
        </div>
    );
};

NavBarLinkList.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default NavBarLinkList;
