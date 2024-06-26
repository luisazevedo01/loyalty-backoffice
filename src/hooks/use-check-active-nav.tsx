import { useLocation } from 'react-router-dom'

export default function useCheckActiveNav() {
  const { pathname } = useLocation()
  console.log('location: ', pathname)
  const checkActiveNav = (nav: string) => {
    const pathArray = pathname.split('/').filter((item) => item !== 'app')

    if (nav === '/' && pathArray.length < 1) return true

    return pathArray.includes(nav.replace(/^\//, ''))
  }

  return { checkActiveNav }
}
