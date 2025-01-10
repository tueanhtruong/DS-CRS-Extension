/* eslint-disable react/no-unknown-property */
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function Event() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '100%', position: 'relative' }}>
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
