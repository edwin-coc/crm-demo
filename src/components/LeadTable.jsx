import { useState } from 'react'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableBody from '@mui/material/TableBody'
import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import TablePagination from '@mui/material/TablePagination'

import useRole from '../hooks/useRoles'

const columns = [
    { id: 'firstName', label: 'First Name', minWidth: 170 },
    { id: 'lastName', label: 'Last Name', minWidth: 170 },
    { id: 'countryCode', label: '', minWidth: 50 },
    { id: 'phoneNumber', label: 'Phone', minWidth: 170 },
    { id: 'email', label: 'Email', minWidth: 170 },
    { id: 'actions', label: '', minWidth: 100 }
]

export default function LeadTable({ children, applications, handleOpenModal, actions }) {

    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)

    const { role } = useRole()

    const handleChangePage = (_, newPage) => setPage(newPage)
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    return (
        <>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {
                                columns.map(column => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={ { minWidth: column.minWidth } }
                                    >
                                        { column.label }
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applications.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map(application => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={application._id}>
                                    {columns.map(column => {
                                        const value = application[column.id]
                                        const _idParam = application['_id']
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === 'actions' && actions ? (
                                                    <>
                                                        <ButtonGroup color="secondary">
                                                        <Button variant="outlined" color="info" onClick={() => handleOpenModal(_idParam)}>Follow</Button>
                                                        {(role === 'admin' || role === 'collaborator') && (
                                                        <Button variant="outlined" color="error">Delete</Button>
                                                        )}
                                                        </ButtonGroup>
                                                    </>
                                                ) : (value)
                                                }
                                            </TableCell>
                                        )
                                    })}
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {children}
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={applications.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </>
    )
}