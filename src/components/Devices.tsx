import React, { useContext } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { DevicesContext } from '../contexts/DeviceContextProvider';
import Title from "./Title";

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

export default function Devices() {
    const classes = useStyles();
    const { devices, loading, error } = useContext(DevicesContext);

    return (
        <div className={classes.root}>
          {loading ? <CircularProgress /> : (
                <Title devicesCount={devices.length}/>
            )}
        </div>
    );
}