import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
// Components
import TextField from "./Fields/TextField";
import Button from "../Common/Button";
import useHotelForm from "../../hooks/useHotelForm";
// Store
import { createHotel } from "../../store/hotelReducer";

const HotelForm = ({ userId, onClick }) => {
    const dispatch = useDispatch();
    const { handleChange, data, error, isValid } = useHotelForm(userId);

    const handleSubmit = () => {
        if (isValid) {
            toast.error("Пожалуйста заполните форму");
            return;
        }
        dispatch(createHotel(data));
        onClick();
        toast.success("Отель добавлен");
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
                content="Добавить"
                type="button"
                color="indigo"
                onClick={handleSubmit}
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

HotelForm.propTypes = {
    userId: PropTypes.string,
    onClick: PropTypes.func
};

export default HotelForm;
