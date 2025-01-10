import { Avatar, Stack } from '@mui/material';
import React from 'react';
import { Logo } from '../Logo';
import type { TabValue } from '../Segmented';
import { SegmentedControls } from '../Segmented';
import type { UserInfo } from '@src/context';
import { useAppContext } from '@src/context';
import { useNavigate, useLocation } from 'react-router';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const location = useLocation();
  console.log('🚀 ~ location:', location);

  const handleChangeTab = (tab: TabValue) => {
    switch (tab) {
      case 'leaderboard':
        navigate('/popup/index.html/leaderboard');
        break;
      case 'map':
        navigate('/popup/index.html/map');
        break;
      case 'home':
      default:
        navigate('/popup/index.html/event');
        break;
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ padding: '12px', backgroundColor: 'white' }}>
      {user?.login ? <AvatarUser user={user} /> : <Logo />}
      <SegmentedControls onChange={handleChangeTab} />
    </Stack>
  );
};

export const AvatarUser = ({ user }: { user: UserInfo }) => {
  const { picture, email } = user;

  const name = email?.split('@')[0];

  return (
    <Stack direction="row" alignItems="center">
      <div style={{ marginRight: '2px' }}>
        <Avatar src={picture} alt={`${name}-avatar`} />
      </div>
      <Stack direction={'column'} sx={{ color: 'black', fontSize: '14px' }}>
        <span style={{ fontWeight: 600 }}>{name}</span>
        <span style={{ color: '#42424260' }}>OTSV</span>
      </Stack>
    </Stack>
  );
};
