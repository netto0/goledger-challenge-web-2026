import { BasicsContext } from "@/contexts/BasicsContext";
import { Button } from "@chakra-ui/react";
import React from "react";

type props = {
  label: string;
  color: "green" | "red";
  onClickFunc: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export default function ChakraButton({ label, color, onClickFunc }: props) {
  const { isLoading } = React.useContext(BasicsContext);
  return (
    <Button
      bg={`${color}.400`}
      color={"black"}
      colorPalette={color}
      onClick={(e) => onClickFunc(e)}
      loading={isLoading}
    >
      {label}
    </Button>
  );
}
