import { DAYS, INDIAN_CURRENCY, MONTHS } from "./constant";

export const currencyFormatter = (price: number) => {
  const formatter = new Intl.NumberFormat("en-IN", {
    maximumSignificantDigits: 3,
  });
  return INDIAN_CURRENCY + formatter.format(price);
};

export const calculateDeliveryDate = (numberOfDays: number) => {
  let nextMonth: boolean = false;
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const totalDays = new Date(year, currentDate.getMonth(), 0).getDate();

  //Getting Date
  let date: any = currentDate.getDate() + numberOfDays;
  if (date > totalDays) {
    nextMonth = true;
    date = date - totalDays;
  }
  date = date < 10 ? "0" + date : date;

  //Getting Month
  let monthInNumber = currentDate.getMonth();
  if (nextMonth) monthInNumber = currentDate.getMonth() + 1;
  let month = MONTHS[monthInNumber];

  //Getting Day
  const day = DAYS[new Date(year, monthInNumber, date).getDay()];

  return day + ", " + month + " " + date;
};
