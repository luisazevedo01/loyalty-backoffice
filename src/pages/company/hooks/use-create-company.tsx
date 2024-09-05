import HttpRequest from '@/helpers/http-request'
import { z } from 'zod'
import { companyFormSchema } from '../components/create-company-form'

interface UseCreateCompanyController {
  createCompany: (data: z.infer<typeof companyFormSchema>) => Promise<void>
}

const useCreateCompany = (): UseCreateCompanyController => {
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
