import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import Watchlist from './Watchlist';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const Navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    // Redirect to login page
    Navigate('/login');
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Dashboard
      </Typography>
      <Button variant="contained" color="secondary" onClick={handleLogout}>
        Logout
      </Button>
      <Watchlist />
    </Container>
  );
};

export default Dashboard;