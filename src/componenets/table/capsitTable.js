import * as React from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableRow,  Checkbox } from '@mui/material';
import { EnhancedTableHead } from './tableHeader/tableHeader'
import { TableActions } from './celleType/actions'
import { TableDetailButton } from './celleType/detailButton'
import { TablePagination } from './tablePagination/tablePagination'

// Table 
export function CapsitTable(props) {
    const { columns, rows, actions, order, orderBy, onSelectedItem, selectedItem, 
        totalItem, pageSize, page, onChangePage } = props;


    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.id);
            onSelectedItem(newSelecteds)
            return;
        }
        onSelectedItem([])
    };

    const handleClick = (event, name) => {
        const selectedIndex = selectedItem.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selectedItem, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selectedItem.slice(1));
        } else if (selectedIndex === selectedItem.length - 1) {
            newSelected = newSelected.concat(selectedItem.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selectedItem.slice(0, selectedIndex),
                selectedItem.slice(selectedIndex + 1),
            );
        }

        onSelectedItem(newSelected)
    };

    const handleChangePage = (event, newPage) => {
        onChangePage(newPage);
    };


    const isSelected = (id) => selectedItem.indexOf(id) !== -1;

    const renderTableRows = () => {
        return rows.map((row, rowIndex) => {
            return <TableRow
                key={rowIndex}
                hover
            >
                {columns.map((col, colIndex) => {

                    return <TableCell width={col.width ?? 100} align={col.align ?? 'left'} padding="none" key={colIndex + rowIndex} >
                        {renderColumnByType(row, col)}

                    </TableCell>
                })
                }
            </TableRow>
        })
    }
    const renderColumnByType = (row, headCell) => {
        const labelId = `enhanced-table-checkbox-${row.id}`
        const isItemSelected = isSelected(row.id);
        switch (headCell.type) {
            case 'checkbox': return (
                <Checkbox
                    onClick={(event) => handleClick(event, row.id)}
                    color="primary"
                    checked={isItemSelected}
                    inputProps={{
                        'aria-labelledby': labelId,
                    }}
                />
            )
            case 'action': return (
                <TableActions actions={actions} rowData={row} />
            )
            case 'detail': return (
                <TableDetailButton actions={actions} rowData={row} />
            )

            default: return row[headCell.id]
        }


    }

    const numberPages = Math.round(totalItem / pageSize)


    return (
        <>
            <TableContainer>
                <Table
                    sx={{ minWidth: 500 }}
                    aria-labelledby="tableTitle"
                    size={'medium'}
                >
                    <EnhancedTableHead
                        numSelected={selectedItem.length}
                        order={order}
                        orderBy={orderBy}
                        onSelectAllClick={handleSelectAllClick}
                        onRequestSort={props.onSortColumn}
                        rowCount={rows.length}
                        headCells={columns}
                    />
                    <TableBody>
                        {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
                        {
                            renderTableRows()
                        }
                        {rows.length === 0 && (
                            <TableRow>

                                <TableCell colSpan={6} >
                                    empty data
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>

            {totalItem > pageSize ?
                < TablePagination
                    totalItem={totalItem}
                    count={numberPages}
                    page={page}
                    handleChangePage={handleChangePage}
                /> : null}
        </>


    );
}
CapsitTable.propTypes = {

    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired,
    actions: PropTypes.array.isRequired,
    onSortColumn: PropTypes.func.isRequired,
    onSelectedItem: PropTypes.any,
    selectedItem: PropTypes.array,
    totalItem: PropTypes.number,
    page: PropTypes.number,
    pageSize: PropTypes.number,
    onPageChange: PropTypes.func
};