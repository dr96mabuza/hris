const { formatISO, format } = require("date-fns");

export const date = () => {
  const dateToISO = (date) => {
    return formatISO(date);
  };

  const ISOToDate = (iso) => {
    return format(iso, "dd/MM/yyyy");
  };

  return { dateToISO, ISOToDate };
};
