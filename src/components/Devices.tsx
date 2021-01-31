import React, { useContext, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { DevicesContext } from '../contexts/DeviceContextProvider';
import Title from "./Title";
import DeviceCard from './DeviceCard';
import ShowAvaliableFilter from './Filter';
import { IDevice } from "../model/Device";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 1108,
            margin: '0 auto',
        },
        backdrop: {
            zIndex: theme.zIndex.drawer + 1,
            color: '#fff',
        },
    }),
);

export default function Devices() {
    const classes = useStyles();
    const { devices, loading, error } = useContext(DevicesContext);
    console.log(`devices length : ${devices.length}`);
    const [showOnlyAvalible, setShowOnlyAvalible] = useState<boolean>(false);
    const [avaliableDevices, setAvaliableDevices] = useState<IDevice[]>([]);

    useEffect(() => {
        console.log(`inside useEffect ${showOnlyAvalible}`);
        if (showOnlyAvalible) {
            setAvaliableDevices(devices.filter((device: IDevice) => !device.isCheckedOut));
        } else {
            setAvaliableDevices(devices);
        }
    }, [showOnlyAvalible, devices]);

    return (
        <div className={classes.root}>

            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress />
            </Backdrop>

            <Title devicesCount={devices.length} />
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showOnlyAvalible}
                        onChange={() => setShowOnlyAvalible(!showOnlyAvalible)}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        label="Show only avaliable devices"
                    />}
                label="Show Only Avaliable Devices"
            />
            <DeviceCard devices={avaliableDevices} />
        </div>
    );
}