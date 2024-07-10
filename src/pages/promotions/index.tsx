import { Button } from '@/components/custom/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'

export default function Promotions() {
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
            Promotions
          </h1>
          {/*           <div className='flex items-center space-x-2'>
            <Button className='flex gap-1'>Next</Button>
          </div> */}
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-scroll pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics'>Vouchers</TabsTrigger>
              <TabsTrigger value='reports'>Packs</TabsTrigger>
              <TabsTrigger value='notifications'>Cashback</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Cashback
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>€1 231</div>
                  <p className='text-xs text-muted-foreground'>Your cashback</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Promotions Available
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <path d='M22 12h-4l-3 9L9 3l-3 9H2' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>12</div>
                  <p className='text-xs text-muted-foreground'>
                    Check your available promotions
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    Vouchers
                  </CardTitle>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    className='h-4 w-4 text-muted-foreground'
                  >
                    <rect width='20' height='14' x='2' y='5' rx='2' />
                    <path d='M2 10h20' />
                  </svg>
                </CardHeader>
                <CardContent>
                  <div className='text-2xl font-bold'>3</div>
                  <p className='text-xs text-muted-foreground'>
                    +1 since last hour
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4 lg:grid-cols-7'>
              <Card className='col-span-1 lg:col-span-4'>
                <CardHeader>
                  <CardTitle>Vouchers</CardTitle>
                  <CardDescription>
                    You can find the available vouchers below...
                  </CardDescription>
                </CardHeader>
                <CardContent className='pl-2'>
                  <ul className='no-scrollbar grid gap-4 overflow-y-scroll pb-16 pt-4 md:grid-cols-1 lg:grid-cols-2'>
                    <li
                      key='1'
                      className='rounded-lg border p-4 hover:shadow-md'
                    >
                      <div className='mb-8 flex items-center justify-between'>
                        <div>
                          <h2 className='mb-1 font-semibold'>
                            Aquisition Voucher
                          </h2>
                          <p className='line-clamp-2 text-gray-500'>
                            The Aquisition Voucher will give you 1 after you
                            complete 10
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      key='2'
                      className='rounded-lg border p-4 hover:shadow-md'
                    >
                      <div className='mb-8 flex items-center justify-between'>
                        <div>
                          <h2 className='mb-1 font-semibold'>
                            Two in One Voucher
                          </h2>
                          <p className='line-clamp-2 text-gray-500'>
                            This voucher allows you to buy 1 and take 2
                          </p>
                        </div>
                      </div>
                    </li>
                    <li
                      key='2'
                      className='rounded-lg border p-4 hover:shadow-md'
                    >
                      <div className='mb-8 flex items-center justify-between'>
                        <div>
                          <h2 className='mb-1 font-semibold'>
                            Example Voucher
                          </h2>
                          <p className='line-clamp-2 text-gray-500'>
                            This is just an example on a possible voucher
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Available packs</CardTitle>
                  <CardDescription>
                    Currently we have 3 different types of packs...
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className='mt-2'>
                    <Card className='col-span-1 lg:col-span-3'>
                      <CardHeader>
                        <CardTitle>
                          <h1>Standard</h1>
                        </CardTitle>
                        <CardDescription>
                          With the Standard pack you may view some
                          informations...
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className='mt-2'>
                    <Card className='col-span-1 lg:col-span-3'>
                      <CardHeader>
                        <CardTitle>
                          <h1>Silver</h1>
                        </CardTitle>
                        <CardDescription>
                          With the Silver pack you will have a specific
                          dashboard to help you manage your company...
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                  <div className='mt-2'>
                    <Card className='col-span-1 lg:col-span-3'>
                      <CardHeader>
                        <CardTitle>
                          <h1>Gold</h1>
                        </CardTitle>
                        <CardDescription>
                          With the Gold pack you will have a access to all
                          informaiton available...
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </LayoutBody>
    </Layout>
  )
}

const topNav = [
  {
    title: 'Overview',
    href: '/overview',
    isActive: true,
  },
  {
    title: 'Customers',
    href: '/customers',
    isActive: false,
  },
  {
    title: 'Products',
    href: '/products',
    isActive: false,
  },
  {
    title: 'Settings',
    href: '/settings',
    isActive: false,
  },
]
