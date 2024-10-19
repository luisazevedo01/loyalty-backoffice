import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { IconPencil, IconPlus, IconTrash } from '@tabler/icons-react'
import { useState } from 'react'
import { CashbackFormValues, CreateCashbackDialog } from './create-cashback'
import { toast } from '@/components/ui/use-toast'

interface CashbackProps {
  programs: any[]
}

export default function Cashback({ programs }: CashbackProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [filter, setFilter] = useState('')

  function onSubmit(data: CashbackFormValues) {
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
            placeholder='Filter cashback...'
            className='h-9 w-40 lg:w-[250px]'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <Button
          variant='outline'
          size='sm'
          className='flex gap-2 hover:opacity-75 light:bg-white'
          onClick={() => setShowDialog(true)}
        >
          Cashback
          <IconPlus size={18} />
        </Button>
      </div>
      <Separator className='shadow' />
      <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-1 lg:grid-cols-2'>
        {programs
          .filter((program) =>
            program.title.toLowerCase().includes(filter.toLowerCase())
          )
          .map((program: (typeof programs)[0], idx) => (
            <li
              key={`cashback_${idx}`}
              className='rounded-lg border bg-card p-4 hover:shadow-md'
            >
              <div className='mb-8 flex flex-col justify-between'>
                <div className='flex flex-row justify-between'>
                  <h1 className='text-lg mb-1 font-semibold'>{program.title}</h1>
                  <div className='flex flex-end gap-2'>
                    <Button
                      variant='outline'
                      size='sm'
                      onClick={() => console.log('remove')}
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
                <h4 className='mb-1'><strong>Company:</strong> {program.company}</h4>
                <p className='text-sm mb-1'>{program.message}</p>
                <p className='text-sm mb-1'>{program.description}</p>
              </div>
            </li>
          ))}
      </ul>
      <CreateCashbackDialog open={showDialog} onShowDialog={setShowDialog} onSubmit={onSubmit}/>
    </div>
  )
}
