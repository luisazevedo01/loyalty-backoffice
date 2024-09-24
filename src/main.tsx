import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from '@/components/ui/toaster'
import { ThemeProvider } from '@/components/theme-provider'
import router from '@/router'
import '@/index.css'
import { AuthProvider } from './hooks/use-auth'
import i18n from 'i18next'
import { I18nextProvider, initReactI18next } from 'react-i18next'
import english from '@/locales/en/translation.json'
import portugues from '@/locales/pt/translation.json'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: english,
    },
    pt: {
      translation: portugues,
    },
  },
  lng: 'pt',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <I18nextProvider i18n={i18n}>
          <RouterProvider router={router} />
          <Toaster />
        </I18nextProvider>
      </AuthProvider>
    </QueryClientProvider>
  </ThemeProvider>
)
