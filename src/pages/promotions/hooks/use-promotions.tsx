import HttpRequest from '@/helpers/HttpRequest'
import { useEffect } from 'react'

interface UsePromotionsController {
  getLoyaltyPrograms: () => Promise<void>
  getLoyaltyProgramsTypes: () => Promise<void>
}

const usePromotions = (): UsePromotionsController => {
  const getLoyaltyPrograms = async () => {
    try {
      await HttpRequest.GET('/loyaltyPrograms')
    } catch (err) {
      console.log(err)
    }
  }
  const getLoyaltyProgramsTypes = async () => {
    try {
      await HttpRequest.GET('/loyaltyPrograms/types')
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getLoyaltyPrograms();
    getLoyaltyProgramsTypes();
  }, [])

  return {
    getLoyaltyPrograms,
    getLoyaltyProgramsTypes,
  }
}

export default usePromotions
