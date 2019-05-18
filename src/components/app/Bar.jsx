import React, { Fragment, useState } from "react";
import PropTypes from "prop-types";
import { Link as RouterLink } from "react-router-dom";

import withWidth from "@material-ui/core/withWidth";
import { withStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import MyDrawer from "./Drawer";

import titleImage from "../../assets/NTNUI_TRYKK.png";

const HomeLink = props => <RouterLink to="/home" {...props} />;
const AboutLink = props => <RouterLink to="/about" {...props} />;
const InstagramLink = props => <RouterLink to="/instagram" {...props} />;
const FaqLink = props => <RouterLink to="/faq" {...props} />;
const BoardLink = props => <RouterLink to="/board" {...props} />;

const styles = theme => ({
  grow: {
    color: theme.palette.black.light,
    margin: theme.spacing.unit * 2
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  logo: {
    height: 100,
    width: 150,
    margin: 10,
    marginLeft: 50
  },
  root: {
    display: "flex"
  }
});

const toolbarComponentHandler = (width, classes, toggleDrawer) => {
  switch (width) {
    case "xs":
    case "sm":
      return (
        <Fragment>
          <IconButton
            className={classes.menuButton}
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
          <Button component={HomeLink}>
            <Typography variant="h5" className={classes.grow}>
              Home
            </Typography>
          </Button>
          <Button component={AboutLink}>
            <Typography variant="h5" className={classes.grow}>
              About
            </Typography>
          </Button>
          <Button component={BoardLink}>
            <Typography variant="h5" className={classes.grow}>
              Board
            </Typography>
          </Button>
          <Button component={InstagramLink}>
            <Typography variant="h5" className={classes.grow}>
              Instagram
            </Typography>
          </Button>
          <Button component={FaqLink}>
            <Typography variant="h5" className={classes.grow}>
              F.A.Q.
            </Typography>
          </Button>
        </Fragment>
      );
    default:
      return null;
  }
};

const ButtonAppBar = ({ classes, width }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img
            src={titleImage}
            alt="Calisthenics logo"
            className={classes.logo}
          />
          <Grid container justify="flex-end">
            {toolbarComponentHandler(width, classes, toggleDrawer)}
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
