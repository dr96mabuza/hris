const { formatISO, format, differenceInDays } = require("date-fns");

const date = () => {
  const dateToISO = (date) => {
    return formatISO(date);
  };

  const ISOToDate = (iso) => {
    return format(iso, "dd/MM/yyyy");
  };

  const getDaysDifference = (start, end) => {
    return differenceInDays(start, end);
  };

  return { dateToISO, ISOToDate, getDaysDifference };
};

exports.date = date;
