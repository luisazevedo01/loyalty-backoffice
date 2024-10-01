import { useTranslation } from 'react-i18next'
import { UserAuthForm } from './components/user-auth-form'
import ViteLogo from '@/assets/vite.svg'
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/use-auth';

export default function SignIn() {
  const {t} = useTranslation();
  const auth = useAuth()
  
  if (auth.isLoggedIn) {
    return <Navigate to='/app' replace />
  }

  return (
    <>
      <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
        <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
          <div className='absolute inset-0 bg-zinc-900' />
          <div className='relative z-20 flex items-center text-lg font-medium'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            Loyalty App
          </div>

          <img
            src={ViteLogo}
            className='relative m-auto'
            width={301}
            height={60}
            alt='Vite'
          />

          <div className='relative z-20 mt-auto'>
            <blockquote className='space-y-2'>
              <p className='text-lg'>
                Loyalty process app for companies, stores and more...
              </p>
              <footer className='text-sm'>Pedro Oliveira</footer>
            </blockquote>
          </div>
        </div>
        <div className='lg:p-8'>
          <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-2xl font-semibold tracking-tight'>{t('lbl_sign_in')}</h1>
              <p className='text-sm text-muted-foreground'>
                {t('lbl_sign_in_description_1')} <br />
                {t('lbl_sign_in_description_2')}
              </p>
            </div>
            <UserAuthForm />
            <p className='px-8 text-center text-sm text-muted-foreground'>
              {t('lbl_terms_and_conditions_description')}{' '}
              <a
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                {t('lbl_terms_and_conditions')}
              </a>{' '}
              {t('lbl_and_policies')}{' '}
              <a
                href='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                {t('lbl_privacy_policy')}
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
