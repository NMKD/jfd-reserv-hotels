const toFilterData = (data, reserv) => {
  const arr = [];
  data.forEach((item) => {
    if (item.reserv.length > 0) {
      item.reserv.forEach((rev) => {
        const endPointStart = Date.parse(rev.date.startDate);
        const endPointEnd = Date.parse(rev.date.endDate);
        const bodyStartDate = Date.parse(reserv.startDate);
        const bodyEndDate = Date.parse(reserv.endDate);
        if (endPointStart > bodyEndDate || bodyStartDate < endPointEnd) {
          arr.push(item);
        }
      });
    }
    arr.push(item);
  });
  return arr;
};

module.exports = {
  toFilterData,
};
