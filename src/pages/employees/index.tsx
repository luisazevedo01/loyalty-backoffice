import { useEffect, useState } from 'react'
import {
  IconAdjustmentsHorizontal,
  IconSortAscendingLetters,
  IconSortDescendingLetters,
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
import { Button } from '@/components/custom/button'
import { employees } from './data'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { getInitials } from '@/utils/get-initials'
import { Pencil2Icon } from '@radix-ui/react-icons'

const appText = new Map<string, string>([
  ['employee', 'Employee'],
  ['manager', 'Manager'],
  ['chief', 'Chief'],
])

export default function Employees() {
  const [sort, setSort] = useState('ascending')
  const [userType, setUserType] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [displayEmployees, setDisplayEmployees] = useState<typeof employees>([])

  /*   const sortedEmployees = useMemo(
    () =>
      employees
        .sort((a, b) =>
          sort === 'ascending'
            ? a.name.localeCompare(b.name)
            : b.name.localeCompare(a.name)
        )
        .filter((app) =>
          app.name.toLowerCase().includes(searchTerm.toLowerCase())
        ),
    [employees]
  ) */

  const getEmployees = async () => {
    setTimeout(() => {
      const res = employees.sort((a, b) =>
        sort === 'ascending'
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      )
      setDisplayEmployees(res)
    }, 1000)
  }

  const removeEmployee = (id: string) => {
    const newEmployees = displayEmployees.filter((emp) => id !== emp.uuid)
    return setDisplayEmployees(newEmployees)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  useEffect(() => {
    const filtered = employees.filter((emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setDisplayEmployees(filtered)
  }, [searchTerm])

  return (
    <Layout fadedBelow fixedHeight>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='flex w-full items-center justify-between'>
          <div className='ml-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <UserNav />
          </div>
        </div>
      </LayoutHeader>

      {/* ===== Content ===== */}
      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>Employees</h1>
            <p className='text-muted-foreground'>
              Here&apos;s a list of employees associated to your company!
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Button className='flex gap-1'>Add Employee</Button>
          </div>
        </div>
        {/*         <div>
          <h1 className='text-2xl font-bold tracking-tight'>Users</h1>
          <p className='text-muted-foreground'>
            Here&apos;s a list of users associated to your company!
          </p>
        </div> */}
        <div className='my-4 flex items-end justify-between sm:my-0 sm:items-center'>
          <div className='flex flex-col gap-4 sm:my-4 sm:flex-row'>
            <Input
              placeholder='Filter users...'
              className='h-9 w-40 lg:w-[250px]'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
          {displayEmployees.map((employee) => (
            <li
              key={employee.name}
              className='rounded-lg border bg-card p-4 hover:shadow-md'
            >
              <div className='mb-8 flex items-center justify-between'>
                <div
                  className={`flex size-10 items-center justify-center rounded-lg bg-muted p-2`}
                >
                  <Avatar className='m-auto h-8 w-8'>
                    <AvatarImage src='/avatars/01.png' alt='@shadcn' />
                    <AvatarFallback>
                      {getInitials(employee.name)}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <Button
                  variant='outline'
                  size='sm'
                  className={
                    'border border-red-300 bg-red-50 hover:bg-red-100 dark:border-red-700 dark:bg-red-950 dark:hover:bg-red-900'
                  }
                  onClick={() => removeEmployee(employee.uuid)}
                >
                  Remove
                </Button>
              </div>
              <div className='flex items-end justify-between'>
                <div>
                  <h2 className='mb-1 font-semibold'>{employee.name}</h2>
                  <p className='line-clamp-2 text-gray-500'>{employee.role}</p>
                </div>
                <span>
                  <Pencil2Icon width='24px' height='24px' className='text-gray-500 hover:text-gray-900' />
                </span>
              </div>
            </li>
          ))}
        </ul>
      </LayoutBody>
    </Layout>
  )
}
