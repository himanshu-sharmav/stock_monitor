import React, { useState, useEffect } from 'react';
import { getWatchlists, addWatchlist, deleteWatchlist, getStockData } from '../services/api';
import { TextField, Button, Container, Typography, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface WatchlistItem {
  id: number;
  symbol: string;
}

interface StockData {
  [symbol: string]: {
    [time: string]: {
      '1. open': string;
      '2. high': string;
      '3. low': string;
      '4. close': string;
      '5. volume': string;
    }
  }
}

const Watchlist: React.FC = () => {
  const [watchlists, setWatchlists] = useState<WatchlistItem[]>([]);
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState<StockData>({});
  const token = localStorage.getItem('token') || '';

  useEffect(() => {
    fetchWatchlists();
  }, []);

  const fetchWatchlists = async () => {
    try {
      const response = await getWatchlists(token);
      setWatchlists(response.data);
    } catch (error) {
      alert('Failed to fetch watchlists');
    }
  };

  const handleAddWatchlist = async () => {
    try {
      await addWatchlist(symbol, token);
      fetchWatchlists();
    } catch (error) {
      alert('Failed to add watchlist');
    }
  };

  const handleDeleteWatchlist = async (id: number) => {
    try {
      await deleteWatchlist(id, token);
      fetchWatchlists();
    } catch (error) {
      alert('Failed to delete watchlist');
    }
  };

  const fetchStockData = async (symbol: string) => {
    try {
      const response = await getStockData(symbol);
      setStockData((prevState) => ({
        ...prevState,
        [symbol]: response.data['Time Series (1min)'],
      }));
    } catch (error) {
      alert('Failed to fetch stock data');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Watchlist
        </Typography>
        <TextField
          label="Stock Symbol"
          fullWidth
          margin="normal"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleAddWatchlist}>
          Add to Watchlist
        </Button>
        <List>
          {watchlists.map((watchlist) => (
            <ListItem key={watchlist.id}>
              <ListItemText
                primary={watchlist.symbol}
                secondary={
                  stockData[watchlist.symbol]
                    ? `Latest Price: ${stockData[watchlist.symbol][Object.keys(stockData[watchlist.symbol])[0]]?.['1. open']}`
                    : 'Fetching data...'
                }
              />
              <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteWatchlist(watchlist.id)}>
                <DeleteIcon />
              </IconButton>
              <Button variant="contained" color="secondary" onClick={() => fetchStockData(watchlist.symbol)}>
                Refresh
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default Watchlist;
