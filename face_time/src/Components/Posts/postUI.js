import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CommentArea from '../Comments/comments';
import ChipUI from './chipUI';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(props) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justify="center"
   >
    <Grid item xs={0}>
    <Card className={classes.root} variant="outlined">

      <CardContent>
        <Typography variant="h5" component="h2">
          {props.id}
        </Typography>
    
        <Typography variant="body2" component="p">
          <ChipUI comment={props.comment}/>
        </Typography>
        <br />
        <Typography>
          <CommentArea Postid={props.id} comments={props.comments}/>
        </Typography>
      </CardContent>
    </Card>
  </Grid>
  </Grid>
  );
}
