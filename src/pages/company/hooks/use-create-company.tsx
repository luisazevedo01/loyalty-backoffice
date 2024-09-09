import HttpRequest from '@/helpers/HttpRequest'
import { z } from 'zod'
import { companyFormSchema } from '../components/create-company-form'
import { useNavigate } from 'react-router-dom'

interface UseCreateCompanyController {
  createCompany: (data: z.infer<typeof companyFormSchema>) => Promise<void>
}

const useCreateCompany = (): UseCreateCompanyController => {
  const navigate = useNavigate();
  const createCompany = async (data: z.infer<typeof companyFormSchema>) => {
    try {
      const res = await HttpRequest.POST('/company', {
        name: data.name,
        description: data.description,
        category: data.category,
        logo: data.logo,
        website: data.website,
        facebook: data.facebook,
        instagram: data.instagram,
      })
      console.log(res, '!!!!!!?!')
      navigate('/app/company')
    } catch (err) {
      console.log(err)
      alert('Error on createCompany()')
    }
  }
  return {
    createCompany,
  }
}

export default useCreateCompany
