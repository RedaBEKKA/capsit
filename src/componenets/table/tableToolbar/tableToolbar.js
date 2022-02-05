import { alpha } from '@mui/material/styles';
import DeleteIcon from '@mui/icons-material/Delete';
import PropTypes from 'prop-types';

import { IconButton, Tooltip, Toolbar, Typography, } from '@mui/material';
import classes from './tableToolbar.module.scss';

// toolbar
export const EnhancedTableToolbar = (props) => {
    const { numSelected, title } = props;

    return (
        <Toolbar
            className={`${classes.toolbar}`}
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    className={`${classes.title} ${classes.title_bold}`}
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    {title}
                </Typography>
            )}

            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <div>
                    {props.children}
                </div>

            )}
        </Toolbar>
    );
};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number,
    toolbarTitle: PropTypes.string
};