import { useState, useEffect } from "react";
import { shemaValidationAddNewHotel } from "../utils/validation";
import PropTypes from "prop-types";

const useHotelForm = (userId, hotel = null) => {
    const isHotel = hotel !== null;

    const [data, setData] = useState({
        name: isHotel ? hotel.name : "",
        adress: isHotel ? hotel.adress : "",
        town: isHotel ? hotel.town : "",
        rate: isHotel ? hotel.rate : 0,
        userId
    });

    const [error, setError] = useState({});
    const isValid = Object.keys(error).length !== 0;

    useEffect(() => {
        shemaValidationAddNewHotel
            .validate(data)
            .then(() => setError({}))
            .catch((e) => setError({ [e.path]: e.message }));
    }, [data]);

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    return { handleChange, data, error, isValid };
};
useHotelForm.propTypes = {
    userId: PropTypes.string,
    name: PropTypes.string,
    adress: PropTypes.string,
    town: PropTypes.string
};
export default useHotelForm;
