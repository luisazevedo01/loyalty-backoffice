import HttpRequest from '@/helpers/HttpRequest'
import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { Company } from '../list/data/schema'
import { deleteCompany, fetchCompanies } from '@/services/company'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useToast } from '@/components/ui/use-toast'

interface UseListCompanyController {
  companies: Array<any> | undefined
  isConfirmationDialogOpen: boolean
  setIsConfirmationDialogOpen: (value: SetStateAction<boolean>) => void
  onDelete: (company: Company) => void
}

const useListCompany = (): UseListCompanyController => {
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState<boolean>(false)

  const queryClient = useQueryClient()
  const toast = useToast()

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

  /*   const getCompanies = useCallback(async () => {
    try {
      const companies = await fetchCompanies()
      setCompanies(companies)
    } catch (err) {
      console.error(err)
      alert('Error on getCompanies()')
    }
  }, []) */

  const onDelete = useCallback((company: Company): void => {
    deleteMutation.mutate(company.id, {
      onSuccess: () => {
        alert('Company was deleted!!')
      },
    })
  }, [])

  return {
    companies: data,
    isConfirmationDialogOpen,
    setIsConfirmationDialogOpen,
    onDelete,
  }
}

export default useListCompany
