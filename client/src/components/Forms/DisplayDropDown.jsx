import React from "react";
import PropTypes from "prop-types";
// Components
import CountersPerson from "./CountersPerson";
import ChekboxField from "./Fields/ChekboxField";

const MenuListPerson = ({
    handleInc,
    handleDec,
    counterAdult,
    dataFilter,
    handleChange
}) => {
    const data = [
        {
            counter: counterAdult,
            content: "Взрослые",
            component: (item) => (
                <CountersPerson
                    counter={item.counter}
                    content={item.content}
                    {...{ handleInc, handleDec }}
                />
            )
        },
        {
            children: dataFilter.children,
            content: "Дети",
            component: (item) => (
                <ChekboxField
                    label={item.content}
                    type="checkbox"
                    value={item.children}
                    name="children"
                    onChange={handleChange}
                />
            )
        },
        {
            animal: dataFilter.animal,
            content: "Животные",
            component: (item) => (
                <ChekboxField
                    label={item.content}
                    type="checkbox"
                    value={item.animal}
                    name="animal"
                    onChange={handleChange}
                />
            )
        },
        {
            smoke: dataFilter.smoke,
            content: "Для курящих",
            component: (item) => (
                <ChekboxField
                    label={item.content}
                    divider={true}
                    type="checkbox"
                    value={item.smoke}
                    name="smoke"
                    onChange={handleChange}
                />
            )
        },
        {
            conditioner: dataFilter.conditioner,
            content: "Кондиционер",
            component: (item) => (
                <ChekboxField
                    label={item.content}
                    type="checkbox"
                    value={item.conditioner}
                    name="conditioner"
                    onChange={handleChange}
                />
            )
        }
    ];
    const getComponent = (item) =>
        typeof item.component === "function" ? item.component(item) : null;

    return (
        <div className="p-5 bg-white">
            {data.map((item) => (
                <div key={item.content}>{getComponent(item)}</div>
            ))}
        </div>
    );
};

MenuListPerson.propTypes = {
    handleInc: PropTypes.func,
    handleDec: PropTypes.func,
    counterAdult: PropTypes.number,
    dataFilter: PropTypes.object,
    handleChange: PropTypes.func
};

export default MenuListPerson;
