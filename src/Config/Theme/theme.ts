import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
  typography: {
      useNextVariants: true,
      // title: {
      //   fontSize: 18,
      //   color: 'red'
      // },
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
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: 15
      }
    }
  }
});