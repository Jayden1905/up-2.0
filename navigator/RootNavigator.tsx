import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { RootStackParamList } from '../types'
import TabNavigator from './TabNavigator'

const RootStack = createNativeStackNavigator<RootStackParamList>()

export default function RootNavigator() {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  )
}
