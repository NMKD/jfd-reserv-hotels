import { useState } from "react";
import PropTypes from "prop-types";
import { getToday, getTomorrow } from "../utils/formatDate";
import { useDispatch } from "react-redux";
import { getFilteredRooms } from "../store/roomsReducer";

const useFilterForm = (data) => {
    const dispatch = useDispatch();
    const [dataFilter, setData] = useState({
        children: false,
        animal: false,
        reserv: {
            startDate: getToday(),
            endDate: getTomorrow()
        },
        conditioner: false,
        smoke: false
    });
    const [counterAdult, setCounterAdult] = useState(1);

    const handleInc = () => {
        if (counterAdult === 7) return;
        setCounterAdult((count) => count + 1);
    };

    const handleDec = () => {
        if (counterAdult === 1) return;
        setCounterAdult((count) => count - 1);
    };

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = () => {
        dispatch(getFilteredRooms(dataFilter));
    };

    return {
        counterAdult,
        handleInc,
        handleDec,
        handleChange,
        handleSubmit,
        dataFilter
    };
};

useFilterForm.propTypes = {
    data: PropTypes.array
};

export default useFilterForm;
