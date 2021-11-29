import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import React from 'react';

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Container maxWidth="lg" sx={{ p: 10 }}>
      <Paper elevation={8} sx={{ p: 4 }}>
      {children}
    </Paper>
    </Container>
  )
}