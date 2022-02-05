import * as React from 'react';
import PropTypes from 'prop-types';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {IconButton,} from '@mui/material';
// more detail action
export const TableDetailButton = ({ actions, rowData }) => {
    const action = actions.find(action => action.type === 'more')

    return (
        <IconButton onClick={(e) => { action.onClicked(rowData); e.stopPropagation(); }} aria-label="AddCircle"  >
            <AddCircleOutlineIcon color="primary" />
        </IconButton>
    );
};
TableDetailButton.propTypes = {
    actions: PropTypes.any,
    rowData: PropTypes.any

};