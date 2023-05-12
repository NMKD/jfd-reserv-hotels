import React, { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// Components
import TitleRoom from "./TitleRoom";
import FieldInformation from "./FieldInformation";
import Carousel from "../Common/Carousel";
import IconsCard from "./IconsCard";
import Button from "../Common/Button";
import DateSelectionField from "../Forms/Fields/DateSelectionField";
// Store
import { getAuth } from "../../store/userReducer";
import { toReservRoom } from "../../store/roomsReducer";
// Const RUTES Utils
import { ROUTER_PATH } from "../../constans";
import { getToday, getTomorrow } from "../../utils/formatDate";
import { formatPrice } from "../../utils/formatPrice";

const RoomReserv = ({ data }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userId = useSelector(getAuth());
    const [date, setDate] = useState({
        startDate: getToday(),
        endDate: getTomorrow()
    });

    const room = [
        {
            name: "Можно курить?",
            smoke: data.smoke,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={item.smoke}
                />
            )
        },
        {
            name: "Кондиционер",
            conditioner: data.conditioner,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={item.conditioner}
                />
            )
        },
        {
            name: "Кол-во кроватей",
            beds: data.beds,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={item.beds}
                />
            )
        },
        {
            name: "Кол-во комнат",
            countRooms: data.countRooms,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={item.countRooms}
                />
            )
        },
        {
            name: "Есть детская комната?",
            children: data.children,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={item.children}
                />
            )
        },
        {
            name: "Разрешено с животными?",
            animal: data.animal,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={item.animal}
                />
            )
        },
        {
            name: "Цена",
            price: data.price,
            component: (item) => (
                <FieldInformation
                    key={item.name}
                    name={item.name}
                    description={formatPrice(item.price)}
                />
            )
        }
    ];

    const getComponent = (item) =>
        typeof item.component === "function" ? item.component(item) : item;

    const handleChange = (target) => {
        setDate(target.value);
    };

    const handleClickToReserve = (id) => {
        if (!userId || userId === null) {
            toast.error(
                "Пожалуйста перед бронированием отеля, зарегистрируйтесь"
            );
            navigate(`${ROUTER_PATH.root}${ROUTER_PATH.login}`);
            return;
        }

        if (Date.parse(date.startDate) < Date.parse(getToday())) {
            toast.error("Выберите другую дату");
            return;
        }
        dispatch(
            toReservRoom({
                roomId: id,
                userId,
                startDate: date.startDate,
                endDate: date.endDate
            })
        );
        navigate(`${ROUTER_PATH.root}${ROUTER_PATH.orders}`);
    };

    return (
        <div className="my-6">
            <Carousel>
                {data.img.map((item, i) => (
                    <img
                        key={i + "-img"}
                        src={item}
                        alt=""
                        className="w-full object-cover rounded-lg sm:col-span-2 lg:col-span-full"
                        loading="lazy"
                    />
                ))}
            </Carousel>
            <TitleRoom title={data.hotelId.name} />
            <IconsCard
                rate={data.hotelId.rate}
                street={data.hotelId.adress}
                town={data.hotelId.town}
            />
            <div className="mt-6 border-t border-gray-100">
                <dl className="divide-y divide-gray-100">
                    {room.map((item) => getComponent(item))}
                </dl>
            </div>
            <div className="my-6">
                <DateSelectionField
                    content="Выберите дату:"
                    value={date}
                    onChange={handleChange}
                />
            </div>
            <div className="my-5">
                <Button
                    type="button"
                    content="Забронировать"
                    color="red"
                    onClick={() => handleClickToReserve(data._id)}
                />
            </div>
        </div>
    );
};

RoomReserv.propTypes = {
    data: PropTypes.object
};

export default RoomReserv;
