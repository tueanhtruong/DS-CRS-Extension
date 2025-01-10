/* eslint-disable react/no-unknown-property */
import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

export default function EventDetail() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: '100%' }}>
        <img alt="my-event-detail" src="/popup/eventDetail.png" />
        <div style={{ position: 'fixed', bottom: 0, left: 12, right: 12, backgroundColor: 'white', paddingBlock: 12 }}>
          <Button
            variant="contained"
            onClick={() => {
              navigate('../community');
            }}
            fullWidth>
            Count me in
          </Button>
        </div>
      </div>
    </div>
  );
}
