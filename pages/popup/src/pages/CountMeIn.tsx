import React from 'react';
import { BootstrapInput, StyledLabel } from '@src/components/Input';
import { Button, FormControl } from '@mui/material';
import { useNavigate } from 'react-router';

export default function CountMeIn() {
  const navigate = useNavigate();
  return (
    <div id="countmein-page">
      <h3>Dieu Phong Clean Up & Wasting sorting</h3>

      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
      <img src={'/popup/Map6.png'} alt={'map'} style={{ maxWidth: '100%' }} />

      <span style={{ marginTop: '12px' }}>I participated in this event</span>

      <FormControl variant="standard" fullWidth style={{ marginTop: '12px' }}>
        <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
          Your role
        </StyledLabel>
        <BootstrapInput id="bootstrap-input-1" fullWidth placeholder={'Photographer'} />
      </FormControl>

      <FormControl variant="standard" fullWidth style={{ marginTop: '12px' }}>
        <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
          Your tasks
        </StyledLabel>
        <BootstrapInput id="bootstrap-input-2" fullWidth placeholder={'Photo shoot and video record'} />
      </FormControl>

      <FormControl variant="standard" required fullWidth style={{ marginTop: '12px' }}>
        <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
          Upload your image evidence
        </StyledLabel>
      </FormControl>
      <div className={'file-upload'} style={{ position: 'relative' }}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions */}
        <img src={'/popup/Map7.png'} alt={'map'} style={{ maxWidth: '100%', marginTop: '12px', cursor: 'pointer' }} />
      </div>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        style={{ marginTop: '80px', marginBottom: '12px' }}
        onClick={() => navigate('../result')}>
        Submit
      </Button>
    </div>
  );
}
