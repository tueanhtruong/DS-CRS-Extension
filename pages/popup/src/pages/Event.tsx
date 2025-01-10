/* eslint-disable react/no-unknown-property */
import { Button } from '@mui/material';
import type { UserInfo } from '@src/context';
import { useAppContext } from '@src/context';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function Event() {
  const navigate = useNavigate();
  const { user = {}, setUser } = useAppContext();
  const handleFetchEmail = () => {
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
          setUser?.(userInfo as UserInfo);
        })
        .catch(error => console.error('Error fetching user info:', error));
    });
  };

  useEffect(() => {
    if (!user.login) handleFetchEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          maxWidth: '100%',
          position: 'relative',
          paddingTop: 12,
        }}>
        <img alt="point" src="/popup/point.png" />
        <Button variant="text" onClick={() => navigate('../community')} style={{ maxWidth: '100%' }}>
          <img alt="my-event" src="/popup/myEvents.png" style={{ maxWidth: '100%' }} />
        </Button>
        <Button variant="text" onClick={() => navigate('../eventDetail')} style={{ maxWidth: '100%' }}>
          <img alt="top-event" src="/popup/topEvents.png" style={{ maxWidth: '100%' }} />
        </Button>
      </div>
    </div>
  );
}
