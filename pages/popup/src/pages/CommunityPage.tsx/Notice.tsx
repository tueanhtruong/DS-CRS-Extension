import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { BootstrapInput, StyledLabel } from '@src/components/Input';
import React from 'react';
import { useNavigate } from 'react-router';

function Notice() {
  const navigate = useNavigate();

  return (
    <div className="px-3">
      <h1 className="px-0 py-1 text-lg mx-0 my-0">Notice of a focal point</h1>
      <h2 className="px-0 py-1 text-xs mx-0 my-0 font-normal">Following these steps to inform us about the problem</h2>
      <form className="flex flex-col gap-6 mt-2">
        <FormControl variant="standard" required fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Location
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" required fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Focal point name
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" required fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Representative
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Description
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" fullWidth required>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Category
          </StyledLabel>
          {/* <BootstrapInput id="bootstrap-input" fullWidth /> */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            sx={{
              mt: 2,
              '& .MuiSvgIcon-root': {
                fontSize: 14,
              },
            }}>
            <FormControlLabel
              value="people"
              control={<Radio />}
              label="People"
              slotProps={{
                typography: {
                  fontSize: 14,
                  fontWeight: '400',
                },
              }}
            />
            <FormControlLabel value="planet" control={<Radio />} label="Planet" />
            <FormControlLabel
              value="workspace"
              control={<Radio />}
              label="Workspace"
              slotProps={{
                typography: {
                  fontSize: 14,
                  fontWeight: '400',
                },
              }}
            />
          </RadioGroup>
        </FormControl>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => {
            navigate('/popup/index.html/result');
          }}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Notice;
