import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Moment from 'react-moment';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { IDevice } from '../model/Device';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    card: {
        margin: '10px',
        minWidth: 275,
        minHeight: 150,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
});

const DeviceCard: React.FC<{ devices: IDevice[], deleteDevice: any }> = ({ devices, deleteDevice }) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <div>
            {devices.length ? (
                <Grid container spacing={1} alignItems="center">
                    {devices.map((device, index) =>
                        <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={index}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="body1" gutterBottom>
                                        {device.device}{bull}{device.os}{bull}{device.manufacturer}
                                    </Typography>
                                    <br />
                                    {device.isCheckedOut ?
                                        (
                                            <div>
                                                <Typography variant="body2" color="primary" component="p">
                                                    CheckedOut by <strong>{device.lastCheckedOutBy}</strong>
                                                </Typography>
                                                <Typography variant="caption" color="primary" component="p">
                                                    <Moment fromNow>{device.checkedOut_at}</Moment>
                                                </Typography>
                                            </div>
                                        )
                                        : (
                                            <div>
                                                <Typography variant="body2" color="primary" component="p">
                                                    Avaliable
                                            </Typography>
                                                <br />
                                            </div>
                                        )
                                    }
                                </CardContent>
                                <CardActions>
                                    {device.isCheckedOut ?
                                        <Button size="small" variant="contained" color="primary">
                                            CheckIn
                                        </Button>
                                        : <Button size="small" variant="contained">
                                            CheckOut
                                    </Button>}

                                    <Button size="small" color="secondary" variant="contained"
                                        onClick={() => deleteDevice}>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>

                        </Grid>
                    )}
                </Grid>
            ) : (
                    <Typography variant="h5">No Devies found in strore</Typography>
                )}
        </div>
    );
}

export default DeviceCard;
