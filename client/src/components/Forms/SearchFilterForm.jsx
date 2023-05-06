import React from "react";
import PropTypes from "prop-types";

// Components
import DropDown from "../Common/DropDown";
import DisplayDropDown from "./DisplayDropDown";
import DateSelectionField from "./Fields/DateSelectionField";
import Button from "../Common/Button";

// Hooks
import useFilterForm from "../../hooks/useFilterForm";

const SearchFilterForm = ({ data }) => {
    const {
        counterAdult,
        dataFilter,
        handleInc,
        handleDec,
        handleChange,
        handleSubmit
    } = useFilterForm(data);

    return (
        <div className="border border-slate-100 hover:border-red-100 rounded-3xl shadow-md my-5 sm:my-10 p-5 w-full">
            <div className="my-5">
                <DateSelectionField
                    content="Выберите дату:"
                    value={dataFilter.reserv}
                    onChange={handleChange}
                />
            </div>

            <div className="flex justify-between items-center">
                <div className="mb-3">
                    <DropDown content="Кто едет?">
                        <div className="absolute right-0 left-20 top-1 bg-white mt-2 w-56 rounded-md shadow-sm ring-2 ring-black ring-opacity-5 focus:outline-none">
                            <DisplayDropDown
                                {...{
                                    handleInc,
                                    handleDec,
                                    counterAdult,
                                    dataFilter,
                                    handleChange
                                }}
                            />
                        </div>
                    </DropDown>
                </div>
                <Button
                    type="button"
                    color="red"
                    content="Найти"
                    onClick={handleSubmit}
                />
            </div>
        </div>
    );
};

SearchFilterForm.propTypes = {
    data: PropTypes.array
};

export default SearchFilterForm;
