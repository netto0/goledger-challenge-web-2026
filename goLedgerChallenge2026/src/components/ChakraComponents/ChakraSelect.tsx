import { paletteColorBase } from "@/App";
import { Portal, Select, type ListCollection } from "@chakra-ui/react";

type props = {
  label: string;
  listCollection: ListCollection<{
    label: string;
    value: string;
  }>;
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
  disabled?: boolean;
};

export default function ChakraSelect({
  label,
  listCollection,
  value,
  setValue,
  disabled = false,
}: props) {
  return (
    <Select.Root
      collection={listCollection}
      width="100%"
      value={value}
      onValueChange={(e) => setValue(e.value)}
      size="md"
      colorPalette={paletteColorBase}
      disabled={disabled}
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger
          _hover={{ cursor: "pointer" }}
          borderColor="colorPalette.muted"
          bg="colorPalette.subtle"
          color="colorPalette.fg"
        >
          <Select.ValueText placeholder={label} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator 
          color="colorPalette.fg"
           />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {listCollection.items.map((listItem) => (
              <Select.Item
                item={listItem}
                key={listItem.value}
                _hover={{ cursor: "pointer" }}
              >
                {listItem.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
