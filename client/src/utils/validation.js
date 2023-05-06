import { number, object, ref, string } from "yup";

export const shemaValidateSignUp = object({
    password: string().matches(
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
        "Пароль должен быть не менее 8 символов, содержать заглавные буквы, цифры и один из символов (!#$%&?)"
    ),
    passwordConfirm: string().oneOf([ref("password")], "Пароли не совпадают"),
    email: string()
        .email("Электронная почта заполнена некорректно")
        .required("Электронная почта обязательна для заполнения"),
    name: string()
        .min(4, "Имя должно содержать не менее 4-х символов")
        .matches(
            /^[^0-9-!#$%&? ".]+([a-zA-Z-а-яА-ЯёЁ]{3,16})+[^0-9-!#$%&?".]+$/,
            "Имя должно содержать только буквы"
        )
        .required("Заполните пожалуйста имя полностью")
});

export const shemaValidateSignIn = object({
    password: string().matches(
        /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/,
        "Пароль должен быть не менее 8 символов, содержать заглавные буквы, цифры и один из символов (!#$%&?)"
    ),
    email: string()
        .email("Электронная почта заполнена некорректно")
        .required("Электронная почта обязательна для заполнения")
});

export const shemaValidationAddNewHotel = object({
    name: string().trim().min(3, "Укажите полное наименование отеля"),
    adress: string().trim().min(10, "Укажите полный адрес отеля"),
    town: string().trim().min(6, "Город содержит не менее 3 символов")
});

export const shemaValidationAddNewRoom = object({
    price: number()
        .required("Не оставляйте - это поле пустым!")
        .positive("Поле должно быть больше нуля")
        .integer("Поле должно содержать цифры"),
    beds: number()
        .required("Не оставляйте - это поле пустым!")
        .positive("Поле должно быть больше нуля")
        .integer("Поле должно содержать цифры"),
    countRooms: number()
        .required("Не оставляйте - это поле пустым!")
        .positive("Поле должно быть больше нуля")
        .integer("Поле должно содержать цифры"),
    numberRoom: number()
        .required("Не оставляйте - это поле пустым!")
        .positive("Поле должно быть больше нуля")
        .integer("Поле должно содержать цифры")
});
