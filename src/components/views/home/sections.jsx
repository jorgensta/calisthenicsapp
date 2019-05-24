import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { I18n } from '@aws-amplify/core';
import { withStyles } from "@material-ui/core/styles";

import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    root: {
        height: '100%'
    },
    typo: {
        color: theme.palette.black.light,
        margin: 10,
        padding: 10
    }
})

const Intro = ({ classes }) => {
    const { root, typo } = classes;
    return (
        <div className={root}>
            <Typography variant="h4" component="h2" className={typo}>
                {I18n.get('Norways largest calisthenics community')}
            </Typography>
            <Typography component="p" className={typo}>
                Paper can be used to build surface or other elements for your
                application.
            </Typography>
        </div>

    )
};

export const IntroSection = withStyles(styles)(Intro);



