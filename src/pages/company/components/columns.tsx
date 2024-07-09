import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'

import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

import { types } from '../data/data'
import { Company } from '../data/schema'

export const columns: ColumnDef<Company>[] = [
  /*   {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }, */
  {
    accessorKey: 'id',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Id' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  /*  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('name')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'employees',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Employees' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('employees')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('type')}</div>,
    enableSorting: false,
    enableHiding: false,
  }, */
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Name' />
    ),
    cell: ({ row }) => {
      /*       if (!name) {
        return null
      } */

      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label?.label}</Badge>} */}
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('name')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type' />
    ),
    cell: ({ row }) => {
      const type = types.find(
        (type: any) => type.value === row.getValue('type')
      )

      if (!type) {
        return null
      }

      return (
        <div className='flex w-[100px] items-center'>
          {type && <Badge variant='outline'>{type?.label}</Badge>}
          {/*           <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('type')}
          </span> */}
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'employees',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Employees' />
    ),
    cell: ({ row }) => {
      /*       const employee = employees.find(
        (employee: any) => employee.value === row.getValue('employees')
      ) */

      /*       if (!employee) {
        return null
      } */

      return (
        <div className='flex items-center'>
          {/*{false && <Badge variant='outline'>{employee?.label}</Badge>}*/}
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('employees')}
          </span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
