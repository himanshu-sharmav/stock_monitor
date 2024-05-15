import React from 'react';
import Watchlist from './Watchlist';
import { Container, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Watchlist />
    </Container>
  );
};

export default Dashboard;
