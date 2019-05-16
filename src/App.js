import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { I18n } from "@aws-amplify/core";
import { withStyles } from "@material-ui/core/styles";

import Home from "./components/views/Home";

import dict from "./AppI18n";
import AppBar from "./components/app/Bar";
import withTheme from "./theme/withTheme";
import background from "./assets/background.jpg";

const styles = theme => ({
  bg: {
    backgroundImage: `url(${background})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "black"
  }
});

const App = ({ classes }) => (
  <BrowserRouter>
    <div className={classes.bg}>
      <AppBar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

I18n.putVocabularies(dict);
I18n.setLanguage("no");

export default withTheme(withStyles(styles)(App));
