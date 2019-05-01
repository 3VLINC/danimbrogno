import { createMuiTheme } from "@material-ui/core";
import { lightBlue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
      subtitle1: {
        fontSize: 16
      },
      h1: {
          fontSize: 22,
          paddingBottom: 16,
          marginBottom: 24,
          borderBottom: '1px solid black'
      },
      h2: {
          fontSize: 20
      },
      h3 : {
        fontSize: 18
      },
      h4: {
        fontSize: 14
      },
      h6: {
        fontSize: 22
      },
      body1: {
        
      },
  },
  palette: {
    primary: {
      main: lightBlue[500],
      contrastText: '#FFFFFF'
    }
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: 15
      }
    }
  }
});