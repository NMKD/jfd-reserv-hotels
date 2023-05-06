import React from "react";
import RoomLists from "../Rooms/RoomLists";
import withFilteredRooms from "../../HOC/withFilteredRooms";

const ComponentRooms = withFilteredRooms(RoomLists);

const HomeLayout = () => {
    return (
        <>
            <div className="w-full">
                <ComponentRooms />
            </div>
        </>
    );
};

export default HomeLayout;
