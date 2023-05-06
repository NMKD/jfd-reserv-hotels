function conditionForDate(month, day, year) {
    if (month === 0 || month < 9) {
        month = `0${month + 1}`;
    }
    if (month === 9 || month === 10) {
        month = `${month + 1}`;
    }
    if (month === 11) {
        month = 12;
    }
    if (day < 10) {
        day = `0${day}`;
    }
    return `${year}-${month}-${day}`;
}

export const getToday = () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth();
    const day = new Date().getDate();
    return conditionForDate(month, day, year);
};

export const getTomorrow = () => {
    const tomorrow = Date.now() + 86400000;
    const year = new Date(tomorrow).getFullYear();
    const month = new Date(tomorrow).getMonth();
    const day = new Date(tomorrow).getDate();
    return conditionForDate(month, day, year);
};

export const getYesterday = () => {
    const yesterday = Date.now() - 86400000;
    const year = new Date(yesterday).getFullYear();
    const month = new Date(yesterday).getMonth();
    const day = new Date(yesterday).getDate();
    return conditionForDate(month, day, year);
};
