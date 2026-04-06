import { paletteColorBase } from "@/App";
import { Button, DatePicker, Portal, type DateValue } from "@chakra-ui/react";
import { LuCalendar } from "react-icons/lu";
import { dateFormat } from "../utils/dateTimeFunctions";

type props = {
  label: string;
  value: DateValue[];
  setValue: React.Dispatch<React.SetStateAction<DateValue[]>>;
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
      format={dateFormat}
    >
      <DatePicker.Label>{label}</DatePicker.Label>
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
