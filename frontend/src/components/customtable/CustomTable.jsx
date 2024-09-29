import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    flexRender,
    createColumnHelper
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';
import '@styles/table/table.scss';

const defaultData = [
    {
        id: 1,
        firstName: 'tanner',
        lastName: 'linsley',
        age: 24,
        visits: 100,
        status: 'In Relationship',
        progress: 50,
    },
    {
        id: 2,
        firstName: 'tandy',
        lastName: 'miller',
        age: 40,
        visits: 40,
        status: 'Single',
        progress: 80,
    },
    {
        id: 3,
        firstName: 'joe',
        lastName: 'dirte',
        age: 45,
        visits: 20,
        status: 'Complicated',
        progress: 10,
    },
]

const columnHelper = createColumnHelper()

// const columns = [
//     columnHelper.display({
//         id: 'select',
//         header: ({ table }) => (
//             <input
//                 type="checkbox"
//                 checked={table.getIsAllRowsSelected()}
//                 onChange={table.getToggleAllRowsSelectedHandler()}
//             />
//         ),
//         cell: ({ row }) => (
//             <input
//                 type="checkbox"
//                 checked={row.getIsSelected()}
//                 onChange={row.getToggleSelectedHandler()}
//             />
//         ),
//     }),
//     columnHelper.accessor('firstName', {
//         cell: info => info.getValue(),
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor(row => row.lastName, {
//         id: 'lastName',
//         cell: info => <i>{info.getValue()}</i>,
//         header: () => <span>Last Name</span>,
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('age', {
//         header: () => 'Age',
//         cell: info => info.renderValue(),
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('visits', {
//         header: () => <span>Visits</span>,
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('status', {
//         header: 'Status',
//         footer: info => info.column.id,
//     }),
//     columnHelper.accessor('progress', {
//         header: 'Profile Progress',
//         footer: info => info.column.id,
//     }),
// ]

export const CustomTable = ({ data, columns, filter, onClick, hasFooter, pagination, page, perPage, setPage, setPerPage, totalPages }) => {
    const [selectedRows, setSelectedRows] = useState([]);
    const table = useReactTable({
        columns: columns,
        data: data,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        onGlobalFilterChange: setGlobalFilter => {
            if (setGlobalFilter !== filter) {
                setGlobalFilter(setGlobalFilter);
            }
        },
        enableRowSelection: true,
        state: {
            globalFilter: filter,
        },

    });

    useEffect(() => {
        table.setGlobalFilter(filter);
    }, [filter]);

    useEffect(() => {
        // Sync the parent state with the current selection
        const currentSelectedIds = table.getSelectedRowModel().rows.map(row => row.original.id);
        setSelectedRows(currentSelectedIds
        );
    }, [table.getSelectedRowModel().rows, setSelectedRows]);

    return (
        <div >
            <div style={{ overflowX: 'auto' }}>
                <table className="custom-table">
                    <thead>
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th

                                        style={header.column.columnDef.style}
                                        key={header.id}
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map(row => {
                            return (
                                <tr

                                    key={row.id}
                                    onClick={() => {
                                        if (onClick) onClick(row);
                                    }}
                                >
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                    {/* {hasFooter && (
                        <tfoot>
                            {table.getFooterGroups().map(footerGroup => (
                                <tr {...footerGroup.getFooterGroupProps()} key={footerGroup.id}>
                                    {footerGroup.headers.map(column => (
                                        <td {...column.getFooterProps()} key={column.id}>
                                            {flexRender(column.columnDef.footer, column.getContext())}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tfoot>
                    )} */}
                </table>
            </div>
            {/* {pagination !== false && props?.count > 10 && (
                <Row className="csTableFooter">
                    <Col md={8}>
                        <span>
                            Page{' '}
                            <strong>
                                {page + 1 || 0} of {totalPages || 1}
                            </strong>{' '}
                        </span>
                        <span style={{ marginRight: 5 }}>
                            | Total Items : <b> {props?.count}</b> |
                        </span>
                        Show
                        <select
                            value={perPage}
                            onChange={(e) => {
                                setPerPage(Number(e.target.value));
                                setPage(0);
                            }}
                        >
                            {[10, 20, 50, 100].map((p) => (
                                <option key={p} value={p}>
                                    {' '}
                                    {p}{' '}
                                </option>
                            ))}
                        </select>
                    </Col>
                    <Col md={4} style={{ display: 'flex', justifyContent: 'end' }}>
                        <div className="csTableFooterButtons">
                            <UilAngleDoubleLeft
                                className={`csPrevNextNav ${page === 0 && 'disabled'}`}
                                onClick={() => setPage(0)}
                            />
                            <UilAngleLeft
                                className={`csPrevNextNav ${page === 0 && 'disabled'}`}
                                onClick={() => {
                                    if (page > 0) setPage(page - 1);
                                }}
                            />
                            <ReactPaginate
                                onPageChange={(e) => setPage(e.selected)}
                                forcePage={page}
                                pageRangeDisplayed={3}
                                marginPagesDisplayed={1}
                                pageCount={totalPages}
                                pageClassName="page-item"
                                pageLinkClassName="page-link"
                                previousClassName="prev"
                                nextClassName="next"
                                breakLabel="..."
                                containerClassName="flex"
                                activeClassName="active"
                                renderOnZeroPageCount={null}
                            />
                            <UilAngleRight
                                className={`csPrevNextNav ${page === totalPages - 1 && 'disabled'
                                    }`}
                                onClick={() => {
                                    if (page < totalPages - 1)
                                        setPage(page + 1);
                                }}
                            />
                            <UilAngleDoubleRight
                                className={`csPrevNextNav ${page === totalPages - 1 && 'disabled'
                                    }`}
                                onClick={() => setPage(totalPages - 1)}
                            />
                        </div>
                    </Col>
                </Row>
            )} */}
        </div>
    );
};
