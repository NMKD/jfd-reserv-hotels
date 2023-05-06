import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
// Utils
import { shemaValidateSignUp } from "../../utils/validation";
// Components
import Button from "../Common/Button";
import TextField from "../Forms/Fields/TextField";
import ContainerImageUpload from "../Common/ContainerImageUpload";
import ImageField from "../Forms/Fields/ImageField";
// Store
import {
    getImage,
    resetUploadState,
    uploadImage
} from "../../store/uploadImgReducer";
import { updateUser } from "../../store/userReducer";

const UserChangeData = ({ user, onClick }) => {
    const dispatch = useDispatch();
    const imageUser = useSelector(getImage());
    const [data, setData] = useState({
        name: user.name,
        email: user.email
    });
    const [error, setError] = useState({});
    const isValid = Object.keys(error).length !== 0;
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
    useEffect(() => {
        shemaValidateSignUp
            .validate(data)
            .then(() => setError({}))
            .catch((e) => setError({ [e.path]: e.message }));
    }, [data]);

    const handleSubmit = () => {
        if (isValid) {
            toast.error("Заполните пожалуйста форму");
            return;
        }
        if (imageUser !== null) {
            dispatch(
                updateUser({
                    ...data,
                    image: imageUser[0]
                })
            );
            dispatch(resetUploadState());
            return;
        }
        dispatch(updateUser(data));
        dispatch(resetUploadState());
    };

    const handleBack = () => {
        dispatch(resetUploadState());
        onClick();
    };

    return (
        <form className="p-2">
            <TextField
                type="text"
                label="Ф.И.О"
                name="name"
                onChange={handleChange}
                error={error.name}
                value={data.name}
            />
            <TextField
                type="email"
                label="Email"
                name="email"
                onChange={handleChange}
                error={error.email}
                value={data.email}
            />

            <div className="mb-5">
                <ContainerImageUpload upload={imageUser}>
                    <ImageField
                        type="file"
                        name="image"
                        onChange={handleChange}
                    />
                </ContainerImageUpload>
            </div>

            <Button
                type="button"
                color="indigo"
                content="Изменить"
                onClick={handleSubmit}
            />
            <Button
                type="button"
                color="red"
                content="Отменить"
                onClick={handleBack}
            />
        </form>
    );
};

UserChangeData.propTypes = {
    user: PropTypes.object,
    onClick: PropTypes.func
};

export default UserChangeData;
