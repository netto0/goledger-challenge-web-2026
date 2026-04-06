import { BasicsContext } from "@/contexts/BasicsContext";
import { Code, Listbox, Stack, type ListCollection } from "@chakra-ui/react";
import React from "react";

type props = {
  label: string;
  listCollection: ListCollection<{
    label: string;
    value: string;
  }>;
  value: string[];
  setValue: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function ChakraList({
  label,
  listCollection,
  value,
  setValue,
}: props) {
  const { getTvShowTitle } = React.useContext(BasicsContext);

  return (
    <Stack maxWidth="full" width="full" gap="4">
      <Listbox.Root
        collection={listCollection}
        selectionMode="multiple"
        height={"12rem"}
        colorPalette={"gray"}
        variant={"solid"}
        value={value}
        onValueChange={(details) => setValue(details.value)}
      >
        <Listbox.Label>
          {label}
        </Listbox.Label>
        <Listbox.Content bg={"gray.900"} color={"#efefef"}>
          {listCollection.items.map((listItem) => (
            <Listbox.Item item={listItem} key={listItem.value}>
              <Listbox.ItemText>{listItem.label}</Listbox.ItemText>
              <Listbox.ItemIndicator />
            </Listbox.Item>
          ))}
        </Listbox.Content>
      </Listbox.Root>
      <Code alignSelf="flex-start" bg={"gray.900"} color={"#efefef"}>
        Selected: {value.map((tvShowKey) => `| ${getTvShowTitle(tvShowKey)} `)}
      </Code>
    </Stack>
  );
}
