import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const ShowAvaliableFilter: React.FC<{ showOnlyAvaliable: boolean, setShowOnlyAvaliable: (showOnlyAvaliable: boolean) => {} }> =
    ({ showOnlyAvaliable, setShowOnlyAvaliable }) => {
        return (
            <FormControlLabel
                control={
                    <Checkbox
                        checked={showOnlyAvaliable}
                        onChange={() => setShowOnlyAvaliable(!showOnlyAvaliable)}
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />}
                label="Show Only Avaliable Devices"
            />
        )
    }

export default ShowAvaliableFilter;