import React from "react";
import withLoadRoom from "../../HOC/withLoadRoom";
import RoomReserv from "../Rooms/RoomReserv";

const ComponentInfOfRoom = withLoadRoom(RoomReserv);

const InfoLayout = () => {
    return <ComponentInfOfRoom />;
};

export default InfoLayout;
