import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Stack } from '@mui/material';

export const TablePagination = props => {
    const { page, handleChangePage, count } = props

    return (
        <Stack spacing={2}>
            <Pagination count={count} page={page} onChange={handleChangePage} />
        </Stack>
    );
};

TablePagination.propTypes = {
    totalItem: PropTypes.number,
    count:PropTypes.number,
    page: PropTypes.number,
    handleChangePage: PropTypes.any,


};

