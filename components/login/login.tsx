import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import React from 'react';

const buttonStyles = {
  fontSize: 24,
  fontFamily: 'Caveat Brush',
};

export default function Login() {
  return (
    <Box sx={{ p: 10, textAlign: "center" }}>
      <Typography variant="h3">
          Pick Your Poison
        </Typography>
        <ButtonGroup size="large" aria-label="large button group">
          <Button sx={buttonStyles} variant="text" size="large">Player</Button>
          <Button sx={buttonStyles} variant="text" size="large">DM</Button>
        </ButtonGroup>
    </Box>
  )
}