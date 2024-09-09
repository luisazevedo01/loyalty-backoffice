import AuthManager from '@/helpers/AuthManager'
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

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
  const [isLoggedIn, setIsLoggedIn] = useState(AuthManager.isLoggedIn)

  const onLogin = useCallback(
    async (data: any) => {
      try {
        await AuthManager.login(data)
        setIsLoggedIn(true)
      } catch (error) {
        console.error('Login failed:', error)
      }
    },
    []
  )

  const onLogout = async () => {
    try {
      AuthManager.logout()
      setIsLoggedIn(false)
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
