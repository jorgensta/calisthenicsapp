import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";


import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import routes from "./routes";
import MyDrawer from "./Drawer";

import titleImage from "../../assets/NTNUI_TRYKK.png";

const styles = theme => ({
  grow: {
    color: theme.palette.black.light,
    margin: theme.spacing.unit * 2
  },
  button: {
    "&:hover": {
      background: theme.palette.black.dark,
      color: theme.palette.secondary.light
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: theme.palette.black.opacity,
    boxShadow: "none"
  },
  logo: {
    height: 100,
    width: 150,
    margin: 10,
    marginLeft: 50
  },
  root: {
    display: "flex"
  },
  buttonActive: {
    borderBottom: "3px solid #026736",
    "&:hover": {
      background: theme.palette.black.dark,
      color: theme.palette.secondary.light
    }
  }
});

const toolbarComponentHandler = (
  width,
  classes,
  toggleDrawer,
  active,
  setActive
) => {
  const { button, buttonActive, menuButton, grow } = classes;
  switch (width) {
    case "xs":
    case "sm":
      return (
        <Fragment>
          <IconButton
            className={menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Fragment>
      );
    case "md":
    case "lg":
    case "xl":
      return (
        <Fragment>
          {routes.map(({ link, name }) => (
            <Button
              key={name}
              component={link}
              onClick={() => setActive(name)}
              className={active !== name ? button : buttonActive}
            >
              <Typography variant="h5" className={grow}>
                {name}
              </Typography>
            </Button>
          ))}
        </Fragment>
      );
    default:
      return null;
  }
};

const ButtonAppBar = ({ classes, width }) => {
  const [active, setActive] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <header>
      <div className={classes.root}>
        <AppBar position="static" color="primary" className={classes.appBar}>
          <Toolbar>
            <img
              src={titleImage}
              alt="Calisthenics logo"
              className={classes.logo}
            />
            <Grid container justify="flex-end">
              {toolbarComponentHandler(
                width,
                classes,
                toggleDrawer,
                active,
                setActive
              )}
            </Grid>
          </Toolbar>
        </AppBar>
        <MyDrawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      </div>
    </header>
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withStyles(styles)(withWidth()(ButtonAppBar));
