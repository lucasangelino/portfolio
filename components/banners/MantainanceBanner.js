import React from "react";
import { Alert, AlertIcon } from "@chakra-ui/react";

export default function MantainanceBanner() {
  return (
    <Alert status="info">
      <AlertIcon />
      Sitio en mantenimiento
    </Alert>
  );
}
