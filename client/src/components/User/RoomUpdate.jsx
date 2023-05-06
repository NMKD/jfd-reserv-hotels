import React from "react";
import PropTypes from "prop-types";
// Components
import RoomUpdateForm from "../Forms/RoomUpdateForm";
import TitleSection from "../Common/TitleSection";

const RoomUpdate = ({ data }) => {
    return (
        <>
            <div className="mt-10">
                <TitleSection>Редактирование номера</TitleSection>
            </div>

            <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-5 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                <div>
                    <RoomUpdateForm room={data} />
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {data.img !== null &&
                        data.img.map((item) => (
                            <img
                                key={item}
                                src={item}
                                alt={item}
                                className="rounded-lg bg-gray-100"
                            />
                        ))}
                </div>
            </div>
        </>
    );
};

RoomUpdate.propTypes = {
    data: PropTypes.object
};

export default RoomUpdate;
