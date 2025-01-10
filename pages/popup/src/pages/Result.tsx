import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router';

function Result() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center place-items-center" style={{ height: '100vh' }}>
      <img src="/popup/Result.png" alt="Result Page" />
      <div className="w-72 mt-4">
        <Button variant="contained" fullWidth onClick={() => navigate('../event')}>
          OK
        </Button>
      </div>
    </div>
  );
}

export default Result;
