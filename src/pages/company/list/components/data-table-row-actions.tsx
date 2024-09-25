import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Row } from '@tanstack/react-table'

import { Button } from '@/components/custom/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { companySchema } from '../data/schema'
import { useNavigate } from 'react-router-dom'

interface DataTableRowActionsProps<TCompanyData> {
  row: Row<TCompanyData>
  onEdit: (value: TCompanyData) => void
  onDelete: (value: TCompanyData) => void
}

export function DataTableRowActions<TCompanyData>({
  row,
  onDelete,
}: DataTableRowActionsProps<TCompanyData>) {
  const navigate = useNavigate()
  const company = companySchema.parse(row.original)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
        >
          <DotsHorizontalIcon className='h-4 w-4' />
          <span className='sr-only'>Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-[160px]'>
        <DropdownMenuItem
          onClick={() => navigate(`/app/company/edit?id=${company.id}`)}
        >
          Edit
          <DropdownMenuShortcut>✎</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Make a copy
          <DropdownMenuShortcut>📁</DropdownMenuShortcut>
        </DropdownMenuItem>
        {/*         
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>Companies</DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuRadioGroup value={company.name}>
              {names.map((name) => (
                <DropdownMenuRadioItem key={name.value} value={name.value}>
                  {name.value}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator /> 
        */}
        <DropdownMenuItem onClick={() => onDelete(row.original)}>
          Delete
          <DropdownMenuShortcut>🗑️</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
