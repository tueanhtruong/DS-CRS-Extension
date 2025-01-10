import '@src/Popup.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Route, BrowserRouter, Routes } from 'react-router';
// import { exampleThemeStorage } from '@extension/storage';
import React from 'react';
import Event from '@src/pages/Event';
import Login from '@src/pages/Login';
import CommunityPage from '@src/pages/CommunityPage.tsx';
// import type { ComponentPropsWithoutRef } from 'react';

// const notificationOptions = {
//   type: 'basic',
//   iconUrl: chrome.runtime.getURL('icon-34.png'),
//   title: 'Injecting content script error',
//   message: 'You cannot inject script here!',
// } as const;
type UserInfo = {
  email: string;
  id: string;
};
const Popup = () => {
  const [user, setUser] = React.useState<UserInfo>();
  // const theme = useStorage(exampleThemeStorage);
  const isLight = true;
  // const logo = isLight ? 'popup/logo_vertical.svg' : 'popup/logo_vertical_dark.svg';
  // const goGithubSite = () =>
  //   chrome.tabs.create({ url: 'https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite' });

  // const injectContentScript = async () => {
  //   const [tab] = await chrome.tabs.query({ currentWindow: true, active: true });

  //   if (tab.url!.startsWith('about:') || tab.url!.startsWith('chrome:')) {
  //     chrome.notifications.create('inject-error', notificationOptions);
  //   }

  //   await chrome.scripting
  //     .executeScript({
  //       target: { tabId: tab.id! },
  //       files: ['/content-runtime/index.iife.js'],
  //     })
  //     .catch(err => {
  //       // Handling errors related to other paths
  //       if (err.message.includes('Cannot access a chrome:// URL')) {
  //         chrome.notifications.create('inject-error', notificationOptions);
  //       }
  //     });
  // };

  React.useEffect(() => {
    chrome.identity.getAuthToken({ interactive: true }, token => {
      if (chrome.runtime.lastError) {
        console.error('Error getting token:', chrome.runtime.lastError.message);
        return;
      }

      // Use the token to fetch user info
      fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then(response => response.json())
        .then(userInfo => {
          console.log(userInfo);
          setUser(userInfo);
        })
        .catch(error => console.error('Error fetching user info:', error));
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/popup/index.html">
          {/* <Route  element={<Login />} />
          <Route path="event" element={<Event />} /> */}
          <Route index element={<CommunityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
