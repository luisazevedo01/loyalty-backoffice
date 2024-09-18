import CreateCompanyForm from './components/create-company-form'
import useCreateCompany from '../hooks/use-create-company'

export default function CompanyCreate() {
  const fromCreateCompany = useCreateCompany()

  return (
    <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
      <CreateCompanyForm
        data={{}}
        createCompany={fromCreateCompany.createCompany}
      />
    </div>
  )
}
