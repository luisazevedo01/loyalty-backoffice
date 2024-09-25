import ConfirmationDialog from '@/components/ui/confirmation-dialog'
import useListCompany from '../hooks/use-list-company'
import { companyColumns } from './components/company-columns'
import { CompanyDataTable } from './components/company-data-table'
import { useCallback, useMemo } from 'react'
import { Company } from './data/schema'

export default function CompanyList() {
  const fromList = useListCompany()

  //const onDelete = useCallback((company: Company) => alert(`On delete ${company.description}`) , [])
  const onEdit = useCallback(
    (company: Company) => alert(`On edit ${company.description}`),
    []
  )

  const columns = useMemo(
    () => companyColumns({ onDelete: fromList.onDelete, onEdit }),
    []
  )

  return (
    <>
      <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
        <CompanyDataTable data={fromList.companies || []} columns={columns} />
      </div>
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
