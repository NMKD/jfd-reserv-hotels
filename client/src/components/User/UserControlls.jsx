import React from "react";
import { useSelector } from "react-redux";

// Store
import { getHotelFromState } from "../../store/hotelReducer";
import { getCurrentUser } from "../../store/userReducer";
// Components
import HotelInformation from "./Hotel/HotelInformation";
import StatusListRooms from "./StatusListRooms";
import AddElement from "../Common/AddElement";
import WindowModal from "../Common/WindowModal";
import HotelForm from "../Forms/HotelForm";

// Hook
import useOpenModal from "../../hooks/useOpenModal";

const UserConrolls = () => {
    const hotel = useSelector(getHotelFromState());
    const user = useSelector(getCurrentUser());
    const { isOpen, hadleIsOpen } = useOpenModal();

    return (
        <>
            {hotel || hotel !== null ? (
                <>
                    <HotelInformation hotel={hotel} />
                    <StatusListRooms {...{ hotel }} />
                </>
            ) : (
                <>
                    <AddElement onClick={hadleIsOpen}>
                        Добавить отель
                    </AddElement>
                    <WindowModal {...{ isOpen }}>
                        <HotelForm userId={user._id} onClick={hadleIsOpen} />
                    </WindowModal>
                </>
            )}
        </>
    );
};

export default UserConrolls;
