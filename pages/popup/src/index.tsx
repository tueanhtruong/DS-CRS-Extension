import { createRoot } from 'react-dom/client';
import '@src/index.css';
import Popup from '@src/Popup';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { theme } from '@src/utils/theme';

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
