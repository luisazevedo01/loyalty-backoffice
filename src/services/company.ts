import HttpRequest from '@/helpers/HttpRequest'
import { companyFormSchema } from '@/pages/company/create/components/create-company-form'
import { Company } from '@/pages/company/list/data/schema'
import { AxiosResponse } from 'axios'
import { z } from 'zod'

export const getAllCompanies = async (): Promise<Company[]> => {
  const companies = await HttpRequest.GET('/company')
  return companies.data
}

export const getCompanyEmployees = async (
  companyId: string
): Promise<Company[]> => {
  const companies = await HttpRequest.GET(
    `/company/${companyId}/getCompanyUsers`
  )
  return companies.data
}

export const createNewEmployee = async (
  companyId: string,
  email: string
): Promise<AxiosResponse<any, any>> => {
  return await HttpRequest.POST(`/company/${companyId}/addEmployeeToCompany`, {
    email,
  })
}

export const createCompany = async (
  company: z.infer<typeof companyFormSchema>
): Promise<AxiosResponse<any, any>> => {
  return await HttpRequest.POST('/company', company)
}

export const deleteCompany = async (
  companyId: string
): Promise<AxiosResponse<any, any>> => {
  return await HttpRequest.DELETE(`/company/${companyId}`)
}
