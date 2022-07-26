import * as React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "./design2.css";

export default function Design2() {
  const navigates = useNavigate();
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography class="title2" gutterBottom>
          Today's Special
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigates('/specialmenu')} class="button-style2" variant="light">Click to view</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs></Grid>
            <Grid item xs={6}>
            <Card class="card-img2" variant="outlined">{card}</Card>
            </Grid>
            <Grid item xs></Grid>
    </Grid>
  );
}
