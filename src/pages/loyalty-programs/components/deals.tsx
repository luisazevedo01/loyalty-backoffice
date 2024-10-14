import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Pencil2Icon } from '@radix-ui/react-icons'
import {
  IconPlus,
} from '@tabler/icons-react'

interface DealsProps {
  programs: any[]
}

export default function Deals({ programs }: DealsProps) {
  return (
    <div className='flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-y-0'>
      <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
        <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
          <Input
            placeholder='Filter deals...'
            className='h-9 w-40 lg:w-[250px]'
            value={''}
            onChange={(e) => console.log('stampcards')}
          />
        </div>
        <Button
          variant='outline'
          size='sm'
          className='flex gap-2 hover:opacity-75 light:bg-white'
          onClick={() => console.log('remove')}
        >
          Deal
          <IconPlus size={18} />
        </Button>
      </div>
      <Separator className='shadow' />
      <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-1 lg:grid-cols-2'>
        {programs.map((deal: (typeof programs)[0], idx) => (
          <li
            key={`stamp_${idx}`}
            className='rounded-lg border bg-card p-4 hover:shadow-md'
          >
            <div className='mb-8 flex items-center justify-between'>
              <h1 className='mb-1 font-semibold'>{deal.title}</h1>

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
                <h2 className='mb-1'>{deal.message}</h2>
                <p className='line-clamp-2 text-gray-500'>Nº de Stamps: {deal.stamps}</p>
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
    </div>
  )
}
