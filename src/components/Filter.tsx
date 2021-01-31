import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

const ShowAvaliableFilter: React.FC<{ showOnlyAvaliable: boolean, setShowOnlyAvalible: () => {} }> =
    ({ showOnlyAvaliable, setShowOnlyAvalible }) => {
        return (
            <Checkbox
                checked={showOnlyAvaliable}
                onChange={setShowOnlyAvalible}
                value="primary"
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        )
    }

export default ShowAvaliableFilter;