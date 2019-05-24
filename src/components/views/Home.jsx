import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";
import withWidth from "@material-ui/core/withWidth";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { IntroSection } from './home/sections';

import spainPicture from "../../assets/spain.jpg";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.black.opacity,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 120,
    margin: 0
  },
  paper: {
    backgroundColor: theme.palette.black.light,
    color: theme.palette.yellow.light,
    marginTop: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit * 2,
    padding: theme.spacing.unit * 2,
    zIndexs: theme.zIndex.paper + 1,
    marginRight: theme.spacing.unit * 2,
    width: "calc(100% - 60%)"
  },
  card: {
    minWidth: 275,
    maxWidth: 800,
    padding: theme.spacing.unit * 2,
    margin: theme.spacing.unit * 2,
    marginBottom: 0
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  }
});

const Home = ({ classes }) => {
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className={classes.root}>
      <IntroSection />
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>
      </Paper>
      <Card className={classes.card}>
        <CardContent>
          <CardMedia
            className={classes.media}
            image={spainPicture}
            title="Trip to spain"
          />
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Word of the Day
          </Typography>
          <Typography variant="h5" component="h2">
            be
            {bull}
            nev
            {bull}o{bull}
            lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography variant="body2" component="p">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          These are our training times
        </Typography>
        <Typography component="p">
          We are training this and this whatevvah
        </Typography>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h5" component="h3">
          Social shit
        </Typography>
        <Typography component="p">
          We are so social. -> INSERT PICTURE HERE
        </Typography>
      </Paper>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(withWidth()(Home));
