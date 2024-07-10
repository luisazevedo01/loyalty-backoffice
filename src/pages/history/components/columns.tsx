import { ColumnDef } from '@tanstack/react-table'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { DataTableColumnHeader } from './data-table-column-header'
import { DataTableRowActions } from './data-table-row-actions'

import { labels, mock_shops, mock_type_of_loyalty } from '../data/data'
import { Task } from '../data/schema'

export const columns: ColumnDef<Task>[] = [
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
      <DataTableColumnHeader column={column} title='Scans' />
    ),
    cell: ({ row }) => <div className='w-[80px]'>{row.getValue('id')}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'title',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => {
      const label = labels.find((label) => label.value === row.original.label)

      return (
        <div className='flex space-x-2'>
          {/*{label && <Badge variant='outline'>{label.label}</Badge>} */}
          <span className='max-w-32 truncate font-medium sm:max-w-72 md:max-w-[31rem]'>
            {row.getValue('title')}
          </span>
        </div>
      )
    },
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Type of Loyalty' />
    ),
    cell: ({ row }) => {
      const typeOfLoyalty = mock_type_of_loyalty.find(
        (type) => type.value === row.getValue('type')
      )

      if (!typeOfLoyalty) {
        return null
      }

      return (
        <div className='flex w-[100px] items-center'>
          {typeOfLoyalty.icon && (
            <typeOfLoyalty.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{typeOfLoyalty.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'shops',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Shops' />
    ),
    cell: ({ row }) => {
      const shop = mock_shops.find(
        (shop) => shop.value === row.getValue('shops')
      )

      if (!shop) {
        return null
      }

      return (
        <div className='flex items-center'>
          {shop.icon && (
            <shop.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{shop.label}</span>
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
