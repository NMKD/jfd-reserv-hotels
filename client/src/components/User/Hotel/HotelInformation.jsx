import React from "react";
import PropTypes from "prop-types";

// Components
import HotelUpdateForm from "../../Forms/HotelUpdateForm";
import Button from "../../Common/Button";
import WindowModal from "../../Common/WindowModal";

// Store
import useOpenModal from "../../../hooks/useOpenModal";

const HotelInformation = ({ hotel }) => {
    const { isOpen, hadleIsOpen } = useOpenModal();
    const description = [
        { name: "Город", des: hotel.town },
        { name: "Расположение", des: hotel.adress },
        { name: "Рейтинг отеля", des: hotel.rate },
        { name: "Колличество номеров", des: hotel.rooms.length }
    ];
    return (
        <>
            <>
                <div className="mt-4 rounded-lg bg-white shadow-lg p-5 mb-10">
                    <h3 className="text-start text-lg mb-4">
                        Отель - {hotel.name}
                    </h3>
                    <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm mb-5"
                    >
                        {description.map((item) => (
                            <li key={item.name} className="text-gray-400">
                                <span className="text-gray-600">
                                    {item.name}: {item.des}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <Button
                        type="button"
                        content="Редактировать"
                        color="indigo"
                        onClick={hadleIsOpen}
                    />
                </div>
                <WindowModal {...{ isOpen }}>
                    <HotelUpdateForm onClick={hadleIsOpen} {...{ hotel }} />
                </WindowModal>
            </>
        </>
    );
};

HotelInformation.propTypes = {
    userId: PropTypes.string,
    hotel: PropTypes.object
};

export default HotelInformation;
