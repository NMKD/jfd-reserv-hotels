import React from "react";
import PropTypes from "prop-types";
// Components
import Room from "./Room";
import Paginate from "../Common/Paginate";
import RoomContainer from "../Common/RoomContainer";
import SearchFilterForm from "../Forms/SearchFilterForm";
import SearchField from "../Forms/Fields/SearchField";
import TitleSection from "../Common/TitleSection";

const RoomLists = ({
    rooms,
    itemsCount,
    pageSize,
    onPageChange,
    currentPage,
    handleOpen,
    search,
    onFilteredSearchQuery
}) => {
    return (
        <>
            <div className="grid grid-cols-1">
                <SearchFilterForm data={rooms} />
            </div>
            <SearchField
                type="search"
                label="Поиск по городу"
                onChange={onFilteredSearchQuery}
                value={search}
            />
            <div className="mt-10 text">
                <TitleSection>Выбор отелей</TitleSection>
            </div>
            <RoomContainer>
                {rooms.map((item) => (
                    <Room key={item._id} data={item} onClick={handleOpen} />
                ))}
            </RoomContainer>
            <Paginate
                {...{ itemsCount, pageSize, onPageChange, currentPage }}
            />
        </>
    );
};

RoomLists.propTypes = {
    rooms: PropTypes.array,
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    handleOpen: PropTypes.func,
    onFilteredSearchQuery: PropTypes.func,
    search: PropTypes.string
};

export default RoomLists;
