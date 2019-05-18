import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";

const drawerWidth = "auto";

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
    width: "auto"
  },
  toolbar: {
    marginTop: 120,
    opacity: 1
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  }
});

const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

const MyDrawer = ({ classes, open, toggleDrawer }) => {
  const drawerContent = (
    <div className={classes.toolbar}>
      <List>
        {["Home", "About", "Board", "Faq", "Instagram"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<MailIcon />}</ListItemIcon>
            <ListItemText
              primary={
                <Typography variant="h5" className={classes.grow}>
                  text
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
