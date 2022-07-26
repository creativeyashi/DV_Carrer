import * as React from 'react';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./design.css";

export default function Design() {
  const navigate = useNavigate()
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography class="title0" gutterBottom>
          Restaurant Menu
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => navigate('/menu')} class="button-style0" variant="light">Click to view</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs></Grid>
            <Grid item xs={6}>
              <Card class="card-img0" variant="outlined">{card}</Card>
            </Grid>
            <Grid item xs></Grid>
      </Grid>
  );
}
