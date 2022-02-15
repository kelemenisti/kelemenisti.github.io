import React from 'react';
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  Slider,
  styled,
  Switch,
  SxProps,
  TextField,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';

export const ReversedCheckbox = styled(Checkbox)((theme) => ({
  transform: 'rotate(180deg)',
  '&.Mui-checked': {
    color: 'secondary.main'
  }
}));

const sx: SxProps = {
  '&:hover': {
    transform: 'rotateY(180deg)'
  },
  '&.Mui-checked': {
    color: 'secondary.main',
    '& > input': {
      cursor: 'crosshair'
    }
  }
};

const useStyles = makeStyles({
  checkbox: {
    '&.Mui-checked': {
      color: 'green'
    }
  },
  myClass: {}
});

export function MUI() {
  const classes = useStyles();
  return (
    <Container maxWidth={'md'}>
      <Paper elevation={6}>
        <Grid container spacing={2} sx={(theme) => ({ p: theme.spacing(2) })}>
          <Grid item xs={12} lg={12}>
            <Typography variant={'h4'}>Material UI</Typography>
          </Grid>
          <Grid item xs={6} lg={3}>
            <TextField variant={'standard'} />
          </Grid>
          <Grid item xs={6} lg={3}>
            <TextField variant={'standard'} />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<Checkbox checked={true} sx={sx} />} label={''} />
          </Grid>
          <Grid item xs={2}>
            <FormControlLabel control={<ReversedCheckbox checked={true} />} label={''} />
          </Grid>
          <Grid item xs={4}>
            <Switch />
          </Grid>
          <Grid item xs={4}>
            <Slider />
          </Grid>
          <Grid item xs={6}>
            <Button variant={'contained'}>Hey</Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant={'outlined'}>Hi</Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
