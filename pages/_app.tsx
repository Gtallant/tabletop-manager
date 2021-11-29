import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../components/login/login.reducer';

const store = configureStore({
  reducer: {
    login: loginReducer
  }
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#7e57c2',
      light: '#9778ce',
      dark: '#583c87',
    },
    secondary: {
      main: '#1b5e20',
      light: '#487e4c',
      dark: '#124116',
    },
    error: {
      main: '#b71c1c',
      light: '#',
      dark: '#',
    },
    warning: {
      main: '#ffab00',
      light: '#',
      dark: '#',
    },
    info: {
      main: '#1565c0',
      light: '#',
      dark: '#',
    },
    success: {
      main: '#43a047',
      light: '#',
      dark: '#',
    },
    background: {
      paper: '#2121214f',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Irish Grover',
    },
    h2: {
      fontFamily: 'Irish Grover',
      fontSize: '3rem',
    },
    h3: {
      fontFamily: 'Cabin Sketch',
      fontWeight: 700,
      fontSize: '1.8rem',
    },
    h4: {
      fontFamily: 'Cabin Sketch',
      fontWeight: 400,
      fontSize: '1.5rem',
    },
    h5: {
      fontFamily: 'Caveat Brush',
    },
    h6: {
      fontFamily: 'Caveat Brush',
    },
    subtitle1: {
      fontFamily: 'Lato',
      fontSize: '1rem',
      fontWeight: 600,
    },
    subtitle2: {
      fontFamily: 'Lato',
      fontWeight: 600,
    },
    body1: {
      fontFamily: 'Lato',
    },
    body2: {
      fontFamily: 'Lato',
    },
    button: {
      fontFamily: 'Caveat Brush',
      fontSize: '1rem',
    },
    caption: {
      fontFamily: 'Lato',
    },
    overline: {
      fontFamily: 'Caveat Brush',
    },
    fontFamily: 'Lato',
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <ThemeProvider theme={theme}><Component {...pageProps} /></ThemeProvider>
    </Provider>);
}

export { store };
export type { RootState, AppDispatch };

export default MyApp
