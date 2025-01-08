import { createRoot } from 'react-dom/client';
import '@src/index.css';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Popup from '@src/Popup';

const theme = createTheme({
  palette: {
    primary: {
      100: '#F8E7F1',
      200: '#EBB7D5',
      300: '#DC7FB4',
      400: '#CC4B90',
      500: '#BD0F72',
      600: '#A20D66',
      700: '#8A0B5C',
      800: '#700951',
      900: '#520743',
      main: '#BD0F72',
    },
    secondary: {
      100: '#E2F2F1',
      200: '#B3E3E1',
      300: '#85D3D1',
      400: '#5AA7AD',
      500: '#2F728C',
      600: '#024D71',
      700: '#024463',
      800: '#033B55',
      900: '#033246',
      main: '#2F728C',
    },
  },
});

function init() {
  const appContainer = document.querySelector('#app-container');
  if (!appContainer) {
    throw new Error('Can not find #app-container');
  }
  const root = createRoot(appContainer);

  root.render(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Popup />
      </ThemeProvider>
    </StyledEngineProvider>,
  );
}

init();
