import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { useTailwind } from 'tailwind-rn/dist'

const CustomScreen = () => {
  const tw = useTailwind()
  return (
    <SafeAreaView>
      <View>
        <Text style={tw('text-red-500')}>Custom Screen</Text>
      </View>
    </SafeAreaView>
  )
}

export default CustomScreen
