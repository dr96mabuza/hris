const { formatISO, format } = require("date-fns");

const date = () => {
  const dateToISO = (date) => {
    return formatISO(date);
  };

  const ISOToDate = (iso) => {
    return format(iso, "dd/MM/yyyy");
  };

  return { dateToISO, ISOToDate };
};

exports.date = date;
