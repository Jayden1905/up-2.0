import React from 'react'
import CustomScreen from './screens/CustomScreen'
import utilities from './tailwind.json'
import { TailwindProvider } from 'tailwind-rn'

export default function App() {
  return (
    // @ts-ignore tailwind-rn doesn't have types yet
    <TailwindProvider utilities={utilities}>
      <CustomScreen />
    </TailwindProvider>
  )
}
