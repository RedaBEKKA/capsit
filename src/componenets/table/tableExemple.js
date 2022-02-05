import React from 'react';
import PropTypes from 'prop-types';
import { CapsitTable } from './capsitTable';

const TableExemple = props => {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('fisrtName');
    const [selected, setSelected] = React.useState([]);
    const [pageSize, setPageSize] = React.useState(20);
    const [page, setPage] = React.useState(0);
    const [totalItem, setTotalItem] = React.useState(60)

    const columns = [
        { id: 'id', label: 'id', numeric: false, disablePadding: true, type: 'checkbox', sortable: false, width: 100 },
        { id: 'fisrtName', label: 'Nom', numeric: false, disablePadding: true, type: 'text', sortable: true, align: 'center', width: 100 },
        { id: 'lastName', label: 'Prénom', numeric: false, disablePadding: true, type: 'text', sortable: true, width: 100 },
        { id: 'age', label: 'Age', numeric: false, disablePadding: true, type: 'text', sortable: false, width: 100 },
        { id: 'action', label: 'Action', type: 'action', width: 200 },
        { id: 'details', label: 'Détails', type: 'detail', align: 'center', width: 100 }
    ]
    const rows = [
        { id: 1, fisrtName: 'khelil', lastName: 'tarik', age: 25 },
        { id: 2, fisrtName: 'mhd', lastName: 'ibra', age: 20 },
        { id: 3, fisrtName: 'tebani', lastName: 'moh', age: 19 },
    ]
    const actions = [
        { name: 'delete', onClicked: (id) => { console.log('ici delete') }, type: 'delete' },
        { name: 'edit', onClicked: (id) => { console.log('ici edit') }, type: 'edit' },
        { name: 'add', onClicked: (id) => { console.log('ici add') }, type: 'add' },
        { name: 'detail', onClicked: (id) => { console.log('ici detaile') }, type: 'more' }

    ]
    const onSortColumn = (sort, dir) => {
        setOrderBy(sort);
        setOrder(dir);
    }
    const onChangePage = (p) => {
        setPage(p)
    }
    const onSelectedItem = (selectedItem) => {
        setSelected(selectedItem);


    }
    return (
        <div>
            <CapsitTable
                columns={columns}
                rows={rows}
                actions={actions}
                onSortColumn={onSortColumn}
                order={order}
                orderBy={orderBy}
                onSelectedItem={onSelectedItem}
                selectedItem={selected}
                title={'Table title'}
                page={page}
                pageSize={pageSize}
                totalItem={totalItem}
                onPageChange={onChangePage} />

        </div>
    );
};

TableExemple.propTypes = {

};

export default TableExemple;