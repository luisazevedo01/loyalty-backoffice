import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Pencil2Icon } from '@radix-ui/react-icons'
import { IconPlus } from '@tabler/icons-react'
import { PointsDialog } from './create-loyalty-points'
import { useState } from 'react'

interface LoyaltyPointsProps {
  points: any[]
}

export default function LoyaltyPoints({ points }: LoyaltyPointsProps) {
  const [showDialog, setShowDialog] = useState(false)
  const [filter, setFilter] = useState("")


  return (
    <div className='flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0'>
      <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
        <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
          <Input
            placeholder='Filter points...'
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
          Points
          <IconPlus size={18} />
        </Button>
      </div>
      <Separator className='shadow' />
      <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-1 lg:grid-cols-2'>
        {points
          .filter((stamp) =>
            stamp.title.toLowerCase().includes(filter.toLowerCase()))
          .map((stamp: (typeof points)[0], idx) => (
            <li
              key={`stamp_${idx}`}
              className='rounded-lg border bg-card p-4 hover:shadow-md'
            >
              <div className='mb-8 flex items-center justify-between'>
                <h1 className='mb-1 font-semibold'>{stamp.title}</h1>

                <Button
                  variant='outline'
                  size='sm'
                  className={
                    'border border-red-300 bg-red-50 hover:bg-red-100 dark:border-red-700 dark:bg-red-950 dark:hover:bg-red-900'
                  }
                  onClick={() => console.log('remove')}
                >
                  Remove
                </Button>
              </div>
              <div className='flex items-start justify-between'>
                <div>
                  <h2 className='mb-1'>{stamp.message}</h2>
                  <p className='line-clamp-2 text-gray-500'>
                    Nº de Stamps: {stamp.stamps}
                  </p>
                </div>
                <span>
                  <Pencil2Icon
                    width='24px'
                    height='24px'
                    className='text-gray-500 hover:text-gray-900'
                  />
                </span>
              </div>
            </li>
          ))}
      </ul>
      <PointsDialog open={showDialog} onOpenChange={setShowDialog} />
    </div>
  )
}
