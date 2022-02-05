import * as React from 'react';
import PropTypes from 'prop-types';
import { visuallyHidden } from '@mui/utils';
import {
   Box,  TableCell, TableHead, 
    TableRow, TableSortLabel, Checkbox
} from '@mui/material';
// table header 
export function EnhancedTableHead(props) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, headCells } =
        props;
    const createSortHandler = (orderBy) => (event) => {
        const dir = orderBy === orderBy && order === 'asc' ? 'desc' : 'asc';

        onRequestSort(orderBy, dir);
    };



    const renderColumnByType = (headCell) => {
        switch (headCell.type) {
            case 'checkbox': return (
                <Checkbox
                    color="primary"
                    indeterminate={numSelected > 0 && numSelected < rowCount}
                    checked={rowCount > 0 && numSelected === rowCount}
                    onChange={onSelectAllClick}
                    inputProps={{
                        'aria-label': 'select all desserts',
                    }}
                />
            )

            default: return headCell.label
        }


    }
    const renderColumnBySort = (headCell) => {
        if (headCell.sortable) {
            return <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
            >
                {renderColumnByType(headCell)}
                {orderBy === headCell.id ? (
                    <Box component="span" sx={visuallyHidden}>
                        {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </Box>
                ) : null}
            </TableSortLabel>


        } else {
            return renderColumnByType(headCell)

        }

    }
    return (
        <TableHead>
            <TableRow>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.align ?? 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        {renderColumnBySort(headCell)}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
    headCells: PropTypes.array.isRequired
};