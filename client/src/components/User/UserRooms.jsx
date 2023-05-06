import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ROUTER_PATH } from "../../constans";

// Store
import { removeRoom } from "../../store/roomsReducer";

// Components
import Button from "../Common/Button";
import Avatar from "../Common/Avatar";
import BodyCardRoom from "./BodyCardRoom";

const UserRooms = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeRoom(id));
    };

    const handleUpdate = (id) => {
        navigate(`/${ROUTER_PATH.room}${id}`);
    };

    return (
        <>
            <li className="flex justify-between gap-x-6 py-5">
                <div className="flex gap-x-6">
                    {data.img === null ? (
                        <Avatar srcAvatar="" />
                    ) : (
                        <Avatar srcAvatar={data.img[0]} />
                    )}
                    <BodyCardRoom {...{ data }} />
                </div>
                <div className="flex justify-between items-start">
                    <Button
                        type="button"
                        content="Редакритовать"
                        color="indigo"
                        onClick={() => handleUpdate(data._id)}
                    />
                    <Button
                        type="button"
                        content="Удалить"
                        color="red"
                        onClick={() => handleRemove(data._id)}
                    />
                </div>
            </li>
        </>
    );
};

UserRooms.propTypes = {
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

export default UserRooms;
