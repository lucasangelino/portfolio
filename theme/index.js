import {
  extendTheme,
  theme as base,
  withDefaultColorScheme,
  withDefaultVariant,
} from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const inputSelectStyles = {
  variants: {
    filled: {
      field: {
        _focus: {
          borderColor: "brand.500",
        },
      },
    },
  },
};

const theme = extendTheme(
  {
    colors: {
      brand: {
        50: "#E3F2FD",
        100: "#BBDEFB",
        200: "#90CAF9",
        300: "#64B5F6",
        400: "#42A5F5",
        500: "#2196F3",
        600: "#1E88E5",
        700: "#1976D2",
        800: "#1565C0",
        900: "#0D47A1",
      },
    },
    fonts: {
      heading: `Roboto, ${base.fonts?.heading}`,
      body: `Segoe UI ${base.fonts?.body}`,
    },
    components: {
      Button: {
        variants: {
          primary: (props) => ({
            color: mode("white", "gray.800")(props),
            backgroundColor: mode("brand.500", "brand.700")(props),
            _hover: {
              color: mode("white", "gray.800")(props),
              backgroundColor: mode("brand.600", "brand.800")(props),
            },
            _active: {
              color: mode("white", "gray.800")(props),
              backgroundColor: mode("brand.700", "brand.900")(props),
            },
          }),
        },
      },
      Input: {
        ...inputSelectStyles,
      },
      Select: {
        ...inputSelectStyles,
      },
      Checkbox: {
        baseStyle: {
          control: {
            _focus: {
              ring: 2,
              ringColor: "brand.500",
            },
          },
        },
      },
    },
  },
  withDefaultColorScheme({
    colorScheme: "brand",
    components: ["Checkbox"],
  }),
  withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select"],
  })
);

export default theme;
