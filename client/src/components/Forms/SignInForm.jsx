import React from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Const Routes
import { ROUTER_PATH } from "../../constans";

// Components
import TextField from "./Fields/TextField";
import Button from "../Common/Button";

// Store
import { signIn } from "../../store/userReducer";

// Hooks
import useValidateSignIn from "../../hooks/useValidateSignIn";

const SignInForm = () => {
    const { handleChange, data, error, isValid } = useValidateSignIn();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isValid) {
            toast.error("Заполните пожалуйста форму");
            return;
        }
        dispatch(
            signIn({
                email: data.email,
                password: data.password
            })
        );
        navigate(ROUTER_PATH.root);
        toast.success("Добро пожаловать в сервис");
    };

    return (
        <form className="p-8 mt-8 rounded-xl shadow-lg" onSubmit={handleSubmit}>
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
            <Button type="submit" color="sky" content="Войти" />
        </form>
    );
};

export default SignInForm;
