import { useEffect, useMemo, useState } from 'react';
import { flexRender, getCoreRowModel, getFilteredRowModel, useReactTable } from '@tanstack/react-table';
import * as Elements from "./styles"
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const Table = ({ data, columns }: any) => {
  const [tableData, setTableData] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');

  useEffect(() => {
    setTableData(data);
  }, [data]);

  const tableColumns = useMemo(() => columns, [columns]);

  const table = useReactTable({
    data: tableData,
    columns: tableColumns,
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  return (
    <ThemeProvider theme={theme}>
      <Elements.Container>
        <Elements.SearchContainer>
          <Elements.StyledInput
            value={globalFilter ?? ''}
            onChange={(value) => setGlobalFilter(String(value))}
            placeholder="Pesquisar..."
          />
        </Elements.SearchContainer>

        <Elements.TableWrapper>
          <Elements.StyledTable>
            <Elements.Thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <Elements.Tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <Elements.Th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </Elements.Th>
                  ))}
                </Elements.Tr>
              ))}
            </Elements.Thead>
            <tbody>
              {table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <Elements.Tr key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <Elements.Td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </Elements.Td>
                    ))}
                  </Elements.Tr>
                ))
              ) : (
                <Elements.Tr>
                  <Elements.Td colSpan={columns.length} style={{ textAlign: 'center' }}>
                    Nenhum resultado encontrado.
                  </Elements.Td>
                </Elements.Tr>
              )}
            </tbody>
          </Elements.StyledTable>
        </Elements.TableWrapper>
      </Elements.Container>

      <Elements.Footer>
        Exibindo {table.getRowModel().rows.length} resultados
      </Elements.Footer>
    </ThemeProvider>
  );
};

export default Table;