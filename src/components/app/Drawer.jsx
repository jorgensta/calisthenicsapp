import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import routes from "./routes";

const styles = theme => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  drawer: {
    width: "auto",
    zIndex: theme.zIndex.appBar - 1,
    flexShrink: 0
  },
  drawerPaper: {
    width: "auto",
    background: theme.palette.black.opacity
  },
  typo: {
    color: theme.palette.black.light
  },
  toolbar: {
    marginTop: 120,
    opacity: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  icon: {
    color: theme.palette.black.light
  },
  listItem: {
    textAlign: "center",
    "&:hover": {
      background: theme.palette.black.dark,
      color: theme.palette.secondary.light
    }
  }
});

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const MyDrawer = ({ classes, open, toggleDrawer }) => {
  const drawerContent = (
    <div className={classes.toolbar}>
      <List>
        {routes.map(({ link, name }) => (
          <ListItem
            button
            className={classes.listItem}
            key={name}
            component={link}
            onClick={toggleDrawer}
          >
            <ListItemText
              primary={
                <Typography variant="h4" className={classes.typo}>
                  {name}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <SwipeableDrawer
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
      variant="temporary"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper
      }}
      anchor="top"
      open={open}
      onClose={toggleDrawer}
      onOpen={toggleDrawer}
    >
      {drawerContent}
    </SwipeableDrawer>
  );
};

MyDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  classes: PropTypes.shape({}).isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(MyDrawer);
