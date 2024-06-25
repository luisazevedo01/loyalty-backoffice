import { Input } from '@/components/ui/input'
import { useState } from 'react'

export function Search() {
  const [value, setValue] = useState('')
  return (
    <div>
      <Input
        type='search'
        value={value}
        onChange={(evt) => setValue(evt.currentTarget.value)}
        placeholder='Search...'
        className='md:w-[100px] lg:w-[300px]'
      />
    </div>
  )
}
