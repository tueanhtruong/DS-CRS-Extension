import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router';

export default function Map() {
  const [isDetailMap, setIsDetailMap] = React.useState(false);
  const navigate = useNavigate();

  return (
    <div id="map-page">
      <h3>Community Map</h3>

      {isDetailMap ? (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <img
          onClick={() => setIsDetailMap(prevState => !prevState)}
          src={'/popup/Map2.png'}
          alt={'map'}
          style={{ maxWidth: '100%', cursor: 'pointer' }}
        />
      ) : (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-noninteractive-element-interactions
        <img
          onClick={() => setIsDetailMap(prevState => !prevState)}
          src={'/popup/Map.png'}
          alt={'map'}
          style={{ maxWidth: '100%', cursor: 'pointer' }}
        />
      )}

      <div className="box">
        <img src={'/popup/Map3.png'} alt={'map'} style={{ maxWidth: '100%' }} />

        <img src={'/popup/Map4.png'} alt={'map'} style={{ width: '90px' }} />

        <img src={'/popup/Map5.png'} alt={'map'} style={{ width: '100%' }} />

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => {
            navigate('/popup/index.html/eventDetail');
          }}>
          Event Detail
        </Button>

        <Button
          color="primary"
          variant="contained"
          fullWidth
          onClick={() => {
            navigate('/popup/index.html/countmein');
          }}>
          Count me in
        </Button>
      </div>

      <h3>{/*Top Events // NOTE: will be re-use with a Tue later*/}</h3>
    </div>
  );
}
