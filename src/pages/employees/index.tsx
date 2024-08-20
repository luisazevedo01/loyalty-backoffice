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
import { Outlet } from 'react-router-dom'

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
        {/*           <aside className='sticky top-0 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside> */}
        <Outlet />
      </LayoutBody>
    </Layout>
  )
}
