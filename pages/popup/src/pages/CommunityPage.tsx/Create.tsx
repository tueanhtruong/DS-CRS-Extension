import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { BootstrapInput, StyledLabel } from '@src/components/Input';
import React from 'react';
import { useNavigate } from 'react-router';

function Create() {
  const navigate = useNavigate();

  return (
    <div className="px-3">
      <h1 className="px-0 py-1 text-lg mx-0 my-0">Create an event</h1>
      <h2 className="px-0 py-1 text-xs mx-0 my-0 font-normal">
        Following these steps to inform us about your problem and solution
      </h2>
      <form className="flex flex-col gap-6 mt-2">
        <FormControl variant="standard" required fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Event name
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" required fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Location
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" required fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Representative
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
            <FormControlLabel
              value="planet"
              control={<Radio />}
              label="Planet"
              slotProps={{
                typography: {
                  fontSize: 14,
                  fontWeight: '400',
                },
              }}
            />
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

        <FormControl variant="standard" fullWidth required>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            SDGs contribution
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" fullWidth required>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            SDGs Type
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" fullWidth required>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Measurable method
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
              value="Logframe"
              control={<Radio />}
              label="Logframe"
              slotProps={{
                typography: {
                  fontSize: 14,
                  fontWeight: '400',
                },
              }}
            />
            <FormControlLabel
              value="Bloom"
              control={<Radio />}
              label="Bloom"
              slotProps={{
                typography: {
                  fontSize: 14,
                  fontWeight: '400',
                },
              }}
            />
            <FormControlLabel
              value="impactMeasurement"
              control={<Radio />}
              label="Impact measurement"
              slotProps={{
                typography: {
                  fontSize: 14,
                  fontWeight: '400',
                },
              }}
            />
          </RadioGroup>
        </FormControl>

        <FormControl variant="standard" fullWidth required>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Goal
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" fullWidth required>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Beneficiaries
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <FormControl variant="standard" fullWidth>
          <StyledLabel shrink htmlFor="bootstrap-input" className="text-neutral-700">
            Activity Description
          </StyledLabel>
          <BootstrapInput id="bootstrap-input" fullWidth />
        </FormControl>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => {
            navigate('/popup/index.html/result');
          }}
          sx={{ mb: 2 }}>
          Send
        </Button>
      </form>
    </div>
  );
}

export default Create;
