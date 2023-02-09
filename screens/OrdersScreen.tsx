import { Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'
import MainLayout from '../components/layout/MainLayout'

export default function OrdersScreen() {
  const tw = useTailwind()

  return (
    <MainLayout>
      <Text style={tw('text-blue-800 text-2xl font-bold')}>Orders Screen</Text>
    </MainLayout>
  )
}
