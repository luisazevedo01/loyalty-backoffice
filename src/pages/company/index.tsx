import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ThemeSwitch from '@/components/theme-switch'

import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'

import CreateCompanyForm from './components/create-company-form'
import EditCompanyForm from './components/edit-company-form'
import { DataTable } from './components/data-table'
import { companies } from './data/companies'
import { columns } from './components/columns'
import { Button } from '@/components/custom/button'

export default function Company() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className='space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Companies
          </h1>
          <div className='flex items-center space-x-2'>
            <Button className='flex gap-1'>Add a company</Button>
          </div>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='create'
          className='space-y-4'
        >
          <div className='w-full overflow-x-scroll pb-2'>
            <TabsList>
              <TabsTrigger value='create'>Create</TabsTrigger>
              <TabsTrigger value='edit'>Edit</TabsTrigger>
              <TabsTrigger value='companies'>Companies</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='create' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4'>
              <Card className='col-span-1 p-2'>
                <CardContent className='p-6'>
                  <CreateCompanyForm />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='edit' className='space-y-4'>
            <div className='grid grid-cols-1 gap-4'>
              <Card className='col-span-1 p-2'>
                <CardContent className='p-6'>
                  <EditCompanyForm />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value='companies' className='space-y-4'>
            <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
              <DataTable data={companies} columns={columns} />
            </div>
          </TabsContent>
        </Tabs>
      </LayoutBody>
    </Layout>
  )
}
