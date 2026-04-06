import type { DateValue } from "@chakra-ui/react";

function getPadStart(number: number): string {
  return number.toString().padStart(2, "0");
}

function getDateString(year: number, month: number, day: number): string {
  return `${year}-${getPadStart(month)}-${getPadStart(day)}`;
}

function getDateTimeString(year: number, month: number, day: number): string {
  return `${getDateString(year, month, day)}T00:00:00Z`;
}

const dateFormat = (date: DateValue) => {
  const day = date.day.toString().padStart(2, "0");
  const month = date.month.toString().padStart(2, "0");
  const year = date.year.toString();
  return `${day}/${month}/${year}`;
};

export { getDateTimeString, dateFormat };
