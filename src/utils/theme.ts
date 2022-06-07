import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// declare module "@mui/material/Button" {
//   interface ButtonPropsVariantOverrides {
//     containedLeft: true;
//     containedRight: true;
//   }
// }

declare module "@mui/material/styles" {
  interface Theme {
    textShadows: {
      primary: string;
      secondary: string;
      white: string;
    };

    fonts: string[];
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    textShadows?: {
      primary?: string;
      secondary?: string;
      white?: string;
    };
    fonts?: string[];
  }
}

const primaryColor = "#7C69E3";
const primaryLight = "#BF76FF";
const secondaryColor = "#CC0000";

let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      dark: "#181728",
      light: primaryLight,
    },
    secondary: {
      main: secondaryColor,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
        containedPrimary: {
          background: "linear-gradient(180deg, #7C69E3 0%, #46398E 100%)",
          border: `5px solid ${primaryColor}`,
          borderRadius: 10,
          padding: "7px 40px",
        },
        sizeLarge: {
          minWidth: 200,
        },
        outlinedSecondary: {
          padding: "7px 30px",
          color: "white",
          border: "2px solid",
          borderImageSlice: 1,
          borderWidth: 2,
          borderImageSource: "linear-gradient(to bottom, #CC0000, #8F1D1E)",
          borderRadius: 10,
          "&:hover": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "white",
          "& fieldset": {
            borderColor: "white !important",
            borderRadius: 8,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "white",
        },
        asterisk: {
          color: primaryColor,
        },
      },
    },
  },
  fonts: ["'Raleway', sans-serif"],
});

theme = responsiveFontSizes(theme, {
  factor: 5,
});

export default theme;
