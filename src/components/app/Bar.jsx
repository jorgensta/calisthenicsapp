import React, { useState } from "react";
import PropTypes from "prop-types";

import withWidth from '@material-ui/core/withWidth';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import titleImage from "../../assets/NTNUI_TRYKK.png";

import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
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
}));

/* 
xs, extra - small: 
sm, small: 600px or larger
md, medium: 960px or larger
lg, large: 1280px or larger
xl, extra - large: 1920px or larger

*/

const toolbarComponentHandler = width => {
    switch (width) {
        case 'xs':
            return <div>XS: 0px or larger</div>
        case 'sm':
            return <div>SM: 600px or larger</div>
        case 'md':
            return <div>MD: 960px or larger</div>
        case 'lg':
            return <div>LG: 1280px or larger</div>
        case 'xl':
            return <div>XL: 1920px or larger</div>
    }
}

const ButtonAppBar = ({ width }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => setValue(newValue);
    const handleChangeIndex = index = setValue(index);
    
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img
                        src={titleImage}
                        alt="Calisthenics logo"
                        className={classes.logo}
                    />
                    <Typography variant="h6" color="white" className={classes.grow}>
                        {toolbarComponentHandler(width)}
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
}

ButtonAppBar.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    width: PropTypes.string.isRequired
};

const TabContainer = ({ children, dir }) => (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
        {children}
    </Typography>
);

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};


function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }

    function handleChangeIndex(index) {
        setValue(index);
    }

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant={null}
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabContainer dir={theme.direction}>Item One</TabContainer>
                <TabContainer dir={theme.direction}>Item Two</TabContainer>
                <TabContainer dir={theme.direction}>Item Three</TabContainer>
            </SwipeableViews>
        </div>
    );
}

export default withWidth()(ButtonAppBar);
