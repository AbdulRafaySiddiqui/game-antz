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
const secondaryColor = "#CC0000";

let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
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
  },
  fonts: ["'Raleway', sans-serif"],
});

theme = responsiveFontSizes(theme);

export default theme;
