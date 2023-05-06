import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Const ROUTES
import { ROUTER_PATH } from "../../constans";
import localStorageService from "../../service/localStorageService";

// Components
import TextField from "./Fields/TextField";
import Divider from "../Common/Divider";
import ChekboxField from "./Fields/ChekboxField";
import ImageField from "./Fields/ImageField";
import Button from "../Common/Button";
import useRoomForm from "../../hooks/useRoomForm";
import Avatar from "../Common/Avatar";

// Store
import { updateRoom } from "../../store/roomsReducer";
import { resetUploadState } from "../../store/uploadImgReducer";

const RoomUpdateForm = ({ room }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const hotelId = room.hotelId._id;
    const { handleChange, data, error, isValid, upload } = useRoomForm(
        hotelId,
        room
    );

    const handleSubmitForm = () => {
        if (isValid) {
            toast.error("Пожалуйста заполните форму");
            return;
        }
        if (upload !== null && Array.isArray(upload)) {
            if (data.img === null || !data.img || data.img.length === 0) {
                dispatch(
                    updateRoom({
                        ...room,
                        ...data,
                        img: upload
                    })
                );
                toast.success("Данные успешно обновлены");
                dispatch(resetUploadState());
                navigate(
                    `/${ROUTER_PATH.admin}${localStorageService.getUserId()}`
                );
                return;
            }
            if (data.img.length > 0) {
                dispatch(
                    updateRoom({
                        ...room,
                        ...data,
                        img: [...data.img, ...upload]
                    })
                );
            }
            toast.success("Данные успешно обновлены");
            dispatch(resetUploadState());
            navigate(`/${ROUTER_PATH.admin}${localStorageService.getUserId()}`);
            return;
        }
        dispatch(
            updateRoom({
                ...room,
                ...data
            })
        );
        navigate(`/${ROUTER_PATH.admin}${localStorageService.getUserId()}`);
        toast.success("Данные успешно обновлены");
    };

    const handleBackToUser = () => {
        dispatch(resetUploadState());
        navigate(`/${ROUTER_PATH.admin}${localStorageService.getUserId()}`);
    };

    const renderImage = () =>
        upload !== null && (
            <div className="flex flex-wrap flex-row">
                {upload.map((item, i) => (
                    <Avatar key={item + i} srcAvatar={item} />
                ))}
            </div>
        );

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-1 gap-4 sm:gap-4 lg:gap-8">
                <div>
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
                </div>
                <div>
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
                </div>
            </div>
            <div>
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
                    <ImageField
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                    {renderImage()}
                </div>

                <Button
                    content="Изменить"
                    type="button"
                    color="indigo"
                    onClick={handleSubmitForm}
                />
                <Button
                    content="Назад"
                    type="button"
                    color="red"
                    onClick={handleBackToUser}
                />
            </div>
        </>
    );
};

RoomUpdateForm.propTypes = {
    room: PropTypes.object,
    hotelId: PropTypes.string
};

export default RoomUpdateForm;
