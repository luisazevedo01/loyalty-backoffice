import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { loyalCustomers } from '../data/data'

export function RecentSales() {
  return (
    <div className='space-y-8'>
      {loyalCustomers.map((customer) => (
        <div className='flex items-center'>
          <Avatar className='h-9 w-9'>
            <AvatarImage src='/avatars/01.png' alt='Avatar' />
            <AvatarFallback className='light:bg-cyan-100'>OM</AvatarFallback>
          </Avatar>
          <div className='ml-4 space-y-1'>
            <p className='text-sm font-medium leading-none'>{customer.name}</p>
            <p className='text-sm text-muted-foreground'>{customer.email}</p>
          </div>
          <div className='ml-auto font-medium'>+{customer.spendings}</div>
        </div>
      ))}
      {/* 
      <div className='flex items-center'>
        <Avatar className='flex h-9 w-9 items-center justify-center space-y-0 border'>
          <AvatarImage src='/favicon.png' alt='Avatar' /> 
          <AvatarFallback className='bg-pink-500'>JL</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Jackson Lee</p>
          <p className='text-sm text-muted-foreground'>jackson.lee@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/03.png' alt='Avatar' />
          <AvatarFallback>IN</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Isabella Nguyen</p>
          <p className='text-sm text-muted-foreground'>
            isabella.nguyen@email.com
          </p>
        </div>
        <div className='ml-auto font-medium'>+$299.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/04.png' alt='Avatar' />
          <AvatarFallback>WK</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>William Kim</p>
          <p className='text-sm text-muted-foreground'>will@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$99.00</div>
      </div>
      <div className='flex items-center'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src='/avatars/05.png' alt='Avatar' />
          <AvatarFallback>SD</AvatarFallback>
        </Avatar>
        <div className='ml-4 space-y-1'>
          <p className='text-sm font-medium leading-none'>Sofia Davis</p>
          <p className='text-sm text-muted-foreground'>sofia.davis@email.com</p>
        </div>
        <div className='ml-auto font-medium'>+$39.00</div>
      </div> */}
    </div>
  )
}
