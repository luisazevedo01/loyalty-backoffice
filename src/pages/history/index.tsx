import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { Layout, LayoutBody, LayoutHeader } from '@/components/custom/layout'
import { DataTable } from './components/data-table'
import { columns } from './components/columns'
import { scans } from './data/scans'
import { Button } from '@/components/custom/button'
import { IconDownload } from '@tabler/icons-react'
import { useReactToPrint } from 'react-to-print'
import { useRef } from 'react'
import FlagSwitch from '@/components/flag-switch'
import { useTranslation } from 'react-i18next'

export default function History() {
  const {t} = useTranslation();
  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

      <LayoutBody className='flex flex-col' fixedHeight>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h1 className='text-2xl font-bold tracking-tight'>{t('lbl_history')}!</h1>
            <p className='text-muted-foreground'>
              {t('lbl_history_description')}
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <Button className='flex gap-1' onClick={handlePrint}>
              {t('lbl_extract')}
              <IconDownload size={18} />
            </Button>
          </div>
        </div>

        <div className='-mx-4 mt-5 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable tableRef={componentRef} data={scans} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  )
}
