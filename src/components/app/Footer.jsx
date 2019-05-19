import React from "react";
import PropTypes from "prop-types";
import { SocialIcon } from "react-social-icons";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    textDlign: "center",
    backgroundColor: `rgba(0, 0, 0, 0.6)`,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100px",
    height: "auto"
  },
  iconNavBar: {
    display: "flex",
    flexDirection: "row",
    height: "auto"
  },

  icon: {
    margin: "1rem"
  }
});

const Footer = ({ classes }) => (
  <footer>
    <div className={classes.footer}>
      <div className={classes.iconNavBar}>
        <SocialIcon
          className={classes.icon}
          url="https://www.facebook.com/ntnuicalisthenics/?ref=bookmarks"
        />
        <SocialIcon
          className={classes.icon}
          url="https://www.instagram.com/ntnuicalisthenics/?hl=en"
        />
        <SocialIcon
          className={classes.icon}
          url="mailto:calisthenics-leder@ntnui.no"
        />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(Footer);
