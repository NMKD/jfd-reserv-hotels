export const formatPrice = (num) =>
    new Intl.NumberFormat("ru-RU", {
        style: "currency",
        currency: "RUB"
    }).format(num);
