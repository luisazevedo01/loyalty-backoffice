import useListCompany from '../hooks/use-list-company'
import { companyColumns } from './components/company-columns'
import { CompanyDataTable } from './components/company-data-table'

export default function CompanyList() {
  const fromList = useListCompany()

  return (
    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <CompanyDataTable data={fromList.companies} columns={companyColumns} />
    </div>
  )
}
