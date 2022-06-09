import { Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';

const from = new Date('2022-03-31T12:00:00').getTime();
const to = new Date('2023-01-05T12:00:00').getTime();

export function Countdown() {
  const [value, setValue] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const newValue = (((now - from) * 100) / (to - from)).toFixed(10);
      console.log(`calculated new value: ${newValue}`);
      setValue(`${newValue}%`);
    }, 500);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center' }}>
      <Grid item>
        <TextField style={{ width: '160px' }} value={value} disabled />
      </Grid>
    </Grid>
  );
}
