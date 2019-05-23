import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { I18n } from "@aws-amplify/core";
import { withStyles } from "@material-ui/core/styles";

import Home from "./components/views/Home";
import About from "./components/views/About";
import Faq from "./components/views/Faq";
import Instagram from "./components/views/Instagram";

import dict from "./AppI18n";
import AppBar from "./components/app/Bar";
import withTheme from "./theme/withTheme";
import background from "./assets/background.jpg";
import Apply from "./components/views/Apply";
import Footer from "./components/app/Footer";

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
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/apply" component={Apply} />
          <Route path="/instagram" component={Instagram} />
          <Route path="/faq" component={Faq} />
        </Switch>
      </main>
      <Footer />
    </div>
  </BrowserRouter>
);

App.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

I18n.putVocabularies(dict);
I18n.setLanguage("no");

export default withTheme(withStyles(styles)(App));
