import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { IconCopy } from '@tabler/icons-react'
import { SetStateAction } from 'react'

interface AddEmployeeDialogProps {
  open: boolean
  email: string
  onChangeEmail: (newValue: SetStateAction<string>) => void
  onOpenChange: (newValue: boolean) => void
  onSubmit: () => void
}

const AddEmployeeDialog = ({
  open,
  email,
  onChangeEmail,
  onOpenChange,
  onSubmit,
}: AddEmployeeDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='gap-6 sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Add New Employee</DialogTitle>
          <DialogDescription>
            Enter the employee's email address to add a new employee to the
            company.
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-2'>
            <Label htmlFor='link' className='sr-only'>
              Email
            </Label>
            <Input
              value={email}
              onChange={(e) => onChangeEmail(e.target.value)}
            />
          </div>
          <Button type='submit' size='sm' className='px-3'>
            <span className='sr-only'>Copy</span>
            <IconCopy className='h-4 w-4' />
          </Button>
        </div>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
          <Button type='submit' variant='default' onClick={onSubmit}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddEmployeeDialog
