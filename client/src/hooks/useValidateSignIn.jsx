import { useState, useEffect } from "react";
import { shemaValidateSignIn } from "../utils/validation";

const useValidateSignIn = () => {
    const [data, setData] = useState({
        email: "",
        password: ""
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
        shemaValidateSignIn
            .validate(data)
            .then(() => setError({}))
            .catch((e) => setError({ [e.path]: e.message }));
    }, [data]);

    return { handleChange, data, error, isValid };
};

export default useValidateSignIn;
