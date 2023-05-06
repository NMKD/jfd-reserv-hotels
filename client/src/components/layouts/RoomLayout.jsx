import React from "react";
import RoomUpdate from "../User/RoomUpdate";
import withLoadRoom from "../../HOC/withLoadRoom";

const ComponentRoom = withLoadRoom(RoomUpdate);

const RoomLayout = () => {
    return <ComponentRoom />;
};

export default RoomLayout;
