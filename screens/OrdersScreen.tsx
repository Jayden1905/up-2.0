import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist'

export default function OrdersScreen() {
  const tw = useTailwind()

  return (
    <View style={tw('flex justify-center items-center')}>
      <Text style={tw('text-blue-800 text-3xl font-bold')}>Orders Screen</Text>
    </View>
  )
}
