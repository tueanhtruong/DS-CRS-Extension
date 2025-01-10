import { Button, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { BootstrapInput, StyledLabel } from '@src/components/Input';
import Create from '@src/pages/CommunityPage.tsx/Create';
import React from 'react';

function CommunityPage() {
  return (
    // <div className='px-3'>
    //   <h1 className="px-0 py-1 text-lg mx-0 my-0">Create an event</h1>
    //   <div className="flex flex-col gap-2">
    //     <h2 className="px-0 py-1 text-xs mx-0 my-0">What is your purpose</h2>
    //     <button className="text-neutral-700 bg-white px-4 py-2 text-sm w-full rounded">Notice of a focal point</button>
    //     <button className="text-neutral-700 bg-white px-4 py-2 text-sm w-full rounded">Create an event</button>
    //   </div>
    // </div>
    <Create />
  );
}

export default CommunityPage;
