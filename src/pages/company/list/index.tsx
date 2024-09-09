import { useEffect, useState } from 'react'
import useListCompany from '../hooks/use-list-company'
import { companyColumns } from './components/company-columns'
import { CompanyDataTable } from './components/company-data-table'

export default function CompanyList() {
  const fromList = useListCompany()

  const [companies, setCompanies] = useState([])

  useEffect(() => {
    const fn = async () => {
      const companiesData = await fromList.getCompanies()
      setCompanies(companiesData)
    }
    fn()
  }, [])

  return (
    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <CompanyDataTable data={companies} columns={companyColumns} />
    </div>
  )
}
