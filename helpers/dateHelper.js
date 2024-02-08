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

  const idToDate = (text) => {
    if (Number(text.slice(0, 2)) > 50) {
      return `19${text.slice(0, 2)}/${text.slice(2, 4)}/${text.slice(4, 6)}`;
    }
    return `20${text.slice(0, 2)}/${text.slice(2, 4)}/${text.slice(4, 6)}`;
  };

  return { dateToISO, ISOToDate, getDaysDifference, idToDate };
};

exports.date = date;
