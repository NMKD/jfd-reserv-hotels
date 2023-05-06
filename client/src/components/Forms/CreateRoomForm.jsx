import React from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

// Hooks
import useRoomForm from "../../hooks/useRoomForm";

// Cjmponents
import Divider from "../Common/Divider";
import ChekboxField from "./Fields/ChekboxField";
import ContainerImageUpload from "../Common/ContainerImageUpload";
import ImageField from "./Fields/ImageField";
import TextField from "./Fields/TextField";
// Components
import Button from "../Common/Button";

// Store
import { createRoom } from "../../store/roomsReducer";
import { resetUploadState } from "../../store/uploadImgReducer";

const CreateRoomForm = ({ hotelId, onClick }) => {
    const dispatch = useDispatch();
    const { handleChange, data, error, isValid, upload } = useRoomForm(hotelId);
    const handleSubmitForm = () => {
        if (isValid) {
            toast.error("Пожалуйста заполните форму");
            return;
        }
        dispatch(
            createRoom({
                ...data,
                img: upload
            })
        );
        onClick();
        dispatch(resetUploadState());
        toast.success("Успешно");
    };

    const handleBack = () => {
        dispatch(resetUploadState());
        onClick();
    };

    return (
        <form>
            <TextField
                type="text"
                name="price"
                error={error.price}
                label="Цена за ночь"
                value={data.price}
                onChange={handleChange}
            />
            <TextField
                type="text"
                name="beds"
                label="Колличество кроватей"
                error={error.beds}
                value={data.beds}
                onChange={handleChange}
            />
            <TextField
                type="text"
                name="countRooms"
                label="Колличество комнат"
                error={error.countRooms}
                value={data.countRooms}
                onChange={handleChange}
            />
            <TextField
                type="text"
                name="numberRoom"
                label="Номер комнаты"
                error={error.numberRoom}
                value={data.numberRoom}
                onChange={handleChange}
            />
            <Divider />
            <ChekboxField
                type="checkbox"
                name="smoke"
                label="Есть место для курения?"
                error={error.smoke}
                value={data.smoke}
                onChange={handleChange}
            />
            <ChekboxField
                type="checkbox"
                name="conditioner"
                label="Есть в номере кондиционер?"
                error={error.conditioner}
                value={data.conditioner}
                onChange={handleChange}
            />
            <ChekboxField
                type="checkbox"
                name="children"
                label="Есть в номере комната для детей?"
                error={error.children}
                value={data.children}
                onChange={handleChange}
            />

            <ChekboxField
                type="checkbox"
                name="animal"
                label="Можно с животными?"
                error={error.animal}
                value={data.animal}
                onChange={handleChange}
            />

            <div className="mb-5">
                <ContainerImageUpload {...{ upload }}>
                    <ImageField
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </ContainerImageUpload>
            </div>

            <Button
                content="Добавить"
                type="button"
                color="indigo"
                onClick={handleSubmitForm}
            />
            <Button
                content="Отменить"
                type="button"
                color="red"
                onClick={handleBack}
            />
        </form>
    );
};

CreateRoomForm.propTypes = {
    hotelId: PropTypes.string,
    onClick: PropTypes.func
};

export default CreateRoomForm;
