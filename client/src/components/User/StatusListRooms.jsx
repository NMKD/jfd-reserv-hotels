import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
// Components
import AddElement from "../Common/AddElement";
import WindowModal from "../Common/WindowModal";
import CreateRoomForm from "../Forms/CreateRoomForm";
import UserRooms from "./UserRooms";
import TitleSection from "../Common/TitleSection";
import useOpenModal from "../../hooks/useOpenModal";

// Store
import { getByIdRooms } from "../../store/roomsReducer";

const StatusListRooms = ({ hotel }) => {
    const { isOpen, hadleIsOpen } = useOpenModal();
    const rooms = useSelector(getByIdRooms(hotel._id));

    return (
        <>
            <TitleSection>Мои номера</TitleSection>
            {rooms.length > 0 && (
                <>
                    <ul role="list" className="divide-y divide-gray-200 mb-10">
                        {rooms.map((item, i) => (
                            <UserRooms key={item?._id} data={item} index={i} />
                        ))}
                    </ul>
                </>
            )}
            <AddElement onClick={hadleIsOpen}>Добавить номер</AddElement>
            <WindowModal {...{ isOpen }}>
                <CreateRoomForm hotelId={hotel._id} onClick={hadleIsOpen} />
            </WindowModal>
        </>
    );
};

StatusListRooms.propTypes = {
    hotel: PropTypes.object,
    rooms: PropTypes.array
};

export default StatusListRooms;
