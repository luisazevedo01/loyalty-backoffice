import HttpRequest from '@/helpers/HttpRequest'
import { getUser } from '@/services/user'
import { useQuery } from '@tanstack/react-query'

interface UseDashboardController {
  user: any
}

const useDashboard = (): UseDashboardController => {
  const { data } = useQuery({
    queryKey: ['userMe'],
    queryFn: getUser,
  })

  return {
    user: data,
  }
}

export default useDashboard
