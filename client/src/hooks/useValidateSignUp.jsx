import { useState, useEffect } from "react";
import { shemaValidateSignUp } from "../utils/validation";

const useValidateSignUp = () => {
    const [data, setData] = useState({
        licence: true,
        isAdmin: false,
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });
    const [error, setError] = useState({});
    const isValid = Object.keys(error).length !== 0;
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    useEffect(() => {
        shemaValidateSignUp
            .validate(data)
            .then(() => setError({}))
            .catch((e) => setError({ [e.path]: e.message }));
    }, [data]);

    return { handleChange, data, error, isValid };
};

export default useValidateSignUp;
