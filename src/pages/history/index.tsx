import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { scans } from './data/scans'
import { Button } from '@/components/custom/button'
import { IconDownload } from '@tabler/icons-react'

export default function History() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>History!</h1>
            <p className='text-muted-foreground'>
              Here&apos;s a history of your scans!
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Button className='flex gap-1'>
              Extract
              <IconDownload size={18} />
            </Button>
          </div>
        </div>

        <div className='-mx-4 mt-5 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={scans} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  )
}
