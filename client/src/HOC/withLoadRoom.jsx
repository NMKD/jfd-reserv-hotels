import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
    getByIdRoom,
    getInfOfRoom,
    isLoadingStatusRooms
} from "../store/roomsReducer";
import SnippenLoading from "../components/Common/SnippenLoading";

const withLoadRoom = (Component) => (props) => {
    const dispatch = useDispatch();
    const isLoading = useSelector(isLoadingStatusRooms());
    const room = useSelector(getInfOfRoom());
    const { id } = useParams();

    useEffect(() => {
        dispatch(getByIdRoom(id));
    }, []);

    return (
        <>
            {isLoading || room === null ? (
                <SnippenLoading />
            ) : (
                <Component {...props} data={room} />
            )}
        </>
    );
};

export default withLoadRoom;
