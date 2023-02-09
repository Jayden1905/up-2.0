import React from 'react'
import utilities from './tailwind.json'
import { TailwindProvider } from 'tailwind-rn'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './navigator/RootNavigator'

export default function App() {
  return (
    // @ts-ignore tailwind-rn doesn't have types yet
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  )
}
