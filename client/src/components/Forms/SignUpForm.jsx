import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
// Const ROUTES
import { ROUTER_PATH } from "../../constans";
// Components
import TextField from "./Fields/TextField";
import Agreement from "./Agreement";
import Button from "../Common/Button";
import RadioField from "./Fields/RadioField";
// Store
import { signUp } from "../../store/userReducer";
// Hooks
import useValidateSignUp from "../../hooks/useValidateSignUp";

const SignUpForm = () => {
    const { handleChange, data, error, isValid } = useValidateSignUp();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            toast.error("Заполните пожалуйста форму");
            return;
        }
        dispatch(signUp(data));
        navigate(ROUTER_PATH.root);
    };
    return (
        <form className="p-8 mt-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
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
            <TextField
                type="password"
                label="Пароль"
                name="password"
                onChange={handleChange}
                error={error.password}
                value={data.password}
            />
            <TextField
                type="password"
                label="Повторить пароль"
                name="passwordConfirm"
                onChange={handleChange}
                error={error.passwordConfirm}
                value={data.passwordConfirm}
            />
            <RadioField
                name="isAdmin"
                content="Разместить объявление"
                value={data.isAdmin}
                onChange={handleChange}
            />
            <Agreement
                type="checkbox"
                label="Подтвердить"
                name="licence"
                value={data.licence}
                onChange={handleChange}
            />
            <Button type="submit" color="indigo" content="Зарегистрироваться" />
        </form>
    );
};

export default SignUpForm;
