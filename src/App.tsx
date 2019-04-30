import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Page } from './Components/Page';
import { theme } from './Config/Theme/theme';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Page />
    </ThemeProvider>
  );
}

export default App;