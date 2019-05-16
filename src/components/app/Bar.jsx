import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import titleImage from "../../assets/NTNUI_TRYKK.png";

const styles = theme => ({
  root: {
    flexGrow: 1,
    opacity: 0.9
  },
  grow: {
    flexGrow: 1,
    color: "white"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  logo: {
    height: 100,
    width: 120,
    margin: 10,
    marginLeft: 50
  }
});

const ButtonAppBar = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <img
          src={titleImage}
          alt="Calisthenics logo"
          className={classes.logo}
        />
        <Typography variant="h6" color="white" className={classes.grow}>
          NTNUI Calisthenics
        </Typography>
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      </Toolbar>
    </AppBar>
  </div>
);

ButtonAppBar.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(ButtonAppBar);
