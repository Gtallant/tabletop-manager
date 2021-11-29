import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import React from 'react';
import { AudioFileMetadata } from '../../lib/utils';

export default function AudioPlayer({
  fileInfo
}: {
  fileInfo: AudioFileMetadata
}) {
  return (
    <Box  sx={{ position: 'fixed', bottom: 0, height: 80, left: 0, right: 0, background: '#000' }}>
      <Paper elevation={8}>
        Hello world!
      </Paper>
    </Box>
    
  );
}