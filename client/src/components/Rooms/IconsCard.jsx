import React from "react";
import PropTypes from "prop-types";
// Components
import RateIconStar from "../Common/RateIconStar";
import LocationIcon from "../Common/LocationIcon";

const IconsCard = ({ town, street, rate }) => {
    return (
        <dl className="text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <RateIconStar {...{ rate }} />
            <LocationIcon {...{ town, street }} />
        </dl>
    );
};

IconsCard.propTypes = {
    town: PropTypes.string,
    street: PropTypes.string,
    rate: PropTypes.number
};

export default IconsCard;
