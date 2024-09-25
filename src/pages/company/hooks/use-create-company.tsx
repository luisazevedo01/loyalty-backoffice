import { z } from 'zod'
import { companyFormSchema } from '../create/components/create-company-form'
import { useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { createCompany } from '@/services/company'
import { useToast } from '@/components/ui/use-toast'

interface UseCreateCompanyController {
  createCompany: (data: z.infer<typeof companyFormSchema>) => void
}

const useCreateCompany = (): UseCreateCompanyController => {
  const navigate = useNavigate()
  const { toast } = useToast()

  const createMutation = useMutation({
    mutationFn: (company: z.infer<typeof companyFormSchema>) =>
      createCompany(company),
    onSuccess: () => navigate('/app/company'),
    onError: () =>
      toast({
        variant: 'destructive',
        description: 'Whoops! Something went wrong.',
      }),
  })

  return {
    createCompany: createMutation.mutate,
  }
}

export default useCreateCompany
