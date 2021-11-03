import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import store from '../lib/store'
import { Provider } from 'react-redux';

const theme = createTheme({
  palette: {
    primary: {
      main: '#231857',
    },
    secondary: {
      main: '#862f80',
    },
    error: {
      main: '#b71c1c',
    },
    warning: {
      main: '#ffab00',
    },
    info: {
      main: '#1565c0',
    },
    success: {
      main: '#43a047',
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

export default MyApp
