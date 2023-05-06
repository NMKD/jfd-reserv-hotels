import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// Components
import TextField from "./Fields/TextField";
import Button from "../Common/Button";
// Hooks
import useHotelForm from "../../hooks/useHotelForm";
// Store
import { updateHotel } from "../../store/hotelReducer";

const HotelUpdateForm = ({ onClick, hotel }) => {
    const dispatch = useDispatch();
    const { handleChange, data, error, isValid } = useHotelForm(
        hotel.userId,
        hotel
    );
    const handleSubmitForm = () => {
        if (isValid) {
            toast.error("Пожалуйста заполните форму");
            return;
        }
        dispatch(updateHotel(data));
        onClick();
        toast.success("Изменения внесены");
    };

    return (
        <form>
            <TextField
                type="text"
                name="name"
                error={error.name}
                label="Название отеля"
                value={data.name}
                onChange={handleChange}
            />
            <TextField
                type="text"
                name="adress"
                label="Улица"
                error={error.adress}
                value={data.adress}
                onChange={handleChange}
            />
            <TextField
                type="text"
                name="town"
                label="Город"
                error={error.town}
                value={data.town}
                onChange={handleChange}
            />
            <Button
                content="Редактировать"
                type="button"
                color="indigo"
                onClick={handleSubmitForm}
            />
            <Button
                content="Отменить"
                type="button"
                color="red"
                onClick={onClick}
            />
        </form>
    );
};

HotelUpdateForm.propTypes = {
    hotel: PropTypes.object,
    onClick: PropTypes.func
};

export default HotelUpdateForm;
