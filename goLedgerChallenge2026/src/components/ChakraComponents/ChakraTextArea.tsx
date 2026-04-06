import { Field, Textarea } from "@chakra-ui/react";

type props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>,
  ) => void;
};

export default function ChakraTextArea({
  label,
  placeholder,
  value,
  onChange,
}: props) {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Textarea
        height={"6rem"}
        bg={"gray.900"}
        color={"#efefef"}
        placeholder={placeholder}
        resize={"none"}
        value={value}
        onChange={(e) => onChange(e)}
      />
    </Field.Root>
  );
}
