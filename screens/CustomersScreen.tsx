import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

const CustomersScreen = () => {
  const tw = useTailwind()
  return (
    <SafeAreaView>
      <View style={tw('flex justify-center items-center')}>
        <Text style={tw('text-red-800 text-2xl font-extrabold')}>
          Customers Screen
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default CustomersScreen
