import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { shemaValidationAddNewRoom } from "../utils/validation";
import { useSelector, useDispatch } from "react-redux";
import { getImage, uploadImage } from "../store/uploadImgReducer";

const useRoomForm = (hotelId, room = null) => {
    const dispatch = useDispatch();
    const upload = useSelector(getImage());
    const isRoom = room !== null;
    const [data, setData] = useState({
        hotelId,
        smoke: isRoom ? room.smoke : false,
        conditioner: isRoom ? room.conditioner : false,
        beds: isRoom ? room.beds : 0,
        children: isRoom ? room.children : false,
        price: isRoom ? room.price : 0,
        countRooms: isRoom ? room.countRooms : 0,
        numberRoom: isRoom ? room.numberRoom : 1,
        animal: isRoom ? room.animal : false,
        img: isRoom ? room.img : []
    });
    const [error, setError] = useState({});
    const isValid = Object.keys(error).length !== 0;

    useEffect(() => {
        shemaValidationAddNewRoom
            .validate(data)
            .then(() => setError({}))
            .catch((e) => setError({ [e.path]: e.message }));
    }, [data]);

    const handleChange = (target) => {
        if (target.name === "image") {
            const formData = new FormData();
            const files = target.value;
            for (const file of files) {
                formData.append("image", file);
            }

            dispatch(uploadImage(formData));
        } else {
            setData((prevState) => ({
                ...prevState,
                [target.name]: target.value
            }));
        }
    };

    return { handleChange, data, error, isValid, upload, setData };
};
useRoomForm.propTypes = {
    hotelId: PropTypes.string
};
export default useRoomForm;
