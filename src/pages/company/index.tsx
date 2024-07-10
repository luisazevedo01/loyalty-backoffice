import ThemeSwitch from '@/components/theme-switch'

import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'

import { Button } from '@/components/custom/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { Separator } from '@radix-ui/react-separator'

export default function Company() {
  const navigate = useNavigate()
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
      {/*     <LayoutBody className='space-y-4'>
        <div className='flex items-center justify-between space-y-2'>
          <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
            Companies
          </h1>
          <div className='flex items-center space-x-2'>
            <Button
              className='flex gap-1'
              onClick={() => navigate('/app/create-company')}
            >
              Add a company
            </Button>
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
        <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={companies} columns={columns} />
        </div>
      */}
      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='space-y-0.5'>
          <div className='flex items-center justify-between space-y-2'>
            <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
              Companies
            </h1>
            <div className='flex items-center space-x-2'>
              <Button
                className='flex gap-1'
                onClick={() => navigate('/app/company/create')}
              >
                Add a company
              </Button>
            </div>
          </div>
          <p className='text-muted-foreground'>Manage your companies.</p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0'>
          {/*           <aside className='sticky top-0 lg:w-1/5'>
            <SidebarNav items={sidebarNavItems} />
          </aside> */}
          <Outlet />
        </div>
      </LayoutBody>
    </Layout>
  )
}
