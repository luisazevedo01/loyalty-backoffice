import HttpRequest from '@/helpers/HttpRequest'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { Company } from '../list/data/schema'
import { deleteCompany, fetchCompanies } from '@/services/company'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useToast } from '@/components/ui/use-toast'

interface UseListCompanyController {
  companies: Array<any> | undefined
  showConfirmationDialog: boolean
  setShowConfirmationDialog: (value: SetStateAction<boolean>) => void
  onDeleteConfirmation: () => void
  onDelete: (company: Company) => void
}

const useListCompany = (): UseListCompanyController => {
  const queryClient = useQueryClient()
  const [showConfirmationDialog, setShowConfirmationDialog] =
    useState<boolean>(false)
  const [targetCompany, setTargetCompany] = useState<Company | null>(null)

  const { toast } = useToast()

  const { data } = useQuery({
    queryKey: ['allCompanies'],
    queryFn: () => fetchCompanies(),
    initialData: [],
  })

  const deleteMutation = useMutation({
    mutationFn: deleteCompany,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['allCompanies'] })
    },
  })

  const onDelete = useCallback((company: Company) => {
    setTargetCompany(company)
    setShowConfirmationDialog(true)
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
    showConfirmationDialog,
    onDelete,
    onDeleteConfirmation,
    setShowConfirmationDialog,
  }
}

export default useListCompany
