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
import FlagIcon from "../FlagIcon";

import titleImage from "../../assets/NTNUI_TRYKK.png";

const styles = theme => ({
  grow: {
    color: theme.palette.black.light,
    margin: theme.spacing.unit * 2
  },
  button: {
    borderBottom: `3px solid ${theme.palette.black.semiDark}`,
    "&:hover": {
      background: theme.palette.green.main,
      color: theme.palette.secondary.light,
      borderBottom: "3px solid #026736"
    }
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    boxShadow: "none",
    backgroundColor: theme.palette.black.semiDark
  },
  logo: {
    height: 100,
    width: 150,
    margin: 10,
    marginLeft: 50
  },
  root: {
    display: "flex",
    backgroundColor: theme.palette.black.semiDark
  },
  buttonActive: {
    borderBottom: "3px solid #026736",
    "&:hover": {
      background: theme.palette.green.main,
      color: theme.palette.secondary.light
    }
  },
  flag: {
    margin: theme.spacing.unit
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
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img
            src={titleImage}
            alt="Calisthenics logo"
            className={classes.logo}
          />

          <Grid container justify="flex-end">
            <FlagIcon code="gb" size="2x" className={classes.flag} />
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
  );
};

ButtonAppBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  width: PropTypes.string.isRequired
};

export default withStyles(styles)(withWidth()(ButtonAppBar));
