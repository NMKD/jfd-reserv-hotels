import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Store
import {
    getDataLoadedRooms,
    loadingRooms,
    getRoomsFromState
} from "../store/roomsReducer";

// Utils
import { paginate } from "../utils/paginate";
import { findToString } from "../utils/transformationData";

// Components
import SnippenLoading from "../components/Common/SnippenLoading";

const withFilteredRooms = (Component) => (props) => {
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState("");
    const stateRooms = useSelector(getRoomsFromState());
    const dataLoadedRooms = useSelector(getDataLoadedRooms());
    const pageSize = 10;
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(loadingRooms());
    }, [dataLoadedRooms]);

    useEffect(() => {
        setCurrentPage(1);
    }, [dataLoadedRooms]);

    const handleSearchQuery = (value) => {
        setSearchQuery(value);
    };
    const filteredRooms = searchQuery
        ? findToString(stateRooms, searchQuery)
        : stateRooms;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const roomsCrop = paginate(filteredRooms, currentPage, pageSize);

    return (
        <>
            {dataLoadedRooms ? (
                <Component
                    rooms={roomsCrop}
                    {...props}
                    itemsCount={filteredRooms.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    search={searchQuery}
                    onFilteredSearchQuery={handleSearchQuery}
                    onPageChange={handlePageChange}
                />
            ) : (
                <SnippenLoading />
            )}
        </>
    );
};

export default withFilteredRooms;
