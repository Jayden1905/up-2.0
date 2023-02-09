import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'
import MainLayout from '../components/layout/MainLayout'

const CustomersScreen = () => {
  const tw = useTailwind()
  return (
    <SafeAreaView>
      <MainLayout>
        <Text style={tw('text-red-800 text-2xl font-extrabold')}>
          Customers Screen
        </Text>
      </MainLayout>
    </SafeAreaView>
  )
}

export default CustomersScreen
