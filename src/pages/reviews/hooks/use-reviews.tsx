import HttpRequest from '@/helpers/HttpRequest'
import { Company } from '@/pages/company/list/data/schema'
import { getCompanyEmployees } from '@/services/company'
import { useQuery } from '@tanstack/react-query'
import { SetStateAction, useState } from 'react'

interface UseReviewsController {
  targetCompany?: Company;
  setTargetCompany: (company: SetStateAction<Company | undefined>) => void;
  getReviews: () => Promise<void>;
}

const useReviews = (): UseReviewsController => {
  const [targetCompany, setTargetCompany] = useState<Company>();
  const companyId = targetCompany?.id || '';

  const { data } = useQuery({
    queryKey: ['companyEmployees', companyId],
    queryFn: ({ queryKey }) => getCompanyEmployees(queryKey[1]),
    initialData: [],
  })
  console.log('DATA (employees): ', data)
  const getReviews = async () => {
    try {
      const res = await HttpRequest.GET('/review/getByUserId/luidsazd')
      console.log(res, '!!!!!!?!')
    } catch (err) {
      console.log(err)
    }
  }
  return {
    targetCompany,
    setTargetCompany,
    getReviews,
  }
}

export default useReviews
