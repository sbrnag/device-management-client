import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { IDevice } from "../model/Device";

const defaultProps = {
    bgcolor: 'background.paper',
    m: 1,
    border: 1,
};

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
    }),
);

const AddDevice: React.FC<{ saveDevice: (device: IDevice) => {}, saveError: string }> = ({ saveDevice, saveError }) => {
    const classes = useStyles();

    const [device, setDevice] = useState('');
    const [os, setOS] = useState('');
    const [manufacturer, setManufacturer] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDevice(event.target.value);
    };

    const handleOSChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setOS(event.target.value);
    };

    const handleManufacturerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setManufacturer(event.target.value);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setSubmitted(true);
        if (device && os && manufacturer) {
            saveDevice({ device, os, manufacturer });
        }
    };

    return (
        <React.Fragment>
            <Typography variant="subtitle1" gutterBottom>
                Add New Device
            </Typography>
            <Box border={0} borderColor="primary.main" {...defaultProps}>
                {saveError && <Typography variant="subtitle1" color="error" gutterBottom>
                    {saveError}
                </Typography>}
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="device" size="small" label="Device Name" variant="outlined"
                        onChange={handleNameChange} error={submitted && !device} />
                    <TextField id="os" size="small" label="OS" variant="outlined"
                        onChange={handleOSChange} error={submitted && !os} />
                    <TextField id="Manufacturer" size="small" label="Manufacturer" variant="outlined"
                        onChange={handleManufacturerChange} error={submitted && !manufacturer} />
                    <Button color="primary" variant="contained" onClick={handleSubmit}>
                        Save Device
                    </Button>
                </form>
            </Box>
        </React.Fragment>
    );
}


export default AddDevice;