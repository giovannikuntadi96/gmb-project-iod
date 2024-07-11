import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import '@fortawesome/fontawesome-free/css/all.css'; 

const columns = [
    {   id: 'date', 
        label: (<span><i className="fas fa-calendar-alt"></i> Date</span>), 
        minWidth: 150,
        align: 'left'
    },
    {   id: 'userName', 
        label: (<span><i className="fas fa-user"></i> User Name</span>), 
        minWidth: 150,
        align: 'left'
    },
    {   id: 'rating', 
        label: (<span><i className="fas fa-star"></i> Rating</span>),
        minWidth: 120,
        align: 'center'
    },
    {   id: 'score', 
        label: (<span><i className="fas fa-chart-line"></i> Score</span>),
        minWidth: 120,
        align: 'center' 
    },
    {   id: 'comment', 
        label: (<span><i className="fas fa-comment"></i> Comment</span>), 
        minWidth: 350,
        align: 'left'
    },
    {   id: 'location', 
        label: (<span><i className="fas fa-map-marker-alt"></i> Location</span>), 
        minWidth: 150,
        align: 'left'
    },
  ];
  
  const TableReview = ({ rows }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [orderBy, setOrderBy] = React.useState('');
    const [order, setOrder] = React.useState('asc');

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleSort = (columnId) => {
        const isAsc = orderBy === columnId && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(columnId);
    };

    const sortedRows = React.useMemo(() => {
        const stabilizedRows = rows.map((row, index) => [row, index]);
        stabilizedRows.sort((a, b) => {
            const orderMultiplier = order === 'asc' ? 1 : -1;
            if (a[0][orderBy] < b[0][orderBy]) {
                return -1 * orderMultiplier;
            }
            if (a[0][orderBy] > b[0][orderBy]) {
                return 1 * orderMultiplier;
            }
            return 0;
        });
        return stabilizedRows.map((el) => el[0]);
    }, [rows, orderBy, order]);

    return (
        <div style={{ position: 'relative' }}>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, cursor: 'pointer' }}
                                        onClick={() => handleSort(column.id)}
                                    >
                                        {column.label}
                                        <i
                                            className={`fas ${orderBy === column.id ? (order === 'asc' ? 'fa-sort-up' : 'fa-sort-down') : 'fa-sort'}`}
                                            style={{
                                                color: orderBy === column.id ? 'black' : 'gray',
                                                marginLeft: '8px'
                                            }}
                                        ></i>
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    );
};

export default TableReview;