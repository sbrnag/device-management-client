import React, { createContext, useState, useEffect } from "react";
import { IDevice } from '../model/Device';
const DEVICE_API = "https://jnj-device-api.herokuapp.com/api/v1/devices";
export const DevicesContext = createContext<any>({});


const DeviceContextProvider = (props: any) => {

    const [devices, setDevices] = useState<IDevice[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<string>('');
    const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
    const [saveError, setSaveErrors] = useState<string>('');
    const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);
    const [refresh, setRefresh] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const res = await fetch(DEVICE_API);
            res
                .json()
                .then(res => {
                    setDevices(res);
                    setLoading(false);
                })
                .catch(err => {
                    setErrors(err);
                    setLoading(false);
                });
        }
        fetchData();
    }, [saveSuccess, deleteSuccess, refresh]);

    const saveDevice = async (device: IDevice) => {
        if (devices.length >= 10) {
            //error alert
            setSaveErrors('Can not save more than 10 devices');
        } else {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(device)
            };
            const res = await fetch(DEVICE_API, requestOptions);
            res.text()
                .then(res => {
                    setLoading(false);
                    setSaveErrors('');
                    setSaveSuccess(true);
                    setRefresh(!refresh);
                })
                .catch(err => {
                    console.log(`error in saving : ${err}`);
                    setErrors(err);
                    setLoading(false);
                    setSaveErrors('Something went wrong. Please try again later!');
                    setSaveSuccess(false);
                    setRefresh(!refresh);
                });
        }
    }

    const deleteDevice = (deviceId: any) => {
        // fetch(`${DEVICE_API}/${deviceId}`, { method: 'DELETE' })
        // .then(() => setDeleteSuccess(true));
    }

    return (
        <DevicesContext.Provider value={{ devices, loading, error, saveDevice, saveError, deleteDevice }}>
            {props.children}
        </DevicesContext.Provider>
    );
};

export default DeviceContextProvider;
