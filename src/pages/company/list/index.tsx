import { companyColumns } from './components/company-columns'
import { CompanyDataTable } from './components/company-data-table'
import { companies } from './data/companies'

export default function CompanyList() {
  return (
    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <CompanyDataTable data={companies} columns={companyColumns} />
    </div>
  )
}
