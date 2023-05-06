import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// Routes
import { ROUTER_PATH } from "../../constans";

// Components
import TitleSection from "../Common/TitleSection";
import useOpenModal from "../../hooks/useOpenModal";
import UserCard from "./UserCard";
import UserConrolls from "./UserControlls";
import SpinnerLoading from "../Common/SnippenLoading";
// Store
import { getCurrentUser } from "../../store/userReducer";
import { isLoadingStatusRooms } from "../../store/roomsReducer";

const UserAdmin = () => {
    const navigate = useNavigate();
    const user = useSelector(getCurrentUser());
    const { isOpen, hadleIsOpen } = useOpenModal();
    const loadingRooms = useSelector(isLoadingStatusRooms());

    if (user === null && user.isAdmin) {
        navigate(ROUTER_PATH.login);
    }

    return (
        <>
            <div className="mt-10">
                <TitleSection>Личный кабинет</TitleSection>
            </div>
            <UserCard {...{ hadleIsOpen, user, isOpen }} />
            {loadingRooms ? <SpinnerLoading /> : <UserConrolls />}
        </>
    );
};

UserAdmin.propTypes = {
    user: PropTypes.object
};

export default UserAdmin;
