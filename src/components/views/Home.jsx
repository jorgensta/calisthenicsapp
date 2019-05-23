import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.black.opacity
  }
});

const Home = ({ classes }) => (
  <div className={classes.root}>
    <Typography variant="h4" style={{ color: "white" }}>
      Home
    </Typography>
  </div>
);

Home.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Home);
