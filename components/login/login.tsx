import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserType } from './login.reducer';

const buttonStyles = {
  fontSize: '1.5rem',
  width: 200,
};

export default function Login() {
  const dispatch = useDispatch();

  return (
    <Box sx={{ p: 5, textAlign: "center" }}>
      <Typography variant="h3" sx={{ fontSize: '2.5rem'}}>
          Pick Your Poison
        </Typography>
        <ButtonGroup size="large" aria-label="large button group" sx={{ my: 4 }}>
          <Button
            sx={{ ...buttonStyles, pr: 1 }}
            variant="outlined"
            size="large"
            onClick={() => dispatch(setUserType('player'))}>
              Player
            </Button>
            <Button
            sx={{ ...buttonStyles }}
            variant="outlined"
            size="large"
            onClick={() => dispatch(setUserType('dm'))}>
              DM
            </Button>
        </ButtonGroup>
    </Box>
  )
}