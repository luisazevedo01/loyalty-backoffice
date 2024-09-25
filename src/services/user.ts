import HttpRequest from '@/helpers/HttpRequest'

export const getUser = async () => {
  const user = await HttpRequest.GET('/user/me')
  return user.data
}
