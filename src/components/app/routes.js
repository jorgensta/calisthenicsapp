import React from "react";
import { Link as RouterLink } from "react-router-dom";

const HomeLink = props => <RouterLink to="/home" {...props} />;
const AboutLink = props => <RouterLink to="/about" {...props} />;
const InstagramLink = props => <RouterLink to="/instagram" {...props} />;
const FaqLink = props => <RouterLink to="/faq" {...props} />;
const ApplyLink = props => <RouterLink to="/apply" {...props} />;

const routes = [
  {
    link: HomeLink,
    name: "Home"
  },
  {
    link: AboutLink,
    name: "About"
  },
  {
    link: ApplyLink,
    name: "Apply"
  },
  {
    link: InstagramLink,
    name: "Instagram"
  },
  {
    link: FaqLink,
    name: "F.A.Q."
  }
];

export default routes;
