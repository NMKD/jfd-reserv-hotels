export const renderDate = (date) =>
    new Date(date).toLocaleString("ru", {
        day: "numeric",
        month: "long",
        year: "numeric"
    });
