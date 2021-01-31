import React, { useContext, useEffect, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import { DevicesContext } from '../contexts/DeviceContextProvider';
import Title from "./Title";
import AddDevice from "./AddDevice";
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
    const { devices, loading, error, saveDevice, saveError, deleteDevice } = useContext(DevicesContext);
    console.log(`devices length : ${devices.length}`);
    const [showOnlyAvaliable, setShowOnlyAvaliable] = useState<boolean>(false);
    const [avaliableDevices, setAvaliableDevices] = useState<IDevice[]>([]);

    useEffect(() => {
        if (showOnlyAvaliable) {
            setAvaliableDevices(devices.filter((device: IDevice) => !device.isCheckedOut));
        } else {
            setAvaliableDevices(devices);
        }
    }, [showOnlyAvaliable, devices]);

    return (
        <div className={classes.root}>

            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress />
            </Backdrop>
            <AddDevice saveDevice={saveDevice} saveError={saveError}/>
            <Title devicesCount={devices.length} />
            <ShowAvaliableFilter showOnlyAvaliable={showOnlyAvaliable} setShowOnlyAvaliable={setShowOnlyAvaliable} />
            <DeviceCard devices={avaliableDevices} deleteDevice={deleteDevice}/>
        </div>
    );
}