import HttpRequest from '@/helpers/HttpRequest'
import {
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'

interface UseListCompanyController {
  companies: Array<any>
  setCompanies: (value: SetStateAction<any[]>) => void
  fetchCompanies: () => Promise<void>
  onDeleteCompany: (companyId: string) => Promise<void>
}

const useListCompany = (): UseListCompanyController => {
  const [companies, setCompanies] = useState<any[]>([])


  const fetchCompanies = useCallback(async () => {
    try {
      const getCompanies = await HttpRequest.GET('/company')
      setCompanies(getCompanies.data)
    } catch (err) {
      console.error(err)
      alert('Error on getCompanies()')
    }
  }, [])


  const onDeleteCompany = useCallback(async (companyId: string) => {
    try {
      await HttpRequest.DELETE(`/company/${companyId}`)
      await fetchCompanies()
    } catch (err) {
      console.error(err)
      alert('Error on deleting company')
    }
  }, [])

  useEffect(() => {
    fetchCompanies()
  }, [])

  useEffect(() => {
    console.log('companies (hook-state): ', companies)
  }, [fetchCompanies, companies])

  return {
    companies,
    setCompanies,
    fetchCompanies,
    onDeleteCompany,
  }
}

export default useListCompany
