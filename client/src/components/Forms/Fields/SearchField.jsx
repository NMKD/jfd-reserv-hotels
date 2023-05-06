import React from "react";
import PropTypes from "prop-types";
import IconSearch from "../../Common/IconSearch";

const SearchField = ({ label, type, value, onChange }) => {
    const handleChange = ({ target }) => onChange(target.value);
    return (
        <>
            <label htmlFor={name} className="block mb-2 text-sm font-medium">
                {label}
            </label>
            <div className="mb-4 flex w-full flex-wrap items-stretch">
                <input
                    type={type}
                    value={value}
                    onChange={handleChange}
                    className="m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                    placeholder="Выбрать город"
                />
                <span
                    className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                    id="basic-addon2"
                >
                    <IconSearch />
                </span>
            </div>
        </>
    );
};

SearchField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

export default SearchField;
