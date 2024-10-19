import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react'
import {
  CreateStampCard,
  StampCardFormValues,
} from './create-stamp-card'
import { useState } from 'react'
import { toast } from '@/components/ui/use-toast'
import { EditStampCard } from './edit-stamp-card'

interface StampCards {
  stamps: any[]
}

export default function StampCards({ stamps }: StampCards) {
  const [showCreateDialog, setShowCreateDialog] = useState(false)
  const [showEditDialog, setShowEditDialog] = useState(false)
  const [filter, setFilter] = useState('')

  function onSubmit(data: StampCardFormValues) {
    //createStampCard(data);
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <div className='flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0'>
      <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
        <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
          <Input
            placeholder='Filter stamp cards...'
            className='h-9 w-40 lg:w-[250px]'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Button
          variant='outline'
          size='sm'
          className='flex gap-2 hover:opacity-75 light:bg-white'
          onClick={() => setShowCreateDialog(true)}
        >
          Stamp Card
          <IconPlus size={18} />
        </Button>
      </div>
      <Separator className='shadow' />
      <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-1 lg:grid-cols-2'>
        {stamps
          .filter((stamp) =>
            stamp.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((stamp, idx) => (
            <li
              key={`cashback_${idx}`}
              className='rounded-lg border bg-card p-4 hover:shadow-md'
            >
              <div className='mb-8 flex flex-col justify-between'>
                <div className='flex flex-row justify-between'>
                  <h1 className='mb-1 text-lg font-semibold'>{stamp.title}</h1>
                  <div className='flex-end flex gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => setShowEditDialog(true)}
                    >
                      <IconPencil size={18} />
                    </Button>
                    <Button
                      variant='outline'
                      size='sm'
                      className={
                        'border border-red-300 bg-red-50 hover:bg-red-100 dark:border-red-700 dark:bg-red-950 dark:hover:bg-red-900'
                      }
                      onClick={() => console.log('remove')}
                    >
                      <IconTrash size={18} />
                    </Button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-start justify-between'>
                <h4 className='mb-1'>
                  <strong>Company:</strong> {stamp.company}
                </h4>
                <p className='mb-1 text-sm'>{stamp.message}</p>
                <p className='mb-1 text-sm'>{stamp.description}</p>
              </div>
            </li>
          ))}
      </ul>
      <CreateStampCard
        open={showCreateDialog}
        onSubmit={onSubmit}
        onShowDialog={setShowCreateDialog}
      />
      <EditStampCard
        open={showEditDialog}
        onSubmit={onSubmit}
        onShowDialog={setShowEditDialog}
      />
    </div>
  )
}
