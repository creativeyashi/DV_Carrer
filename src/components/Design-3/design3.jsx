import * as React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "./design3.css";

export default function Design3() {
  const navigater = useNavigate()
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography class="title3" gutterBottom>
          Reviews
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigater('/reviews')} class="button-style3" variant="light">Click to view</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs></Grid>
            <Grid item xs={6}>
              <Card class="card-img3" variant="outlined">{card}</Card><br /> <br />
            </Grid>
            <Grid item xs></Grid>
    </Grid>
  );
}
