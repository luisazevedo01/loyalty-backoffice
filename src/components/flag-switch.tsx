import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from './ui/button'

export default function FlagSwitch() {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation()
  const [currentLanguage, setCurrentLanguage] = useState(language)

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    setCurrentLanguage(newLanguage)
    changeLanguage(newLanguage)
  }

  return (
    <Button
      size='icon'
      variant='ghost'
      className='rounded-full'
      onClick={handleChangeLanguage}
    >
      {language === 'en' ? (
        <h1 className='text-xl'>🇵🇹</h1>
      ) : (
        <h1 className='text-xl'>🇬🇧</h1>
      )}
    </Button>
  )
}
