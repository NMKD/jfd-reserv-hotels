import React from "react";
import PropTypes from "prop-types";
// Components
import Button from "../Common/Button";
import UserChangeData from "./UserChangeData";
import WindowModal from "../Common/WindowModal";

const UserCard = ({ hadleIsOpen, user, isOpen }) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="my-4 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                    <img
                        className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                        src={user.image}
                        alt={user.name}
                    />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                            {user.name}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                            Арендодатель
                        </p>
                        <Button
                            type="button"
                            content="Изменить"
                            color="indigo"
                            onClick={hadleIsOpen}
                        />
                    </div>
                </div>
            </div>
            <WindowModal {...{ isOpen }}>
                <UserChangeData user={user} onClick={hadleIsOpen} />
            </WindowModal>
        </>
    );
};

UserCard.propTypes = {
    user: PropTypes.object,
    hadleIsOpen: PropTypes.func,
    isOpen: PropTypes.bool
};

export default UserCard;
