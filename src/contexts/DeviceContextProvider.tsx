import React, { createContext, useState, useEffect } from "react";
import { IDevice } from '../model/Device';

export const DevicesContext = createContext<any>({});

const DeviceContextProvider = (props: any) => {

    const [devices, setDevices] = useState<IDevice[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setErrors] = useState<string>('');
    
    useEffect(() => {
        const testDevices: IDevice[] = [
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "0a9a7314-faef-4971-8c1d-6f664a972343",
                "checkedOut_at": "2021-01-31T04:56:20.522Z",
                "isCheckedOut": true,
                "lastCheckedOutBy": "nageee"
            },
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "8382d544-1007-42ad-9de6-d8e8d1afb231",
            },
            {
                "device": "motE",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "08b6ed0b-a0a9-4a1e-a744-39aa310d8cb7",
            },
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "445a8fca-c4cd-436c-af5c-10ac0e9ba7f1",
            },
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "af4c994e-8484-41a8-8b22-5782965b132e",
            },
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "ec7e0b1d-0fac-4708-b59c-bd18b9baac48",
            },
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "5d8eaff0-252d-4112-9981-3c2fd39911aa",
            },
            {
                "device": "motG",
                "os": "Android",
                "manufacturer": "motorola",
                "id": "16cca4ba-35d2-47c2-8765-f82d2c773ec5",
            }
        ]
        setLoading(true);
        setTimeout(() => {
            setDevices(testDevices);
            setLoading(false);
        }, 2000);

    }, []);

    return (
        <DevicesContext.Provider value={{ devices, loading, error }}>
            {props.children}
        </DevicesContext.Provider>
    );
};

export default DeviceContextProvider;
