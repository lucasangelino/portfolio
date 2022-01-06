import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Button,
} from "@chakra-ui/react";
export default function popover({ btnText, title, text }) {
  return (
    <Popover>
      <PopoverTrigger>
        <Button bg={"tomato"}>{btnText}</Button>
      </PopoverTrigger>
      <PopoverContent bg={"tomato"}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>{title}</PopoverHeader>
        <PopoverBody>{text}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}
