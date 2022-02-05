// actions
import * as React from 'react';
import PropTypes from 'prop-types';
import { Stack, Button, IconButton, Menu, MenuItem, } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export const TableActions = ({ actions, rowData }) => {
    actions = actions.filter(action => action.type !== 'more')

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? 'long-menu' : undefined}
                aria-expanded={open ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: '20ch',
                    },
                }}
            >
                {actions.map((act, index) => (
                    <MenuItem key={index} onClick={() => { act.onClicked(rowData); handleClose(); }}>
                        {act.name}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};
TableActions.propTypes = {
    actions: PropTypes.array.isRequired,
    rowData: PropTypes.any.isRequired,

};