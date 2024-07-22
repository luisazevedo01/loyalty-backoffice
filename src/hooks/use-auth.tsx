import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import HttpRequest from '@/helpers/http-request'
import { Navigate } from 'react-router-dom'

interface AuthContextType {
  isLoggedIn: boolean
  onLogin: (data: any) => Promise<void>
  onLogout: () => void
}

const defaultValue: AuthContextType = {
  isLoggedIn: false,
  onLogin: () => Promise.resolve(),
  onLogout: () => {},
}

const AuthContext = createContext(defaultValue)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onLogin = useCallback(
    async (data: any) => {
      const response: any = await HttpRequest.POST('/auth/login', {
        ...data,
      })

      HttpRequest.setAuthorization(response.accessToken)

      setIsLoggedIn(true)
    },
    [setIsLoggedIn]
  )

  const onLogout = async () => {
    try {
      setIsLoggedIn(false)
      HttpRequest.setAuthorization('')
    } catch (err) {
      console.log('ERR:', err)
    }
  }

  const value = useMemo(
    () => ({
      isLoggedIn,
      onLogin,
      onLogout,
    }),
    [isLoggedIn]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return useContext(AuthContext)
}
