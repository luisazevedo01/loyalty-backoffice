import { useState } from 'react'
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
  IconStar,
  IconStarFilled,
} from '@tabler/icons-react'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { reviews } from './data'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { getNameInitials } from '@/lib/utils'

export default function Reviews() {
  const [sort, setSort] = useState('ascending')
  const [reviewType, setReviewType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReviews = reviews
    .sort((a, b) =>
      sort === 'ascending' ? a.by.localeCompare(b.by) : b.by.localeCompare(a.by)
    )
    .filter((review) =>
      reviewType === 'connected'
        ? review.connected
        : reviewType === 'notConnected'
          ? !review.connected
          : true
    )
    .filter((review) =>
      review.by.toLowerCase().includes(searchTerm.toLowerCase())
    )

  return (
    <Layout fadedBelow fixedHeight>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='flex w-full items-center justify-between'>
          {/* <Search /> */}
          <div className='ml-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <UserNav />
          </div>
        </div>
      </LayoutHeader>

      {/* ===== Content ===== */}
      <LayoutBody className='flex flex-col' fixedHeight>
        <div>
          <h1 className='text-2xl font-bold tracking-tight'>Reviews</h1>
          <p className='text-muted-foreground'>
            Here&apos;s a list of your reviews!
          </p>
        </div>
        <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
          <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
            <Input
              placeholder='Filter by user...'
              className='h-9 w-40 lg:w-[250px]'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/*             <Select value={appType} onValueChange={setAppType}>
              <SelectTrigger className='w-36'>
                <SelectValue>{appText.get(appType)}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='all'>All Apps</SelectItem>
                <SelectItem value='connected'>Connected</SelectItem>
                <SelectItem value='notConnected'>Not Connected</SelectItem>
              </SelectContent>
            </Select> */}
          </div>

          <Select value={sort} onValueChange={setSort}>
            <SelectTrigger className='w-16'>
              <SelectValue>
                <IconAdjustmentsHorizontal size={18} />
              </SelectValue>
            </SelectTrigger>
            <SelectContent align='end'>
              <SelectItem value='ascending'>
                <div className='flex items-center gap-4'>
                  <IconSortAscendingLetters size={16} />
                  <span>Ascending</span>
                </div>
              </SelectItem>
              <SelectItem value='descending'>
                <div className='flex items-center gap-4'>
                  <IconSortDescendingLetters size={16} />
                  <span>Descending</span>
                </div>
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Separator className='shadow' />
        <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-2 lg:grid-cols-3'>
          {filteredReviews.map((review) => (
            <li
              key={review.by}
              className='rounded-lg border p-4 hover:shadow-md'
            >
              <div className='mb-8 flex items-center justify-between'>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  <Avatar className='m-auto h-8 w-8'>
                    <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                    <AvatarFallback>
                      {getNameInitials(review.by)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className='flex'>
                  {Array.from({ length: 5 }).map((_, idx) => {
                    if (review.stars > idx) {
                      return <IconStarFilled color='#f0c800' size={16} />
                    }
                    if (review.stars <= idx) {
                      return <IconStar color='#f0c800' size={16} />
                    }
                  })}
                </div>
                {/*                 <Button
                  variant='outline'
                  size='sm'
                  className={`${review.connected ? 'border border-blue-300 bg-blue-50 hover:bg-blue-100 dark:border-blue-700 dark:bg-blue-950 dark:hover:bg-blue-900' : ''}`}
                >
                  {review.connected ? 'Connected' : 'Connect'}
                </Button> */}
              </div>
              <div>
                <h2 className='mb-1 font-semibold'>{review.by}</h2>
                <p className='line-clamp-2 text-gray-500'>{review.review}</p>
              </div>
            </li>
          ))}
        </ul>
      </LayoutBody>
    </Layout>
  )
}
