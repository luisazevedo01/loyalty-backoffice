import HttpRequest from '@/helpers/HttpRequest'
import { useEffect, useState } from 'react'

interface UseLoyaltyProgramsController {
  stampCards: any[]
  points: any[]
  cashback: any[]
  vouchers: any[]
  deals: any[]
  getLoyaltyPrograms: () => Promise<void>
  getLoyaltyProgramsTypes: () => Promise<void>
}

const programsData = [
  {
    title: 'Stamp Card 1',
    message: '2 menus pelo preço de 1',
    stamps: 2,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'stamp-card',
  },
  {
    title: 'Stamp Card 2',
    message: 'Ganhe 1 na compra de 10',
    stamps: 1,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'stamp-card',
  },
  {
    title: 'Stamp Card 3',
    message: 'Ganhe 2 na compra de 15',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'stamp-card',
  },
  {
    title: 'Points 1',
    message: 'Ganhe 10 pontos na compra de 2 produtos',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'points',
  },
  {
    title: 'Cashback 1',
    message: 'Ganhe 10 pontos na compra de 2 produtos',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'cashback',
  },
  {
    title: 'Cashback 1',
    message: 'Ganhe 10 pontos na compra de 2 produtos',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'cashback',
  },
  {
    title: 'Vouchers 1',
    message: 'Ganhe 10 pontos na compra de 2 produtos',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'vouchers',
  },
  {
    title: 'Deal 1',
    message: 'Ganhe 10 pontos na compra de 2 produtos',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'deals',
  },
  {
    title: 'Deal 2',
    message: 'Ganhe 10 pontos na compra de 2 produtos',
    stamps: 0,
    description: 'Uma descrição....',
    company: 'Luis LDA',
    type: 'deals',
  },
]

const useLoyaltyPrograms = (): UseLoyaltyProgramsController => {
  const [stampCards, setStampCards] = useState(
    programsData.filter((program) => program.type === 'stamp-card')
  )
  const [points, setPoints] = useState(
    programsData.filter((program) => program.type === 'points')
  )
  const [cashback, setCashback] = useState(
    programsData.filter((program) => program.type === 'cashback')
  )
  const [vouchers, setVouchers] = useState(
    programsData.filter((program) => program.type === 'vouchers')
  )
  const [deals, setDeals] = useState(
    programsData.filter((program) => program.type === 'deals')
  )

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
    getLoyaltyPrograms()
    getLoyaltyProgramsTypes()
  }, [])

  return {
    stampCards,
    points,
    cashback,
    vouchers,
    deals,
    getLoyaltyPrograms,
    getLoyaltyProgramsTypes,
  }
}

export default useLoyaltyPrograms
