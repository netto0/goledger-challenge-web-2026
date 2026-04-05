import { paletteColorBase } from "@/App";
import { Button, DatePicker, Portal, type DateValue } from "@chakra-ui/react";
import { LuCalendar } from "react-icons/lu";

type props = {
  label: string;
  value: DateValue[];
  setValue: React.Dispatch<React.SetStateAction<DateValue[]>>;
};

function getPadStart(number: number): string {
  return number.toString().padStart(2, "0");
}

function getDateString(year: number, month: number, day: number): string {
  return `${year}-${getPadStart(month)}-${getPadStart(day)}`;
}

function getDateTimeString(year: number, month: number, day: number): string {
  return `${getDateString(year, month, day)}T00:00:00Z`;
}

const format = (date: DateValue) => {
  const day = date.day.toString().padStart(2, "0");
  const month = date.month.toString().padStart(2, "0");
  const year = date.year.toString();
  return `${day}/${month}/${year}`;
};

export default function ChakraDateTimePicker({
  label,
  value,
  setValue,
}: props) {
  return (
    <DatePicker.Root
      maxWidth="100%"
      
      value={value}
      onValueChange={(e) => setValue(e.value)}
      colorPalette={paletteColorBase}
      format={format}
    >
      <DatePicker.Label>
        {label}:{" "}
        {value[0] &&
          getDateTimeString(value[0].year, value[0].month, value[0].day)}
      </DatePicker.Label>
      <DatePicker.Control>
        <DatePicker.Trigger asChild unstyled height="2.5rem">
          <Button variant="surface" width="full" justifyContent="flex-start">
            <DatePicker.ValueText placeholder="Select date" />
          </Button>
        </DatePicker.Trigger>
        <DatePicker.IndicatorGroup>
          <DatePicker.Trigger>
            <LuCalendar />
          </DatePicker.Trigger>
        </DatePicker.IndicatorGroup>
      </DatePicker.Control>
      <Portal>
        <DatePicker.Positioner>
          <DatePicker.Content>
            <DatePicker.View view="day">
              <DatePicker.Header />
              <DatePicker.DayTable />
            </DatePicker.View>
            <DatePicker.View view="month">
              <DatePicker.Header />
              <DatePicker.MonthTable />
            </DatePicker.View>
            <DatePicker.View view="year">
              <DatePicker.Header />
              <DatePicker.YearTable />
            </DatePicker.View>
          </DatePicker.Content>
        </DatePicker.Positioner>
      </Portal>
    </DatePicker.Root>
  );
}
