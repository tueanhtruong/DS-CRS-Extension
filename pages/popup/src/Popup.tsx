import '@src/Popup.css';
import { withErrorBoundary, withSuspense } from '@extension/shared';
import { Route, BrowserRouter, Routes } from 'react-router';
// import { exampleThemeStorage } from '@extension/storage';
import Event from '@src/pages/Event';
import Login from '@src/pages/Login';
import CommunityPage from '@src/pages/CommunityPage.tsx';
import Notice from '@src/pages/CommunityPage.tsx/Notice';
import Create from '@src/pages/CommunityPage.tsx/Create';
import Result from '@src/pages/Result';
import Map from '@src/pages/Map';
import CountMeIn from '@src/pages/CountMeIn';
// import type { ComponentPropsWithoutRef } from 'react';
import { Header } from './components';
import { AppProvider } from './context';
import EventDetail from './pages/EventDetail';
import LeaderBoard from '@src/pages/LeaderBoard';

const Popup = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <div style={{ padding: '0px 8px', backgroundColor: '#FAFAFA', minHeight: '100%' }}>
          <Header />

          <Routes>
            <Route path="/popup/index.html">
              <Route index element={<Login />} />
              <Route path="event" element={<Event />} />
              <Route path="eventDetail" element={<EventDetail />} />
              <Route path="community" element={<CommunityPage />} />
              <Route path="notice" element={<Notice />} />
              <Route path="create" element={<Create />} />
              <Route path="result" element={<Result />} />
              <Route path="leaderboard" element={<LeaderBoard />} />
              <Route path="map" element={<Map />} />
              <Route path="countmein" element={<CountMeIn />} />
            </Route>
          </Routes>
        </div>
      </AppProvider>
    </BrowserRouter>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);
