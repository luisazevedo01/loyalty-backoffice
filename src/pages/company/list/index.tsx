import useListCompany from '../hooks/use-list-company'
import { companyColumns } from './components/company-columns'
import { CompanyDataTable } from './components/company-data-table'
import { useCallback, useMemo } from 'react'
import { Company } from './data/schema'
import ConfirmationDialog from '@/components/custom/confirmation-dialog'
import AddEmployeeDialog from './components/add-employee-dialog'

export default function CompanyList() {
  const fromList = useListCompany()

  //const onDelete = useCallback((company: Company) => alert(`On delete ${company.description}`) , [])
  const onEdit = useCallback(
    (company: Company) => alert(`On edit ${company.description}`),
    []
  )

  const columns = useMemo(
    () => companyColumns({ onDelete: fromList.onDelete, onEdit, addEmployee: fromList.addEmployee}),
    []
  )

  return (
    <>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <CompanyDataTable data={fromList.companies || []} columns={columns} />
      </div>
      <AddEmployeeDialog
        open={fromList.showAddEmployeeDialog}
        email={fromList.newEmployee}
        onChangeEmail={fromList.setNewEmployee}
        onOpenChange={fromList.onOpenChangeEmployeeDialog}
        onSubmit={fromList.onSubmitNewEmployee}
      />
      <ConfirmationDialog
        title='Are you sure you want to delete this company?'
        description='This action cannot be undone. Deleting this company will permanently remove all related data from our servers.'
        open={fromList.showConfirmationDialog}
        onOpenChange={fromList.setShowConfirmationDialog}
        onCancel={() => fromList.setShowConfirmationDialog(false)}
        onConfirm={fromList.onDeleteConfirmation}
      />
    </>
  )
}
