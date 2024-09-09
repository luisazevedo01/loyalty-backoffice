import HttpRequest from '@/helpers/HttpRequest'

interface UseDashboardController {
  getUser: () => Promise<void>
}

const useDashboard = (): UseDashboardController => {
  const getUser = async () => {
    try {
      const res = await HttpRequest.GET('/user/me')
      console.log(res, '!!!!!!?!')
    } catch (err) {
      console.log(err)
      alert('Error')
    }
  }
  return {
    getUser,
  }
}

export default useDashboard
