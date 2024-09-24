import HttpRequest from '@/helpers/HttpRequest'
import { Company } from '@/pages/company/list/data/schema'
import { AxiosResponse } from 'axios'

export const fetchCompanies = async (): Promise<Company[]> => {
  const getCompanies = await HttpRequest.GET('/company')
  return getCompanies.data
}

export const deleteCompany = async (companyId: string): Promise<AxiosResponse<any, any>> => {
  return await HttpRequest.DELETE(`/company/${companyId}`)
}
