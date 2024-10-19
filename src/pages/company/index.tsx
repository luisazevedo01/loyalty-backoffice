import ThemeSwitch from '@/components/theme-switch'

import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'

import { Button } from '@/components/custom/button'
import { Outlet, useNavigate } from 'react-router-dom'
import { Separator } from '@radix-ui/react-separator'
import FlagSwitch from '@/components/flag-switch'
import { useTranslation } from 'react-i18next'

export default function Company() {
  const {t} = useTranslation();
  const navigate = useNavigate()
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className='ml-auto flex items-center space-x-4'>
          <FlagSwitch />
          <ThemeSwitch />
          <UserNav />
        </div>
      </LayoutHeader>

      {/* ===== Main ===== */}
      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='space-y-0.5'>
          <div className='flex items-center justify-between space-y-2'>
            <h1 className='text-2xl font-bold tracking-tight md:text-3xl'>
              {t('lbl_companies')}
            </h1>
            <div className='flex items-center space-x-2'>
              <Button
                className='flex gap-1'
                onClick={() => navigate('/app/company/create')}
              >
                {t('lbl_add_company')}
              </Button>
            </div>
          </div>
          <p className='text-muted-foreground'>{t('lbl_companies_description')}.</p>
        </div>
        <Separator className='my-6' />
        <div className='flex flex-1 flex-col space-y-8 overflow-auto lg:flex-row lg:space-x-12 lg:space-y-0'>
          <Outlet />
        </div>
      </LayoutBody>
    </Layout>
  )
}
