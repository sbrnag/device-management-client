import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

const Title: React.FC<{ devicesCount: number }> = ({devicesCount}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Devices {devicesCount}
            </Typography>
        </div>
    );
}

export default Title;