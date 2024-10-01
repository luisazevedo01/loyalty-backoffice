import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from './sidebar'
import useIsCollapsed from '@/hooks/use-is-collapsed'
import { useAuth } from '@/hooks/use-auth'

export default function AppShell() {
  const [isCollapsed, setIsCollapsed] = useIsCollapsed()
  const auth = useAuth()
  
  if (!auth.isLoggedIn) {
    return <Navigate to='/' replace />
  }

  return (
    <div className='relative h-full overflow-hidden'>
      <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      <main
        id='content'
        className={`overflow-x-hidden pt-16 transition-[margin] md:overflow-y-hidden md:pt-0 ${isCollapsed ? 'md:ml-14' : 'md:ml-64'} h-full`}
      >
        <Outlet />
      </main>
    </div>
  )
}
