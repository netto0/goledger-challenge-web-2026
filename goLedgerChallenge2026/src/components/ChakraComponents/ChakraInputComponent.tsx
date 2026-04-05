import { paletteColorBase } from "@/App";
import { Field, Input } from "@chakra-ui/react";

type props = {
  type: "text" | "number";
  label: string;
  value: string | number;
  onChange: (
    e:
    | React.ChangeEvent<HTMLInputElement, HTMLInputElement>
    | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
};

export default function ChakraInputComponent({
  type,
  label,
  placeholder,
  value,
  onChange,
}: props) {
  return (
    <Field.Root required>
      <Field.Label>{label}</Field.Label>
      <Input
        type={type}
        placeholder={placeholder}
        variant="subtle"
        colorPalette={paletteColorBase}
        color={"#efefef"}
        value={value}
        onChange={(e) => onChange(e)}
        height="2.5rem"
      />
    </Field.Root>
  );
}
