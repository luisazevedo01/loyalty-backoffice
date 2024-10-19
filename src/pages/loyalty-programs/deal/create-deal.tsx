import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ChangeEvent, SetStateAction, useState } from 'react'

interface DealDialogProps {
  open: boolean
  onOpenChange: (newValue: SetStateAction<boolean>) => void
}

export function DealDialog({ open, onOpenChange }: DealDialogProps) {
  const [data, setData] = useState<any>({})

  const onChangeTitle = (evt: ChangeEvent<HTMLInputElement>) => {
    setData((curr: any) => ({
      ...curr,
      title: evt.target.value,
    }))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='sm:max-w-[585px]'>
        <DialogHeader>
          <DialogTitle>Add a new Deal program</DialogTitle>
          <DialogDescription>
            Here you can make a new Deal loyalty program.
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Title
            </Label>
            <Input
              id='title'
              className='col-span-3'
              value={data.title}
              onChange={onChangeTitle}
            />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Message
            </Label>
            <Input id='message' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Nº of Stamps
            </Label>
            <Input id='stamps' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Terms & Conditions
            </Label>
            <Input id='conditions' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Description
            </Label>
            <Input id='description' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Company
            </Label>
            <Input id='company' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right'>
              Return policy
            </Label>
            <Input id='return-policy' className='col-span-3' />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit'>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
