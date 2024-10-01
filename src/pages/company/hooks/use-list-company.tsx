import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { Company } from '../list/data/schema'
import {
  createNewEmployee,
  deleteCompany,
  getAllCompanies,
} from '@/services/company'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useToast } from '@/components/ui/use-toast'

interface UseListCompanyController {
  companies: Array<any> | undefined
  showConfirmationDialog: boolean
  showAddEmployeeDialog: boolean
  newEmployee: string
  onOpenChangeEmployeeDialog: (newValue: boolean) => void
  setShowConfirmationDialog: (value: SetStateAction<boolean>) => void
  setShowAddEmployeeDialog: (value: SetStateAction<boolean>) => void
  setNewEmployee: (newValue: SetStateAction<string>) => void
  addEmployee: (company: Company) => void
  onSubmitNewEmployee: () => void
  onDelete: (company: Company) => void
  onDeleteConfirmation: () => void
}

const useListCompany = (): UseListCompanyController => {
  const queryClient = useQueryClient()
  const { toast } = useToast()

  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false)
  const [showAddEmployeeDialog, setShowAddEmployeeDialog] = useState(false)

  const [targetCompany, setTargetCompany] = useState<Company | null>(null)
  const [newEmployee, setNewEmployee] = useState('')

  const { data } = useQuery({
    queryKey: ['allCompanies'],
    queryFn: () => getAllCompanies(),
    initialData: [],
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCompany,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['allCompanies'] })
    },
  })

  const createMutation = useMutation({
    mutationFn: ({ companyId, email }: { companyId: string; email: string }) =>
      createNewEmployee(companyId, email),
    onSuccess: () => toast({ description: 'Employee added successfully!!' }),
    onError: () =>
      toast({
        variant: 'destructive',
        description: 'Whoops! Something went wrong.',
      }),
  })

  const onSubmitNewEmployee = () => {
    createMutation.mutate({
      companyId: targetCompany?.id || '',
      email: newEmployee,
    })
    setShowAddEmployeeDialog(!showAddEmployeeDialog)
    setNewEmployee('')
  }

  const onOpenChangeEmployeeDialog = (newValue: boolean) => {
    setShowAddEmployeeDialog(newValue)
    setNewEmployee('')
  }

  const onDelete = useCallback((company: Company) => {
    setTargetCompany(company)
    setShowConfirmationDialog(true)
  }, [])

  const addEmployee = useCallback((company: Company) => {
    setTargetCompany(company)
    setShowAddEmployeeDialog(true)
  }, [])

  const onDeleteConfirmation = useCallback((): void => {
    deleteMutation.mutate(targetCompany?.id || '', {
      onSuccess: () => {
        toast({ description: 'Company was deleted successfully!' })
      },
      onError: () => {
        toast({
          variant: 'destructive',
          description: 'Whoops! Something went wrong.',
        })
      },
    })
  }, [targetCompany])

  return {
    companies: data,
    newEmployee,
    showAddEmployeeDialog,
    showConfirmationDialog,
    onDelete,
    addEmployee,
    setNewEmployee,
    onSubmitNewEmployee,
    onDeleteConfirmation,
    setShowAddEmployeeDialog,
    setShowConfirmationDialog,
    onOpenChangeEmployeeDialog,
  }
}

export default useListCompany
